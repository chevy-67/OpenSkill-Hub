import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Signup.css';
import { Link,useNavigate } from 'react-router-dom';

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
    <div className='container'>
        <h2>Sign Up</h2>
        <p className="signup-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        {error && <div style={{color:'red'}}>{error}</div>}
        <form className='signup-form' onSubmit={saveChange}>
            <label>Name : </label>
            <input type='text' name='name' value={formData.name} onChange={handleChange}/>
            <label>Username : </label>
            <input type='text' name='username' value={formData.username} onChange={handleChange}/>
            <label>Email : </label>
            <input type='email' name='email' value={formData.email} onChange={handleChange}/>
            <label>Password : </label>
            <input type='password' name='password' value={formData.password} onChange={handleChange}/>
            <label>Confirm Password : </label>
            <input type='password' name='c_pass' value={confirmPass} onChange={handlePassVal}/>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  );
};

export default Signup;