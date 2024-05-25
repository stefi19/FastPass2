import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Add CSS import

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            if (response.data.success) {
                navigate('/dashboard'); // Assuming you have a dashboard route
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="links">
                <Link to="/signup">Sign Up</Link>
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
        </div>
    );
};

export default Login;