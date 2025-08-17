import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import './Login.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username: data.username,
        password: data.password,
      });
      console.log("User logged in:", res.data);
      window.location.href = '/';
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='login-page'>
    <form className="login-container" onSubmit={handleSubmit(onSubmit)}>
      <header>Sign In</header>

      <p className="signup-link">
        New User? <Link to="/signup">Create an account</Link>
      </p>

      <div className="input-group">
        <label>
          <FontAwesomeIcon icon={faUser} className='icon' />
          <input 
            type="text" 
            placeholder="Username" 
            {...register("username", { required: "Username is required" })} 
          />
        </label>
        
        
        <label>
          <FontAwesomeIcon icon={faLock} className='icon' />
          <input 
            type="password" 
            placeholder="Password" 
            {...register("password", { required: "Password is required" })} 
          />
        </label>
        <button type='submit'>Sign In</button>        
      </div>
      
      <p className="forgot-password">
        <Link to="/forgot-password">Forgot your password?</Link>
      </p>

      <div className="other-options">
        <p>Sign in with</p>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>
    </form>
    </div>
  );
}

export default Login;
