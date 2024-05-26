// src/components/EventPage/EventPage.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import './EventPage.css';
import Person from '../../photo/person.svg';
import Card from '../../photo/card.svg';
import Calendar from '../../photo/calendar.svg';
import Chat from '../../photo/chat.svg';
Modal.setAppElement('#root'); // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const EventPage = () => {
  const [ticketModalIsOpen, setTicketModalIsOpen] = useState(false);
  const [queueModalIsOpen, setQueueModalIsOpen] = useState(false);

  const openTicketModal = () => setTicketModalIsOpen(true);
  const closeTicketModal = () => setTicketModalIsOpen(false);

  const openQueueModal = () => setQueueModalIsOpen(true);
  const closeQueueModal = () => setQueueModalIsOpen(false);
  return (
    <div>
    <div >
      <div className="container">
        <h2>Your <span className="upcoming">upcoming</span> 
        <br></br>event</h2>
        <button className="button" onClick={openTicketModal}>Ticket</button>
        <button className="button" onClick={openQueueModal}>Time at queue</button>
        <button className="button">Get directions</button>
        <p className="p">Ready for your <span className="span">next</span> adventure?</p>
        <Link to="/wallet"><button className="buy-button">Paid</button></Link>
      </div>

      <Modal
        isOpen={ticketModalIsOpen}
        onRequestClose={closeTicketModal}
        contentLabel="Ticket Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Ticket Information</h2>
        <button onClick={closeTicketModal}>Close</button>
      </Modal>

      <Modal
        isOpen={queueModalIsOpen}
        onRequestClose={closeQueueModal}
        contentLabel="Queue Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Queue Information</h2>
        <button onClick={closeQueueModal}>Close</button>
      </Modal>
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
};


export default EventPage;