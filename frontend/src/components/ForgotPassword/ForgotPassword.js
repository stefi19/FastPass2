// src/components/ForgotPassword/ForgotPassword.js
import React from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
