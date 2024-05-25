// src/components/EventPage/EventPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './EventPage.css';

function EventPage() {
  return (
    <div className="event-page">
      <h2>Your <span className="highlight">upcoming</span> event</h2>
      <button className="event-button">Ticket</button>
      <button className="event-button">Time at queue</button>
      <button className="event-button">Get directions</button>
      <p>Ready for your next adventure?</p>
      <button className="buy-button">BUY</button>
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

export default EventPage;
