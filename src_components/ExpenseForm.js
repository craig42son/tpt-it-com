import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('IT Software');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;
    
    onAddExpense({
      title,
      amount: parseFloat(amount),
      category,
      date
    });

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <div className="form-card">
      <h3>Add System Ledger Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Transaction Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Domain Registration" required />
        </div>
        <div className="form-group">
          <label>Amount ($)</label>
          <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" required />
        </div>
        <div className="form-group">
          <label>Category Tag</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="IT Software">IT Software</option>
            <option value="Hardware Resource">Hardware Resource</option>
            <option value="Utilities">Utilities</option>
            <option value="Consulting Feed">Consulting Feed</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit" className="submit-btn">Add Transaction Record</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
