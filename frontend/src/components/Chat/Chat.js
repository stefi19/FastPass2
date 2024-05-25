// src/components/Chat/Chat.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([
    { text: 'Give me a recommendation', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Leave a message"
        />
        <button onClick={handleSend}>
          <span role="img" aria-label="send">📤</span>
        </button>
      </div>
      <div className="footer-nav">
        <Link to="/search" className="nav-icon">🔍</Link>
        <Link to="/calendar" className="nav-icon">📅</Link>
        <Link to="/" className="nav-text">FastPass</Link>
        <Link to="/wallet" className="nav-icon">📑</Link>
        <Link to="/profile" className="nav-icon">👤</Link>
      </div>
    </div>
  );
}

export default Chat;
