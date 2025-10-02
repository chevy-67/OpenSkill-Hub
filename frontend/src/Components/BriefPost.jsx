import { useEffect,useState } from "react";
import { useLocation,useParams } from "react-router-dom";
import '../styles/BriefPost.css'

const BriefPost = () => {
  const location = useLocation()
  const {id} = useParams()
  const [post,setPost] = useState(location.state?.post || null)
  const [loading,setLoading] = useState(!post)

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const resp = await fetch(`http://localhost:8989/api/generic/getpost/${id}`)
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

  return (
    <div className="body-brief">
      <h1>{post.title}</h1>
      <h5>{post.description}</h5>
      <p>Author : {post.username}</p>
    </div>
  )
}

export default BriefPost