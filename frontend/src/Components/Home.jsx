import React from "react";
import Navbar from "/src/frontend/Navbar";
import SideBarLeft from "../Components/SideBarLeft";
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="app-layout">
                <SideBarLeft />
                <div className="main-content">
                    <h1>Welcome to Home Page</h1>
                    <p>This is where your feed or projects will appear.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;