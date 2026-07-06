# Finance Dashboard

Finance Dashboard is a full-stack React + TypeScript application for tracking personal income and expenses.

The project includes transaction CRUD, financial statistics, routing, currency selection, exchange rate conversion, API validation, and persistent storage using PostgreSQL.

Live Demo: https://finance-dashboard-nu-hazel.vercel.app/

## Features

- Create, edit, and delete transactions
- Persistent transaction storage using PostgreSQL
- REST API for transaction management
- View transaction details
- Filter transactions by search query and type
- Sort transactions by date or amount
- Clear active filters
- Monthly financial summary
- Income, expense, and balance calculation
- Category statistics with bar charts
- Category suggestions based on existing transactions
- Currency selector: UAH, USD, EUR
- Exchange rate conversion using the Frankfurter API
- LocalStorage persistence for selected currency
- Form validation on the frontend
- API request validation with Zod
- Responsive layout
- 404 page for unknown routes
- Deployed frontend and backend

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- CSS
- Fetch API
- LocalStorage

### Backend

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Zod
- Docker

### Deployment

- Frontend: Vercel
- Backend: Render
- Database: Neon PostgreSQL

## Architecture Notes

The application keeps frontend, backend, and database logic separated.

### Frontend

- API calls are isolated in `src/api`
- State-related logic is handled by custom hooks
- Reusable UI is separated into components
- Page-level routing is handled in `pages`
- Currency conversion is handled by utility functions
- Money formatting is separated from conversion logic
- Styles are split into logical files inside the `styles` folder

### Backend

The backend follows a layered structure:

- `routes` define API endpoints
- `controllers` handle request and response logic
- `services` contain business logic and Prisma queries
- `schemas` contain Zod validation schemas
- `middleware` handles request validation and errors
- `mappers` format database responses for the frontend
- `db` contains the Prisma client setup

Transaction data is stored in PostgreSQL.  
The frontend communicates with the backend through a REST API.

## API Overview

### Transactions

| Method |         Endpoint        |       Description       |
| ------ | ----------------------- | ----------------------- |
| GET    | `/api/transactions`     | Get all transactions    |
| POST   | `/api/transactions`     | Create a transaction    |
| GET    | `/api/transactions/:id` | Get a transaction by ID |
| PATCH  | `/api/transactions/:id` | Update a transaction    |
| DELETE | `/api/transactions/:id` | Delete a transaction    |

## Main Functionality

### Transactions

Users can create, edit, delete, filter, sort, and view transactions.

Transactions are stored in PostgreSQL through the backend API, so data remains available after page refreshes and across sessions.

### Statistics

The dashboard shows:

- total income
- total expenses
- current balance
- monthly summary
- category-based income and expense charts

### Currency Conversion

Exchange rates are fetched from the Frankfurter API.

Transaction amounts are stored in the base currency. Currency conversion is applied only when displaying values in the UI.

The selected currency is saved in LocalStorage.

If exchange rates are unavailable, the UI remains usable and falls back to original values.

### Category Suggestions

The category input uses existing transaction categories as suggestions.

Users can select an existing category or type a new one.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Denys678/finance-dashboard.git
cd finance-dashboard
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 4. Configure environment variables

Create `.env.local` in the project root:

```env
VITE_API_BASE_URL=http://localhost:5001/api
```

Create `server/.env`:

```env
PORT=5001
DATABASE_URL="postgresql://finance_user:finance_password@localhost:5433/finance_dashboard"
```

Create `server/.env.docker`:

```env
POSTGRES_USER=finance_user
POSTGRES_PASSWORD=finance_password
POSTGRES_DB=finance_dashboard
```

### 5. Start PostgreSQL with Docker

From the `server` folder:

```bash
docker compose up -d
```

### 6. Run Prisma migrations

From the `server` folder:

```bash
npx prisma migrate dev
```

### 7. Start the backend

From the `server` folder:

```bash
npm run dev
```

### 8. Start the frontend

From the project root:

```bash
npm run dev
```

## Build

### Frontend

From the project root:

```bash
npm run build
```

### Backend

From the `server` folder:

```bash
npm run build
```

Run the production backend build:

```bash
npm start
```

## Status

Core full-stack functionality is implemented:

- transaction CRUD
- frontend routing
- backend REST API
- PostgreSQL persistence
- Prisma migrations
- Zod request validation
- filtering and sorting
- statistics
- category charts
- currency conversion
- responsive UI
- frontend deployment
- backend deployment
- production database deployment