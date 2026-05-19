import { useEffect,useState } from "react";
import { useLocation,useParams } from "react-router-dom";
import '../styles/BriefPost.css'

const API_URL = import.meta.env.VITE_DEPLOY_URL

const BriefPost = () => {
  const location = useLocation()
  const {id} = useParams()
  const [post,setPost] = useState(location.state?.post || null)
  const [loading,setLoading] = useState(!post)
  const [apply,setApply] = useState(false)

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const resp = await fetch(`${API_URL}/api/generic/getpost/${id}`)
        const data = await resp.json()
        if(resp.ok) setPost(data)
      }
      catch(err){
        console.log("Error : "+err)
      }
      finally{
        setLoading(false)
      }
    }
    if(!post) fetchData()
  },[id,post])

  if(loading) return <p>Loading content...</p>
  if(!post) return <p>Post not found</p>

  const Apply = async() =>{
    try{
      const resp = await fetch(`${API_URL}/api/generic/applypost`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          post_id:post._id,
          username:post.username,
          date:post.createdAt,
          time:post.createdAt
        })
      })
      const data = await resp.json()
      if(resp.ok || resp.status == 400){
        setApply(true)
      }
      else{
        setApply(false)
      }
      alert(data.message)
    }
    catch(err){
      console.log("Error : "+err)
      alert("Error : "+err)
      setApply(false)
    }
  }

  return (
    <div className="body-brief">
      <h1>{post.title}</h1>
      <h5>{post.description}</h5>
      <p>Author : {post.username}</p>
      <button className="nav-btn" onClick={Apply} disabled={apply}>{apply ? 'Applied' : 'Apply'}</button>
    </div>
  )
}

export default BriefPost