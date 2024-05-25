// src/components/EventPage/EventPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EventPage.css';

function EventPage() {
  const [showTicket, setShowTicket] = useState(false);
  const navigate = useNavigate();

  const handleTicketClick = () => {
    setShowTicket(true);
  };

  const handlePaidClick = () => {
    navigate('/wallet');
  };

  return (
    <div className="event-page">
      <h2>Your <span className="highlight">upcoming</span> event</h2>
      <button className="event-button" onClick={handleTicketClick}>Ticket</button>
      <button className="event-button">Time at queue</button>
      <button className="event-button">Get directions</button>
      <p>Ready for your next adventure?</p>
      <button className="buy-button" onClick={handlePaidClick}>PAID</button>
      {showTicket && (
        <div className="ticket-details">
          <h3>Event Ticket</h3>
          <p>Event: Atelier de creație în limba germană</p>
          <p>Date: 30th May</p>
          <p>Venue: Teatrul Gong</p>
          <p>Seat: A12</p>
          <p>Price: $20</p>
        </div>
      )}
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
