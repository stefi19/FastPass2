// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Calendar from './components/Calendar/Calendar';
import CalendarDay from './components/CalendarDay/CalendarDay';
import EventPage from './components/EventPage/EventPage';
import Wallet from './components/Wallet/Wallet';
import Profile from './components/Profile/Profile';
import Chat from './components/Chat/Chat';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/face-recognition" element={<FaceRecognition />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar-day/:day" element={<CalendarDay />} />
        <Route path="/event-page" element={<EventPage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
