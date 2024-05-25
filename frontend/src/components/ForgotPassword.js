import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/forgot-password', { email });
            if (response.data.success) {
                alert('Password reset link sent to your email.');
            } else {
                alert(response.data.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error sending password reset link:', error);
            alert('An error occurred. Please try again.');
        }
        //sss
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotPassword}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
            <div className="links">
                <Link to="/login">Back to Login</Link>
            </div>
        </div>
    );
};

export default ForgotPassword;
