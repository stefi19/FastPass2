// src/components/FaceRecognition/FaceRecognition.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FaceRecognition.css';
import faceImage from '../../photo/black.png'; // Correct the path if necessary

function FaceRecognition() {
  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the Event Page after face recognition
    navigate('/event-page');
  };

  return (
    <div className="face-recognition">
      <h2>FACE RECOGNITION</h2>
      <div className="face-box">
        <img src={faceImage} alt="Face Recognition" />
      </div>
      <button className="next-button" onClick={handleNext}>NEXT</button>
      <div className="footer-text">FastPass</div>
    </div>
  );
}

export default FaceRecognition;
