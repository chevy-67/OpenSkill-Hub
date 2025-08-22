import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='container'>
        <h2>Signup</h2>
        <form className='form'>
            <label>Name : </label>
            <input type='text' id='name'/>
            <label>Username : </label>
            <input type='text' id='username'/>
            <label>Email : </label>
            <input type='email' id='email'/>
            <label>Password : </label>
            <input type='password' id='pass'/>
            <label>Confirm Password : </label>
            <input type='password' id='c_pass'/>
            <button>Signup</button>
        </form>
    </div>
  )
}

export default Signup