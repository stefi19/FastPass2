// src/components/MainPage/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import logo from '../../photo/fastpass.png'; // Correct the path if necessary

function MainPage() {
  return (
    <div className="main">
      <div>
        <img src={logo} alt="Fast Pass Logo" className="logo-image" />
        <h1 className="h1">FastPass</h1>
      </div>
      <div>
      <h2 >We know if your face suits the event</h2>
      </div>
      <div className="footer">
        {Array(10).fill().map((_, index) => (
          <span key={index} className="runner">&#x1F3C3;</span>
        ))}
      </div>
      <Link to="/login" className="login-button">Login</Link>
      <br></br>
      <h4 className="h4">Do not have an account? </h4>
      <Link to="/signup" className="signUp-button">SignUp</Link>
   
      
     
    </div>
  );
}

export default MainPage;
