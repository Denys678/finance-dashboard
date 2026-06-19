# Finance Dashboard

Finance Dashboard is a React + TypeScript application for tracking personal income and expenses.

## Features

- Add, edit, delete transactions
- View transaction details
- Filter transactions by search query and type
- Sort transactions by date or amount
- Clear active filters
- Save transactions in localStorage
- Show total income, expenses, and balance
- Show monthly statistics
- Display category statistics as bar charts
- Select display currency: UAH, USD, EUR
- Convert displayed amounts using exchange rates from the Frankfurter API
- Save selected currency in localStorage
- Validate transaction form fields
- Handle unknown routes with a 404 page

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- CSS
- localStorage
- Fetch API
- Frankfurter API

## Currency Conversion

All transaction amounts are stored in the base currency: `UAH`.

The selected currency changes only how amounts are displayed. Exchange rates are fetched from the Frankfurter API and used only for UI conversion.

Currency logic is split into:

- `api/exchangeRatesApi.ts` — fetches and normalizes exchange rates
- `hooks/useExchangeRates.ts` — stores rates, loading state, and error state
- `utils/convertCurrency.ts` — converts amounts
- `utils/formatCurrency.ts` — formats money values

## Project Structure

```txt
src/
├── api/
├── components/
├── constants/
├── hooks/
├── layouts/
├── pages/
├── types/
├── utils/
├── App.tsx
├── index.css
└── main.tsx
```

## Main Pages

- Dashboard
- Transactions
- Transaction details
- Edit transaction
- Not found page

## Available Scripts

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Implemented

- Transaction CRUD
- Routing
- Filtering and sorting
- Monthly statistics
- Category charts
- Currency selector
- Exchange rate conversion
- localStorage persistence
- Form validation
- Delete confirmation dialog

## Planned Improvements

- Improve visual design
- Add responsive layout
- Add better loading and error UI for exchange rates
- Add tests
- Deploy the application