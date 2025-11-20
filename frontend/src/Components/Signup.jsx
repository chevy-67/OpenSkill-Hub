import {useState} from 'react'
import '../styles/Signup.css';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.DEPLOY_URL

const Signup = () => {
  const navigate = useNavigate()
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
    if(!formData.name || !formData.username || !formData.email || !formData.password){
      alert('Please fill all inputs')
      return
    }
    if(formData.password!=confirmPass){
      setError('Passwords do not match')
      return
    }
    else{
      setError('')
    }
    try{
      const resp = await fetch(`${API_URL}/api/users/signup`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      
      const res = await resp.json()

      if(resp.ok){
        alert(res.message)
        navigate('/login')
      }
      else{
        alert(res.message)
        console.log("Error : "+res.message)
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
            <input type='password' name='c_pass' value={confirm.value} onChange={handlePassVal}/>
            <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup