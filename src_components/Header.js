import React from 'react';
import './Header.css';

function Header({ expenses }) {
  const totalBalance = expenses.reduce((accumulator, item) => accumulator + item.amount, 0);

  return (
    <header className="header-banner">
      <div className="header-brand">
        <h1>TPT IT COM</h1>
        <p>Enterprise Infrastructure Ledger Hub</p>
      </div>
      <div className="total-widget">
        <span>Aggregated Operational Inflow</span>
        <h2>${totalBalance.toFixed(2)}</h2>
      </div>
    </header>
  );
}

export default Header;
