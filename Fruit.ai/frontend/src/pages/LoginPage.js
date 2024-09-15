import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy credentials
    const dummyUserId = 'user123';
    const dummyPassword = 'password123';

    if (userId === dummyUserId && password === dummyPassword) {
      navigate('/home');
    } else {
      alert('Invalid credentials! Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Login to Fruit.ai</h1>
      <input 
        type="text" 
        placeholder="Enter User ID" 
        value={userId}
        onChange={(e) => setUserId(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Enter Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
