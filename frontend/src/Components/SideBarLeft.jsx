import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './SideBarLeft.css';

function SideBarLeft() {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    fetch("http://localhost:5000/api/")
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error["Error fetching profile:", err]);

  }, [])

  return (
    <div className="sidebar-container">
      {!profile ? (
        <div className="account-creation">
          <h3>OpenCollab is a community of passionate creators and innovators</h3>
          <p>
            We’re building a space where developers, designers, and learners come
            together to share ideas, start projects, and collaborate in real-time.
          </p>
          <Link to="/user"><button>Create Profile</button></Link>
        </div>
      ) : (
        <div className="account-details">
          <img
            src={profile.imageUrl || "https://via.placeholder.com/100"}
            alt="Profile"
            width="100"
            height="100"
            style={{ borderRadius: "50%" }}
          />
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
          <p>Reviews: {profile.reviews}</p>
        </div>
      )}

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