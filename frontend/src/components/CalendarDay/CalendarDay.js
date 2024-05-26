// src/components/CalendarDay/CalendarDay.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link,useParams, useNavigate } from 'react-router-dom';
import './CalendarDay.css';
import Person from '../../photo/person.svg';
import Card from '../../photo/card.svg';
import Calendar1 from '../../photo/calendar.svg';
import Chat from '../../photo/chat.svg';


const events = {
  '30': [
    {
      title: 'Atelier de creație în limba germană',
      description: 'Flinke Finger, Frühlingsschmetterlinge',
      venue: 'Teatrul Gong',
    },
    {
      title: 'Circul lui Buffalo Bill',
      description: 'Cu fragmente din Buffalo Bill de Radu Stanca',
      venue: 'Teatrul Gong',
    },
  ],
};

function CalendarDay() {
  const { date } = useParams();
  const eventList = events[date] || [];

  return (
    <div className="calendar-day">
      <h2>FIND YOUR <span>NEXT</span> ADVENTURE</h2>
      <h3>{date}</h3>
      {eventList.length > 0 ? (
        eventList.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p className="venue">{event.venue}</p>
            <Link to="/event-page" className="buy-button">BUY</Link>
          </div>
        ))
      ) : (
        <p>No events found for this date.</p>
      )}
       <div className="footer">
        <Link to="/chat" className="nav-icon"><img src={Chat}></img></Link>
        <Link to="/calendar" className="nav-icon"><img src={Calendar1}></img></Link>
        <div className="nav-text">FastPass</div>
        <Link to="/wallet" className="nav-icon"><img src={Card}></img></Link>
        <Link to="/profile" className="nav-icon"><img src={Person}></img></Link>
      </div>
    </div>
  );
}

export default CalendarDay;
