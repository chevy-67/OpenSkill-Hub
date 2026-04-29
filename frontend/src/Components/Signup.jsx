import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const API_URL = import.meta.env.VITE_DEPLOY_URL;

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const [confirmPass, setConfirmPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handlePassVal = (e) => {
    setConfirmPass(e.target.value);
    setErrorMsg('');
  };

  const saveChange = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.username || !formData.email || !formData.password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    if (formData.password !== confirmPass) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const resp = await fetch(`${API_URL}/api/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const res = await resp.json();

      if (resp.ok) {
        setSuccessMsg(res.message || "Signup successful! Redirecting...");
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setErrorMsg(res.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='signup-wrapper'>
      <form className='signup-container' onSubmit={saveChange}>
        <header>Create Account</header>
        <p className="subtitle">Join OpenSkill-Hub today.</p>

        {errorMsg && <div className="error-message">{errorMsg}</div>}
        {successMsg && <div className="success-message"><FontAwesomeIcon icon={faCheckCircle} /> {successMsg}</div>}

        <div className='input-group'>
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faUser} className="icon"/>
            <input 
              type='text' 
              name='name' 
              value={formData.name} 
              placeholder='Full Name' 
              onChange={handleChange}
              disabled={isLoading || successMsg}
            />
          </div>

          <div className="input-wrapper">
            <FontAwesomeIcon icon={faUser} className="icon"/>
            <input 
              type='text' 
              name='username' 
              value={formData.username} 
              placeholder='Username' 
              onChange={handleChange}
              disabled={isLoading || successMsg}
            />
          </div>

          <div className="input-wrapper">
            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
            <input 
              type='email' 
              name='email' 
              value={formData.email} 
              placeholder='Email Address' 
              onChange={handleChange}
              disabled={isLoading || successMsg}
            />
          </div>

          <div className="input-wrapper">
            <FontAwesomeIcon icon={faLock} className="icon"/>
            <input 
              type='password' 
              name='password' 
              value={formData.password} 
              placeholder='Password' 
              onChange={handleChange}
              disabled={isLoading || successMsg}
            />
          </div>

          <div className="input-wrapper">
            <FontAwesomeIcon icon={faLock} className="icon"/>
            <input 
              type='password' 
              name='c_pass' 
              value={confirmPass} 
              placeholder='Confirm Password' 
              onChange={handlePassVal}
              disabled={isLoading || successMsg}
            />
          </div>

          <button type='submit' disabled={isLoading || successMsg} className={isLoading ? "loading-btn" : ""}>
            {isLoading ? (
              <FontAwesomeIcon icon={faSpinner} spin className="spinner-icon" />
            ) : (
              "Sign Up"
            )}
          </button>
        </div>

        <p className="login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;