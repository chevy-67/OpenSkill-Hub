import React from "react";
import Navbar from "/src/frontend/Navbar";
import SideBarLeft from "../Components/SideBarLeft";
import './Home.css';

const Home = () => {
    const posts = [
        { id: 1, title: "Project 1", description: "Description 1", author: "Alice" },
        { id: 2, title: "Project 2", description: "Description 2", author: "Bob" },
        { id: 3, title: "Project 3", description: "Description 3", author: "Charlie" },
    ];

    return (
        <div>
            <Navbar />
            <div className="app-layout">
                <SideBarLeft />
                <div className="main-content">
                    <h1>Welcome to Home Page</h1>
                    <p>This is where your feed or projects will appear.</p>

                    <div className="posts-feed">
                        {posts.map((post) => (
                            <div key={post.id} className="post-row">
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <small>By {post.author}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
