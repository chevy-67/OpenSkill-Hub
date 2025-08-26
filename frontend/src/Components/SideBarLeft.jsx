import React from "react";
import { Link } from "react-router-dom";
import './SideBarLeft.css';

function SideBarLeft() {
  return (
    <div className="sidebar-container">
      <div className="account-creation">
        <h3>OpenCollab is a community of passionate creators and innovators</h3>
        <p>
          We’re building a space where developers, designers, and learners come
          together to share ideas, start projects, and collaborate in real-time.
        </p>
        <Link to="/user"><button>Create Account</button></Link>
      </div>

      <div className="sidebar-links">
        <div className="main-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/createpost">Create</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/myprojects">My Project</Link></li>
          </ul>
        </div>

        <div className="community">
          <ul>
            <li><Link to="/mentors">Mentors</Link></li>
            <li><Link to="/discussion">Discussion</Link></li>
          </ul>
        </div>

        <div className="personal">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default SideBarLeft;
