// src/components/SignUp.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import SIGNUP from '../../photo/sigup.png';
import people from '../../photo/runner.png';
function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/face-recognition');
  };

  return (
    <div className="signup">
      <img src={SIGNUP}/>
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
        <form action="/your-upload-endpoint" method="post" enctype="multipart/form-data">
          <label class="file-upload-label">
            Upload your ID
            <input type="file" name="id" class="file-upload-input" required />
          </label>
       
        
    </form>
      <div>
      <div className="footer">
        {Array(8).fill().map((_, index) => (
          <span key={index} className="runner"><img src={people}/></span>
        ))}
      </div>
      <button type="submit" className="signup-button">NEXT</button>
      </div>
        
      </form>
      
      <div className="footer-text">FastPass</div>
    </div>
  );
}

export default SignUp;
