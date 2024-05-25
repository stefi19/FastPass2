// src/components/MainPage/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import logo from '../../photo/fastpass.png'; // Correct the path if necessary

function MainPage() {
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="Fast Pass Logo" className="logo-image" />
        <h1>Fast Pass</h1>
      </div>
      <Link to="/login" className="login-button">login</Link>
      <Link to="/signup" className="signup-button">Sign up</Link>
      <div className="footer">
        {Array(8).fill().map((_, index) => (
          <span key={index} className="runner">&#x1F3C3;</span>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
