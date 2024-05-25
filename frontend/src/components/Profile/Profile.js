// src/components/Profile/Profile.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-page">
      <h2>PROFILE</h2>
      <div className="profile-info">
        <img src="../../photo/fastpass.png" alt="Profile Logo" className="profile-logo" />
        <p><strong>NAME:</strong> FastPass</p>
        <p><strong>AGE:</strong> 20 years</p>
        <p><strong>EMAIL:</strong> FastPass@gmail.com</p>
      </div>
      <div className="social-links">
        <p>Facebook</p>
        <p>Instagram</p>
        <p>TikTok</p>
        <p>Linkedin</p>
      </div>
      <div className="policies">
        <p>Terms and conditions</p>
        <p>Copyright</p>
        <p>Privacy policy</p>
        <p>Cookies policy</p>
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

export default Profile;
