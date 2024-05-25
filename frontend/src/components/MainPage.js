import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import logo from '../photo/fastpass.png';

function MainPage() {
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="Fast Pass Logo" className="logo-image" />
        <h1>Fast Pass</h1>
      </div>
      <Link to="/login" className="button login-button">Login</Link>
      <Link to="/signup" className="button signup-button">Sign up</Link>
      <div className="footer">
        {Array(100).fill().map((_, index) => (
          <span key={index} className="runner">🏃</span>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
