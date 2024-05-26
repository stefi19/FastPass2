import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import './Calendar.css';
import Person from '../../photo/person.svg';
import Card from '../../photo/card.svg';
import Calendar1 from '../../photo/calendar.svg';
import Chat from '../../photo/chat.svg';


function Calendar() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    navigate(`/calendar-day/${date}`);
  };

  const renderDays = () => {
    const daysInMonth = 31; // You can dynamically calculate this based on the month
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className="day" onClick={() => handleDateClick(i)}>
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar-page">
      <h2>Find Your Next Adventure</h2>
      <div className="calendar">
        <div className="month">May</div>
        <div className="days-of-week">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="days">{renderDays()}</div>
      </div>
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

export default Calendar;
