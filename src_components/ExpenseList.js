import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense, onViewReceipt }) {
  return (
    <div className="list-card">
      <h3>Active Resource Statements</h3>
      {expenses.length === 0 ? (
        <p style={{ color: '#718096', fontSize: '14px' }}>No active balance metrics reported.</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <div className="expense-info">
              <h4>{expense.title}</h4>
              <span className="expense-meta">
                {expense.date} | <strong style={{ color: '#4a5568' }}>{expense.category}</strong>
              </span>
            </div>
            <div className="expense-actions">
              <span className="amount-display">${expense.amount.toFixed(2)}</span>
              <button className="action-btn view-btn" onClick={() => onViewReceipt(expense)}>Receipt</button>
              <button className="action-btn delete-btn" onClick={() => onDeleteExpense(expense.id)}>Drop</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
