// src/components/FaceRecognition.js
import React from 'react';
import './FaceRecognition.css';
import faceImage from '../photo/black.png'; // Ensure this path is correct

function FaceRecognition() {
  return (
    <div className="face-recognition">
      <h2>FACE RECOGNITION</h2>
      <div className="face-box">
        <img src={faceImage} alt="Face Recognition" />
      </div>
      <div className="footer-text">FastPass</div>
    </div>
  );
}

export default FaceRecognition;
