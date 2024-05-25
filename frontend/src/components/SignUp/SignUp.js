// src/components/SignUp.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or any other operations here
    navigate('/face-recognition');
  };

  return (
    <div className="signup">
      <h2>SignUp</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          name
          <input type="text" name="name" required />
        </label>
        <label>
          email
          <input type="email" name="email" required />
        </label>
        <label>
          enter password
          <input type="password" name="password" required />
        </label>
        <label>
          ID
          <input type="text" name="id" required />
        </label>
        <button type="submit" className="signup-button">NEXT</button>
      </form>
      <div className="footer">
        {Array(8).fill().map((_, index) => (
          <span key={index} className="runner">&#x1F3C3;</span>
        ))}
      </div>
      <div className="footer-text">FastPass</div>
    </div>
  );
}

export default SignUp;
