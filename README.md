# Finance Dashboard

Finance Dashboard is a React + TypeScript project for tracking income and expenses.  
The goal of this project is to practice core React concepts such as components, props, state, derived state, routing, forms, filtering, localStorage, and basic financial statistics.

## Features

Currently implemented:

- Display a list of transactions
- Add new transactions through a controlled form
- Delete transactions
- Edit existing transactions
- View transaction details on a separate page
- Navigate to transaction details after creating a transaction
- Filter transactions by search query
- Filter transactions by transaction type: all, income, expense
- Show an empty state when no transactions match the filters
- Calculate total income
- Calculate total expenses
- Calculate current balance
- Persist transactions in localStorage
- Use React Router for multiple pages
- Use dynamic routes for transaction details and editing
- Use a shared main layout with navigation
- Split UI into reusable components
- Use custom hooks for transaction and filter logic
- Use TypeScript types for transaction and filter data

Planned features:

- Add category statistics
- Add charts and reports
- Add categories page
- Add settings page
- Improve UI styling and responsive layout
- Add form validation messages
- Add transaction sorting
- Add monthly summary

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- localStorage

## Project Structure

```txt
src/
  components/
    SummaryCards.tsx
    TransactionFilters.tsx
    TransactionForm.tsx
    TransactionItem.tsx
    TransactionList.tsx

  hooks/
    useTransactionFilters.ts
    useTransactions.ts

  layouts/
    MainLayout.tsx

  pages/
    DashboardPage.tsx
    NotFoundPage.tsx
    TransactionDetailsPage.tsx
    TransactionEditPage.tsx
    TransactionsPage.tsx

  types/
    filter.ts
    transaction.ts

  App.tsx
  main.tsx
```

## Routes

```txt
/                         Dashboard page with financial summary
/transactions              Transactions page with form, filters, and list
/transactions/:id          Transaction details page
/transactions/:id/edit     Transaction edit page
*                          404 not found page
```

## Lerning Goals

This project is built as a learning project to practice:

- React components
- Props
- useState
- useEffect
- useMemo
- Custom hooks
- Derived state
- Controlled forms
- Form validation
- Filtering and searching
- localStorage
- React Router
- Layout routes
- Dynamic routes
- useParams
- useNavigate
- TypeScript with React
- Component composition
- Array methods: map, filter, reduce, find

## Status

The project is currently in active development.  
Core transaction functionality is implemented, including adding, deleting, editing, filtering, localStorage persistence, routing, transaction details, and dynamic edit pages.
