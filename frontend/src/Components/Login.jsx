import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <>
      <form className="login-container">
        <header>Sign In</header>
        <p className="signup-link">
          New User? <Link to="/signup">Create an account</Link>
        </p>

        <div className="input-group">
          <label htmlFor="username">
            <FontAwesomeIcon icon={faUser} className="icon"/>
            <input type="text" id="username" placeholder="Username" />
          </label>
          <label htmlFor="password">
            <FontAwesomeIcon icon={faLock} className="icon"/>
            <input type="password" id="password" placeholder="Password" />
          </label>

          <button type="submit">Sign In</button>
        </div>

        <p className="forgot-password">
          <Link to="/forgot-password">Forgot your password?</Link>
        </p>

        <div className="other-options">
          <p>Or sign in with:</p>
          <div className="social-icons">
            <a href="#" className="google">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" className="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
