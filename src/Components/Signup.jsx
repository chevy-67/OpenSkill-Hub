import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      console.log("User created:", res.data);
      // Redirect to profile page after successful signup
      window.location.href = '/profile';
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form className="signup-container" onSubmit={handleSubmit(onSubmit)}>
        <header>Sign Up</header>
        <p className="signin-link">
          Already a User? <Link to="/login">Login</Link>
        </p>

        <div className="input-group">
          <label htmlFor="username">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="text"
              id="username"
              placeholder="Username"
              {...register("username", { required: 'Username is required' })}
            />
          </label>
          {errors.username && <span className="error">{errors.username.message}</span>}

          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
          </label>
          {errors.email && <span className="error">{errors.email.message}</span>}

          <label htmlFor="password">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              id="password"
              placeholder="Create Password"
              {...register("password", { 
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
            />
          </label>
          {errors.password && <span className="error">{errors.password.message}</span>}

          <label htmlFor="confirmPassword">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword", { 
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match'
              })}
            />
          </label>
          {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}

          <button type="submit">Sign Up</button>
        </div>
      </form>
    </>
  );
}

export default Signup;
