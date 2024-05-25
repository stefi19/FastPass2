
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EventPage.css';
import Person from '../../photo/person.svg';
import Card from '../../photo/card.svg';
import Calendar from '../../photo/calendar.svg';
import Chat from '../../photo/chat.svg';
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
      <h2>Your <span className="upcoming">upcoming</span><br></br>
      <h2 className="event">event</h2></h2>
      <button className="event-button" onClick={handleTicketClick}>Ticket</button>
      <button className="event-button">Time at queue</button>
      <button className="event-button">Get directions</button>
      <p>Ready for your next adventure?</p>
      <h1 className="buy-button" onClick={handlePaidClick}>PAID</h1>
      {showTicket && (
                <div className="modal-overlay" onClick={handleTicketClick}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                       
                        <p>Event: Atelier de creație în limba germană</p>
                        <p>Date: 30th May</p>
                        <p>Venue: Teatrul Gong</p>
                        <p>Seat: A12</p>
                        <p>Price: $20</p>
                        <button className="close-button" onClick={handleTicketClick}>Close</button>
                    </div>
                </div>
            )}
      <div className="footer">
        <Link to="/chat"><img src={Chat} ></img></Link>
        <Link to="/calendar" ><img src={Calendar} ></img></Link>
        <div className="nav-text">FastPass</div>
        <Link to="/wallet" ><img src={Card} ></img></Link>
        <Link to="/profile" ><img src={Person} ></img></Link>
      </div>
    </div>
  );
}

export default EventPage;
