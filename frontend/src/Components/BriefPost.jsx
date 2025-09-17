import {useLocation } from 'react-router-dom'

const BriefPost = () => {
    const location = useLocation()
    const post = location.state?.post
    if(!post) return <p>Page not found</p>
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <small>Author : {post.username}</small>
    </div>
  )
}

export default BriefPost