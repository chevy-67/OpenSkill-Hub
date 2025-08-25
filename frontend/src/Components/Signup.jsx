import React,{useState} from 'react'
import './Signup.css'

const Signup = () => {
  const [formData,setFormData] = useState({
    name : '',
    username : '',
    email : '',
    password : ''
  })

  const [confirmPass,setConfirmPass] = useState('')
  const [error,setError] = useState('')

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handlePassVal = (e)=>{
    setConfirmPass(e.target.value)
  }

  const saveChange=async (e)=>{
    e.preventDefault()
    if(formData.password!=confirmPass){
      setError('Passwords do not match')
      return
    }
    else{
      setError('')
    }
    try{
      const resp = await fetch('http://localhost:8989/api/users/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      
      const res = await resp.json()

      if(resp.ok){
        console.log(res.message)
      }
      else{
        console.log("Error : "+res.error)
      }
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='container'>
        <h2>Signup</h2>
        {error && <div style={{color:'red'}}>{error}</div>}
        <form className='form' onSubmit={saveChange}>
            <label>Name : </label>
            <input type='text' name='name' value={formData.name} onChange={handleChange}/>
            <label>Username : </label>
            <input type='text' name='username' value={formData.username} onChange={handleChange}/>
            <label>Email : </label>
            <input type='email' name='email' value={formData.email} onChange={handleChange}/>
            <label>Password : </label>
            <input type='password' name='password' value={formData.password} onChange={handleChange}/>
            <label>Confirm Password : </label>
            <input type='password' name='c_pass' value={confirm.value} onChange={handlePassVal}/>
            <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup