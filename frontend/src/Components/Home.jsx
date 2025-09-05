import React, {useEffect,useState} from "react";
import Navbar from "/src/frontend/Navbar";
import SideBarLeft from "../Components/SideBarLeft";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

    return (
        <div className="home">
            <Navbar />
            <div className="app-layout">
                <SideBarLeft />
                <div className="main-content">
                    <h1>Welcome to Home Page</h1>
                    <p>This is where your feed or projects will appear.</p>

                    <div className="posts-feed">
                        {posts.map((post) => (
                            <Link key={post.id} to={`/post/${post.id}`} className="post-row-link">
                                <div className="post-row">
                                    <h3>{post.title}</h3>
                                    <h4>{post.category}</h4>
                                    <p>{post.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
