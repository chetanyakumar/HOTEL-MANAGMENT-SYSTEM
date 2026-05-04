import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDatabase } from './src/config/database.js';
import { roomRouter } from './src/routes/roomRoutes.js';
import { customerRouter } from './src/routes/customerRoutes.js';
import { bookingRouter } from './src/routes/bookingRoutes.js';
import { billRouter } from './src/routes/billRoutes.js';
import { authRouter } from './src/routes/authRoutes.js';
import { authenticate } from './src/middleware/authMiddleware.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hotel_management';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ ok: true, message: 'Shree Ji Palace API is running' });
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRouter);
app.use('/api', authRouter);
app.use('/api/rooms', authenticate, roomRouter);
app.use('/api/customers', authenticate, customerRouter);
app.use('/api/bookings', authenticate, bookingRouter);
app.use('/api/bills', authenticate, billRouter);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

await connectDatabase(MONGODB_URI);
app.listen(PORT, () => {
  console.log(`Hotel management server at http://localhost:${PORT}`);
  console.log('Opens dashboard at /. Run npm run seed once for sample rooms.');
});
