// src/components/Wallet/Wallet.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Wallet.css';

function Wallet() {
  return (
    <div className="wallet-page">
      <h2>FastPass</h2>
      <div className="card">
        <div className="card-number">XXXX XXXX XXXX XXXX</div>
        <div className="card-name">Name Surname</div>
      </div>
      <button className="balance-button">Show balance</button>
      <div className="wallet-actions">
        <button className="wallet-button">Send</button>
        <button className="wallet-button">Receive</button>
        <button className="wallet-button">History</button>
        <button className="wallet-button">Settings</button>
        <button className="wallet-button">More</button>
      </div>
      <div className="footer-nav">
        <Link to="/chat" className="nav-icon">💬</Link>
        <Link to="/calendar" className="nav-icon">📅</Link>
        <div className="nav-text">FastPass</div>
        <Link to="/wallet" className="nav-icon">💼</Link>
        <Link to="/profile" className="nav-icon">👤</Link>
      </div>
    </div>
  );
}

export default Wallet;
