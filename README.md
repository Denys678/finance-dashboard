# Finance Dashboard

A multi-page personal finance dashboard built with React and TypeScript.

The application allows users to create, edit, delete, search, filter, and sort financial transactions. It also provides overall and monthly financial summaries, category-based charts, currency formatting, and persistent user preferences.

## Features

- Add income and expense transactions
- Edit existing transactions
- Delete transactions with a confirmation dialog
- View transaction details on a separate page
- Navigate to transaction details after creating or editing a transaction
- Search transactions by title or category
- Filter transactions by type:
  - All
  - Income
  - Expense
- Sort transactions by:
  - Newest date
  - Oldest date
  - Highest amount
  - Lowest amount
- Clear all active filters and sorting settings
- Calculate total income
- Calculate total expenses
- Calculate the current balance
- Display income statistics by category
- Display expense statistics by category
- Display category statistics as horizontal bar charts
- Select a month and view:
  - Monthly income
  - Monthly expenses
  - Monthly balance
  - Monthly income statistics by category
  - Monthly expense statistics by category
- Automatically select the current month
- Select display currency:
  - UAH
  - USD
  - EUR
- Format all money values according to the selected currency and browser locale
- Persist transactions in `localStorage`
- Persist selected currency in `localStorage`
- Normalize category names for consistent grouping
- Show visible form validation messages
- Handle unknown routes with a custom 404 page

## Currency Note

The selected currency controls how amounts are displayed across the application.

The app does not perform real exchange rate conversion. For example, if the user selects USD, the entered amounts are treated and displayed as USD values.

## Routes

|          Route           |                       Description                        |
| ------------------------ | -------------------------------------------------------- |
| `/`                      | Dashboard with general and monthly statistics            |
| `/transactions`          | Transaction form, filters, sorting, and transaction list |
| `/transactions/:id`      | Details of a specific transaction                        |
| `/transactions/:id/edit` | Edit form for a specific transaction                     |
| `*`                      | 404 Not Found page                                       |

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- CSS
- Browser `localStorage`

## Project Structure

```text
src/
├── components/
│   ├── CategoryBarChart.tsx
│   ├── ConfirmDialog.tsx
│   ├── CurrencySelector.tsx
│   ├── MonthlySummary.tsx
│   ├── SummaryCards.tsx
│   ├── TransactionFilters.tsx
│   ├── TransactionForm.tsx
│   ├── TransactionItem.tsx
│   └── TransactionList.tsx
│
├── constants/
│   └── storageKeys.ts
│
├── hooks/
│   ├── useCurrency.ts
│   ├── useMonthlyStatistics.ts
│   ├── useTransactionFilters.ts
│   └── useTransactions.ts
│
├── layouts/
│   └── MainLayout.tsx
│
├── pages/
│   ├── DashboardPage.tsx
│   ├── NotFoundPage.tsx
│   ├── TransactionDetailsPage.tsx
│   ├── TransactionEditPage.tsx
│   └── TransactionsPage.tsx
│
├── types/
│   ├── currency.ts
│   ├── filter.ts
│   ├── statistics.ts
│   └── transaction.ts
│
├── utils/
│   ├── formatCurrency.ts
│   ├── getCategoryStatistics.ts
│   ├── getTransactionSummary.ts
│   └── validateTransactionForm.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Architecture

The application separates UI, state management, routing, formatting, validation, and calculation logic into different layers.

- `components` contain reusable interface elements
- `pages` represent individual application routes
- `layouts` contain shared page structure and navigation
- `hooks` manage transactions, filtering, sorting, currency preferences, and monthly statistics
- `utils` contain reusable logic independent of React
- `types` contain shared TypeScript type definitions
- `constants` contain shared application constants such as `localStorage` keys

## Main React Concepts Practiced

- Functional components
- Props and callback props
- Controlled forms
- Controlled select inputs
- Derived state
- Immutable state updates
- Conditional rendering
- List rendering
- Reusable UI components
- `useState`
- `useEffect`
- `useMemo`
- Custom hooks
- React Router
- Layout routes
- Dynamic routes
- `useParams`
- `useNavigate`
- TypeScript props and data models
- Array methods:
  - `map`
  - `filter`
  - `reduce`
  - `find`
  - `sort`

## Data Persistence

Transactions are stored in the browser using `localStorage`.

When the application starts, saved transactions are loaded from storage. Whenever the transaction list changes, the updated data is saved automatically.

The selected currency is also stored in `localStorage`, so the user's currency preference is preserved after refreshing the page.

## Validation

Transaction forms use shared validation logic.

The same validation utility is used for both creating and editing transactions. This keeps form validation consistent and avoids duplicated checks across components.

## Charts

The dashboard displays category-based financial statistics using reusable horizontal bar charts.

Charts are used for:

- Overall expense statistics by category
- Overall income statistics by category
- Monthly expense statistics by category
- Monthly income statistics by category

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Denys678/finance-dashboard.git
```

### 2. Open the project directory

```bash
cd finance-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The terminal will display the local development address.

## Available Scripts

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Run ESLint checks

```bash
npm run lint
```

### Preview the production build

```bash
npm run preview
```

## Planned Improvements

- Improve the visual design
- Add responsive layouts for mobile devices
- Improve accessibility for forms and dialogs
- Add reusable form logic for adding and editing transactions
- Add automated tests
- Deploy the application

## Status

The project is currently under active development.

Core transaction management, routing, filtering, sorting, monthly statistics, category charts, currency selection, form validation, delete confirmation, and local persistence are implemented.