import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../styles/HomeFeed.css'

const API_URL = import.meta.env.VITE_DEPLOY_URL

const HomeFeed = () => {
        const [posts,setPosts] = useState([])
        const [loading,setLoading] = useState(true)

        useEffect(()=>{
            const fetchPost = async ()=>{
            try{
            const resp = await fetch(`${API_URL}/api/generic/getpost`)
            const result = await resp.json()

            if(resp.ok){
                setPosts(result)
            }
            else{
                console.log("Error fetching posts : ",result.error)
            }
            }
        catch(err){
            console.log('Error',err)
            }
        finally{
            setLoading(false)
            }
        }
        fetchPost()
    },[])
    return (
        <div className='home-feed'>
            {loading && (<h5>Loading Posts...</h5>)}
            {posts.length==0?(<p>No posts to show :/</p>):(
                <ul>
                    {posts.map((post)=>{
                        return(
                            <li key={post._id}>
                                <Link to={`/post/${post._id}`} state={{post}}>
                                <h2>{post.title}</h2>
                                <p>{post.description.slice(0,100)}...</p>
                                <small>by {post.username}</small>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default HomeFeed