# Finance Dashboard

A multi-page personal finance dashboard built with React and TypeScript.

The application allows users to create, edit, delete, search, filter, and sort financial transactions. It also provides overall and monthly financial summaries, including income and expense statistics grouped by category.

## Features

- Add income and expense transactions
- Edit existing transactions
- Delete transactions
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
- Calculate total income
- Calculate total expenses
- Calculate the current balance
- Display income statistics by category
- Display expense statistics by category
- Select a month and view:
  - Monthly income
  - Monthly expenses
  - Monthly balance
  - Monthly income statistics by category
  - Monthly expense statistics by category
- Automatically select the current month
- Persist transactions in `localStorage`
- Normalize category names for consistent grouping
- Handle unknown routes with a custom 404 page

## Routes

|          Route           |                      Description                         |
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
│   ├── CategoryStatistics.tsx
│   ├── MonthlySummary.tsx
│   ├── SummaryCards.tsx
│   ├── TransactionFilters.tsx
│   ├── TransactionForm.tsx
│   ├── TransactionItem.tsx
│   └── TransactionList.tsx
│
├── hooks/
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
│   ├── filter.ts
│   ├── statistics.ts
│   └── transaction.ts
│
├── utils/
│   ├── getCategoryStatistics.ts
│   └── getTransactionSummary.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Architecture

The application separates UI, state management, routing, and calculation logic into different layers.

- `components` contain reusable interface elements
- `pages`      represent individual application routes
- `layouts`    contain shared page structure and navigation
- `hooks`      manage transactions, filtering, sorting, and monthly statistics
- `utils`      contain reusable calculation functions independent of React
- `types`      contain shared TypeScript type definitions

## Main React Concepts Practiced

- Functional components
- Props and callback props
- Controlled forms
- Derived state
- Immutable state updates
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

- Add charts for income and expense statistics
- Improve the visual design
- Add responsive layouts for mobile devices
- Add visible form validation messages
- Add confirmation before deleting a transaction
- Create reusable form logic for adding and editing transactions
- Add automated tests
- Deploy the application

## Status

The project is currently under active development.

Core transaction management, routing, filtering, sorting, category statistics, monthly statistics, and local persistence are implemented.