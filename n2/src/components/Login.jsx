import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import './styles.css'; // Import your CSS file

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    // You can add your authentication logic here, for now, let's just do simple validation
    if (username === 'admin' && password === 'admin') {
      // Redirect to AdminPage
      navigate('/admin');
    } else if (username === 'user' && password === 'user') {
      // Redirect to UserPage
      navigate('/user');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div>
        {/* Links to AdminPage and UserPage */}
        <p>Don't have an account? <Link to="/admin">Admin</Link> or <Link to="/user">User</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
