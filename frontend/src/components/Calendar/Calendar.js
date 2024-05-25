// src/components/Calendar/Calendar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendar.css';

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
    </div>
  );
}

export default Calendar;
