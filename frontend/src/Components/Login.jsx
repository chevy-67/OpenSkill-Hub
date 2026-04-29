import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Login.css';

const API_URL = import.meta.env.VITE_DEPLOY_URL;

function Login() {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    username: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
    setErrorMsg(''); // clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!creds.username || !creds.password) {
      setErrorMsg("Please enter both username and password.");
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const resp = await fetch(`${API_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creds)
      });

      const result = await resp.json();

      if (resp.ok) {
        localStorage.setItem('username', creds.username);
        localStorage.setItem('token', result.token);
        navigate('/home');
      } else {
        setErrorMsg(result.error || "Login failed. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again later.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-container" onSubmit={handleSubmit}>
        <header>Welcome Back</header>
        <p className="subtitle">Please enter your details to sign in.</p>

        {errorMsg && <div className="error-message">{errorMsg}</div>}

        <div className="input-group">
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faUser} className="icon"/>
            <input 
              type="text" 
              name="username" 
              value={creds.username} 
              placeholder="Username" 
              onChange={handleChange}
              disabled={isLoading}
              autoComplete="username"
            />
          </div>
          
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faLock} className="icon"/>
            <input 
              type="password" 
              name="password" 
              value={creds.password} 
              placeholder="Password" 
              onChange={handleChange}
              disabled={isLoading}
              autoComplete="current-password"
            />
          </div>

          <p className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </p>

          <button type="submit" disabled={isLoading} className={isLoading ? "loading-btn" : ""}>
            {isLoading ? (
              <FontAwesomeIcon icon={faSpinner} spin className="spinner-icon" />
            ) : (
              "Sign In"
            )}
          </button>
        </div>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
