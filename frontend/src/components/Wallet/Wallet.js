// src/components/Wallet/Wallet.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Wallet.css';
import Person from '../../photo/person.svg';
import Card from '../../photo/card.svg';
import Calendar from '../../photo/calendar.svg';
import Chat from '../../photo/chat.svg';
function Wallet() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="wallet-page">
      <h2>FastPass</h2>
   

      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-content">
          <div className="card-front">
            <div className="card-number">XXXX XXXX XXXX XXXX</div>
            <div className="card-name">Name Surname</div>
          </div>
          <div className="card-back">
            <div className="card-balance">Balance: $1234.56</div>
          </div>
        </div>
        <div className="card-background">FastPass</div>
      </div>
      <div className="wallet-actions">
        <button className="wallet-button">Send</button>
        <button className="wallet-button">Receive</button>
        <button className="wallet-button">History</button>
        <button className="wallet-button">Settings</button>
        <button className="wallet-button">More</button>
      </div>
      
      <div className="footer">
        <Link to="/chat" className="nav-icon"><img src={Chat}></img></Link>
        <Link to="/calendar" className="nav-icon"><img src={Calendar}></img></Link>
        <div className="nav-text">FastPass</div>
        <Link to="/wallet" className="nav-icon"><img src={Card}></img></Link>
        <Link to="/profile" className="nav-icon"><img src={Person}></img></Link>
      </div>
    </div>
  );
}

export default Wallet;
