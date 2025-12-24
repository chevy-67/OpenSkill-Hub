import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Login.css';

const API_URL = import.meta.env.VITE_DEPLOY_URL

function Login() {
  const navigate = useNavigate()
  const [creds,setCreds] = useState({
    username:'',
    password:''
  })

  const handleChange = (e)=>{
    setCreds({...creds,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      const resp = await fetch(`${API_URL}/api/users/login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(creds)
      })

      const result = await resp.json()

      if(resp.ok){
        alert(result.message)
        localStorage.setItem('username',creds.username)
        localStorage.setItem('token',result.token)
        navigate('/home')
      }
      else{
        alert(result.error)
        console.log(result.error)
      }
    }
    catch(err){
      console.log("Error : "+err)
    }
  }

  return (
    <>
      <form className="login-container" onSubmit={handleSubmit}>
        <header>Sign In</header>
        <p className="signup-link">
          New User? <Link to="/signup">Create an account</Link>
        </p>

        <div className="input-group">
          <label htmlFor="username">
            <FontAwesomeIcon icon={faUser} className="icon"/>
            <input type="text" name="username" value={creds.username} placeholder="Username" onChange={handleChange}/>
          </label>
          <label htmlFor="password">
            <FontAwesomeIcon icon={faLock} className="icon"/>
            <input type="password" name="password" value={creds.password} placeholder="Password" onChange={handleChange}/>
          </label>

          <button type="submit">Sign In</button>
        </div>

        <p className="forgot-password">
          <Link to="/forgot-password">Forgot your password?</Link>
        </p>
      </form>
    </>
  );
}

export default Login;
