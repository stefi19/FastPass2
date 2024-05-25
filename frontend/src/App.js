import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Calendar from './components/Calendar/Calendar';
import CalendarDay from './components/CalendarDay/CalendarDay';
import EventPage from './components/EventPage/EventPage';
import Chat from './components/Chat/Chat';
import Profile from './components/Profile/Profile';
import Wallet from './components/Wallet/Wallet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/face-recognition" element={<FaceRecognition />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar-day/:date" element={<CalendarDay />} />
        <Route path="/event-page" element={<EventPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </Router>
  );
}

export default App;
