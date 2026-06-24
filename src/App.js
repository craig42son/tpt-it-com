import React, { useState } from 'react';
import './App.css';
import Header from '../src_components/Header';
import ExpenseForm from '../src_components/ExpenseForm';
import ExpenseList from '../src_components/ExpenseList';
import Receipt from '../src_components/Receipt';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Cloud Infrastructure hosting', amount: 145.50, category: 'IT Software', date: '2026-06-20' },
    { id: 2, title: 'Office Fiber Internet Router', amount: 89.99, category: 'Utilities', date: '2026-06-22' }
  ]);

  const [activeReceipt, setActiveReceipt] = useState(null);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
    if (activeReceipt && activeReceipt.id === id) {
      setActiveReceipt(null);
    }
  };

  const viewReceipt = (expense) => {
    setActiveReceipt(expense);
  };

  return (
    <div className="app-container">
      <Header expenses={expenses} />
      <div className="main-layout">
        <div>
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} onViewReceipt={viewReceipt} />
        </div>
        <div>
          <Receipt activeReceipt={activeReceipt} />
        </div>
      </div>
    </div>
  );
}

export default App;
