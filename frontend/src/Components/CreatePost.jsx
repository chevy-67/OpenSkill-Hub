import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/CreatePost.css'

const CreatePost = () => {
  const navigate = useNavigate()

  const [postData,setPostData] = useState({
    title : '',
    description : '',
    username : ''
  })

  const handleChange = (e)=>{
    setPostData({...postData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    await setPostData({...postData,username})
    try{
      const resp = await fetch('http://localhost:8989/api/users/create_post',{
        method:'POST',
        headers:{'Content-Type':'application/json',
                  'Authorization':`Bearer ${token}`
        },
        body:JSON.stringify(postData)
      })
      
      const res = await resp.json()
      if(resp.ok){
        alert("Post Published Successfully")
        navigate('/home')
      }
      else{
        alert(res.message)
        console.log("Error : "+res.error)
        console.log("Message : "+res.message)
      }
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div>
        <div className='post-form'>
          <form onSubmit={handleSubmit}>
            <label>Title : </label>
            <input className='title' type='text' name='title' onChange={handleChange} value={postData.title} required /><br/>
            <label>Description : </label>
            <textarea name='description' onChange={handleChange} value={postData.description} required/>
            <button type='submit'>Post</button>
          </form>
        </div>
    </div>
  )
}

export default CreatePost