import {useState} from 'react'
import '../styles/CreatePost.css'

const username = localStorage.getItem('username')

const CreatePost = () => {
  const [postData,setPostData] = useState({
    title : '',
    description : '',
    username : username || ''
  })

  const handleChange = (e)=>{
    setPostData({...postData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      const resp = await fetch('http://localhost:8989/api/users/create_post',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(postData)
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
    <div>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <label>Title : </label>
            <input type='text' name='title' onChange={handleChange} value={postData.title} required />
            <label>Description : </label>
            <textarea name='description' onChange={handleChange} value={postData.description} required/>
            <button type='submit'>Post</button>
          </form>
        </div>
    </div>
  )
}

export default CreatePost