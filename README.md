# Finance Dashboard

Finance Dashboard is a React + TypeScript project for tracking income and expenses.  
The goal of this project is to practice core React concepts such as components, props, state, derived state, routing, forms, filtering, localStorage, and basic financial statistics.

## Features

Currently implemented:

- Display a list of transactions
- Add new transactions through a controlled form
- Delete transactions
- Filter transactions by search query
- Filter transactions by transaction type: all, income, expense
- Show an empty state when no transactions match the filters
- Calculate total income
- Calculate total expenses
- Calculate current balance
- Persist transactions in localStorage
- Use React Router for multiple pages
- Use a shared main layout with navigation
- Split UI into reusable components
- Use custom hooks for transaction and filter logic
- Use TypeScript types for transaction and filter data

Planned features:

- Add transaction details page
- Add dynamic routes with transaction IDs
- Add edit transaction functionality
- Add category statistics
- Add charts and reports
- Add categories page
- Add settings page
- Improve UI styling and responsive layout

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
    TransactionsPage.tsx

  types/
    filter.ts
    transaction.ts

  App.tsx
  main.tsx
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
- Filtering and searching
- localStorage
- React Router
- Layout routes
- TypeScript with React
- Component composition
- Array methods: map, filter, reduce

## Status

The project is currently in early development.
