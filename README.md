# Finance Dashboard

Finance Dashboard is a React + TypeScript application for tracking personal income and expenses.  
The project focuses on transaction management, financial statistics, routing, local persistence, currency selection, and exchange rate conversion.

## Features

- Create, edit, and delete transactions
- Delete confirmation dialog
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
- LocalStorage persistence for transactions and selected currency
- Form validation
- Responsive layout
- 404 page for unknown routes

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- CSS
- LocalStorage
- Fetch API
- Frankfurter API

## Project Structure

```txt
src/
├── api/          # External API requests
├── components/   # Reusable UI components
├── constants/    # Application constants
├── hooks/        # Custom React hooks
├── layouts/      # Layout components
├── pages/        # Route pages
├── styles/       # Global CSS split by responsibility
├── types/        # TypeScript types
├── utils/        # Reusable utility functions
├── App.tsx
└── main.tsx
```

## Architecture Notes

The application keeps business logic separated from UI components:

- API logic is isolated in `api/exchangeRatesApi.ts`
- State-related logic is handled by custom hooks
- Currency conversion is handled by a utility function
- Money formatting is separated from conversion logic
- Styles are split into logical files inside the `styles` folder

Transaction amounts are stored in the base currency: `UAH`.  
Currency conversion is applied only when displaying values in the UI.

## Main Functionality

### Transactions

Users can add, edit, delete, filter, sort, and view transactions.  
Transactions are persisted in LocalStorage.

### Statistics

The dashboard shows:

- total income
- total expenses
- current balance
- monthly summary
- category-based income and expense charts

### Currency Conversion

Exchange rates are fetched from the Frankfurter API.  
The selected currency is saved in LocalStorage and used to display converted values.

If exchange rates are unavailable, the UI remains usable and falls back to original values.

### Category Suggestions

The category input uses existing transaction categories as suggestions.  
Users can select an existing category or type a new one.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Status

Core functionality is implemented:

- transaction CRUD
- routing
- filtering and sorting
- statistics
- category charts
- currency conversion
- LocalStorage persistence
- responsive UI
- style structure refactor