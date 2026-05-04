# 🏨 Shree Ji Palace — Hotel Management System

A full-stack premium hotel management dashboard with a modern dark-themed SaaS UI.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 19** | UI library (component-based) |
| **Vite 8** | Build tool & dev server (fast HMR) |
| **React Router DOM 7** | Client-side routing & navigation |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **Framer Motion 11** | Smooth animations & transitions |
| **Recharts 3** | Data visualization (charts, graphs) |
| **Axios** | HTTP client for API calls |
| **Lucide React** | Modern icon library |
| **React Hot Toast** | Toast notifications (success/error) |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js 18+** | JavaScript runtime |
| **Express.js 4** | REST API framework |
| **MongoDB** | NoSQL database |
| **Mongoose 8** | MongoDB ODM (schemas & models) |
| **JWT (jsonwebtoken)** | Authentication tokens |
| **bcryptjs** | Password hashing |
| **CORS** | Cross-origin resource sharing |
| **dotenv** | Environment variable management |

### Design & UI Patterns
| Pattern | Where Used |
|---------|-----------|
| **Glassmorphism** | Cards, modals, sidebar |
| **Dark Theme** | Entire application |
| **Gradient Accents** | Buttons, icons, active states |
| **Debounced Search** | Navbar global search (300ms) |
| **Lazy Loading** | All pages via React.lazy + Suspense |
| **Loading Skeletons** | Data loading states |
| **Empty States** | When no data available |
| **Form Validation** | All create/add modals |
| **Toast Notifications** | Success/error feedback |

---

## 📁 Project Structure

```
hm1/
├── server.js                  # Express server entry point
├── .env                       # Environment variables
├── package.json               # Backend dependencies
│
├── src/                       # Backend source
│   ├── config/
│   │   └── database.js        # MongoDB connection
│   ├── middleware/
│   │   └── authMiddleware.js   # JWT authentication
│   ├── models/
│   │   ├── Room.js            # Room schema
│   │   ├── Customer.js        # Guest/customer schema
│   │   ├── Booking.js         # Booking schema
│   │   ├── Bill.js            # Billing schema
│   │   └── User.js            # User/admin schema
│   ├── routes/
│   │   ├── authRoutes.js      # Login/signup
│   │   ├── roomRoutes.js      # CRUD rooms
│   │   ├── customerRoutes.js  # CRUD guests
│   │   ├── bookingRoutes.js   # CRUD bookings
│   │   └── billRoutes.js      # Billing
│   └── scripts/
│       └── seedAdmin.js       # Seed admin user
│
├── frontend/                  # React frontend
│   ├── index.html             # HTML entry point
│   ├── vite.config.js         # Vite configuration
│   ├── package.json           # Frontend dependencies
│   └── src/
│       ├── main.jsx           # React entry point
│       ├── App.jsx            # Routes + lazy loading
│       ├── index.css          # Global styles & design system
│       ├── utils/
│       │   └── api.js         # Axios instance + API methods
│       ├── components/
│       │   ├── Layout.jsx     # Sidebar + Navbar wrapper
│       │   ├── Navbar.jsx     # Top bar with search
│       │   ├── Sidebar.jsx    # Collapsible navigation
│       │   ├── StatCard.jsx   # Dashboard stat cards
│       │   ├── Modal.jsx      # Reusable modal
│       │   ├── EmptyState.jsx # No data available state
│       │   └── LoadingSkeleton.jsx
│       └── pages/
│           ├── AuthPage.jsx   # Login & signup
│           ├── Dashboard.jsx  # Main dashboard
│           ├── Rooms.jsx      # Room management
│           ├── Guests.jsx     # Guest management
│           ├── Bookings.jsx   # Booking management
│           ├── Billing.jsx    # Invoice management
│           └── Settings.jsx   # User settings
```

---

## 🚀 How to Run

### Prerequisites
- **Node.js** >= 18
- **MongoDB** running locally (default: `mongodb://127.0.0.1:27017`)

### Backend
```bash
cd c:\Users\cktha\OneDrive\Documents\hm1
npm install
npm run dev
```
> Runs on `http://localhost:3000`

### Frontend
```bash
cd c:\Users\cktha\OneDrive\Documents\hm1\frontend
npm install
npm run dev
```
> Runs on `http://localhost:5173`

### Seed Admin (one-time)
```bash
cd c:\Users\cktha\OneDrive\Documents\hm1
npm run seed
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/signup` | Register new user |
| POST | `/api/login` | Login & get JWT |
| GET | `/api/rooms` | List all rooms |
| GET | `/api/rooms/meta/stats` | Room statistics |
| POST | `/api/rooms` | Create room |
| PUT | `/api/rooms/:id` | Update room |
| DELETE | `/api/rooms/:id` | Delete room |
| GET | `/api/customers` | List all guests |
| POST | `/api/customers` | Add guest |
| DELETE | `/api/customers/:id` | Delete guest |
| GET | `/api/bookings` | List all bookings |
| GET | `/api/bookings/meta/stats` | Booking stats & revenue |
| POST | `/api/bookings` | Create booking |
| DELETE | `/api/bookings/:id` | Delete booking |
| GET | `/api/bills` | List all bills |
| POST | `/api/bills` | Generate bill |

---

## 👤 Author
Built for **Shree Ji Palace** Hotel Management.
