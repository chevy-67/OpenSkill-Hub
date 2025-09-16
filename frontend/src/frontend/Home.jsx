import {useEffect,useState} from 'react'
import Navbar from '/src/frontend/Navbar'

const Home = ()=>{
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchPost = async ()=>{
            try{
            const resp = await fetch('http://localhost:8989/api/generic/getpost')
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
        <div>
            <Navbar/>
            {loading && (<h5>Loading Posts...</h5>)}
            {posts.length==0?(<p>No posts to show :/</p>):(
                <ul>
                    {posts.map((post)=>{
                        <li key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <small>by {post.username}</small>
                        </li>
                    })}
                </ul>
            )}
        </div>
    )
}

export default Home