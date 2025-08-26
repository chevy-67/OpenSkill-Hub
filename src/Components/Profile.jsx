import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faBriefcase,
  faGraduationCap,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub as faGithubBrand,
  faTwitter as faTwitterBrand,
} from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Profile.css";

function Profile() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/profile", data);
      alert("Profile created successfully ✅");
      console.log("Server response:", res.data);
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="profile-layout">
      <div className="profile-container">
        <div className="profile-header">
          <h1>Create Your Professional Profile</h1>
          <p>Build your professional identity and showcase your skills</p>
        </div>

        {/* Correct hook-form integration */}
        <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faUser} className="icon" /> First Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && <span className="error">{errors.firstName.message}</span>}
              </div>
              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faUser} className="icon" /> Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && <span className="error">{errors.lastName.message}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faEnvelope} className="icon" /> Email *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
              </div>
              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faPhone} className="icon" /> Phone Number
                </label>
                <input type="tel" placeholder="Enter your phone number" {...register("phone")} />
              </div>
            </div>

            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Location
              </label>
              <input type="text" placeholder="City, State, Country" {...register("location")} />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="form-section">
            <h2>Professional Summary</h2>
            <div className="form-group">
              <label>Headline *</label>
              <input
                type="text"
                placeholder="e.g., React Developer | Full Stack Developer"
                {...register("headline", { required: "Professional headline is required" })}
              />
              {errors.headline && <span className="error">{errors.headline.message}</span>}
            </div>

            <div className="form-group">
              <label>About *</label>
              <textarea
                rows="4"
                placeholder="Write a compelling summary..."
                {...register("about", {
                  required: "Professional summary is required",
                  minLength: { value: 50, message: "Summary should be at least 50 characters long" },
                })}
              ></textarea>
              {errors.about && <span className="error">{errors.about.message}</span>}
            </div>
          </div>

          {/* Example: Social Links */}
          <div className="form-section">
            <h2>Social & Professional Links</h2>
            <div className="form-row">
              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faLinkedinIn} className="icon" /> LinkedIn
                </label>
                <input type="url" placeholder="https://linkedin.com/in/yourprofile" {...register("linkedin")} />
              </div>
              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faGithubBrand} className="icon" /> GitHub
                </label>
                <input type="url" placeholder="https://github.com/yourusername" {...register("github")} />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
