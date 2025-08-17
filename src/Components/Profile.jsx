import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMapMarkerAlt, faBriefcase, faGraduationCap, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub as faGithubBrand, faTwitter as faTwitterBrand } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';
import './Profile.css';

function Profile() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Profile data:", data);
      // Here you would typically send the data to your backend
      // await axios.post("http://localhost:5000/api/profile", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="profile-layout">
      <div className="profile-container">
          <div className="profile-header">
            <h1>Create Your Professional Profile</h1>
            <p>Build your professional identity and showcase your skills</p>
          </div>

          <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Personal Information Section */}
            <div className="form-section">
              <h2>Personal Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    First Name *
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
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    Last Name *
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
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && <span className="error">{errors.email.message}</span>}
                </div>
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    {...register("phone")}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                  Location
                </label>
                <input
                  type="text"
                  placeholder="City, State, Country"
                  {...register("location")}
                />
              </div>
            </div>

            {/* Professional Summary Section */}
            <div className="form-section">
              <h2>Professional Summary</h2>
              <div className="form-group">
                <label>Headline *</label>
                <input
                  type="text"
                  placeholder="e.g., Senior Software Engineer | React Developer | Full Stack Developer"
                  {...register("headline", { required: "Professional headline is required" })}
                />
                {errors.headline && <span className="error">{errors.headline.message}</span>}
              </div>

              <div className="form-group">
                <label>About *</label>
                <textarea
                  placeholder="Write a compelling summary about your professional background, skills, and what you're passionate about..."
                  rows="4"
                  {...register("about", { 
                    required: "Professional summary is required",
                    minLength: {
                      value: 50,
                      message: "Summary should be at least 50 characters long"
                    }
                  })}
                ></textarea>
                {errors.about && <span className="error">{errors.about.message}</span>}
              </div>
            </div>

            {/* Experience Section */}
            <div className="form-section">
              <h2>Work Experience</h2>
              <div className="form-group">
                <label>Current Position</label>
                <input
                  type="text"
                  placeholder="e.g., Senior Software Engineer"
                  {...register("currentPosition")}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    {...register("company")}
                  />
                </div>
                <div className="form-group">
                  <label>Industry</label>
                  <input
                    type="text"
                    placeholder="e.g., Technology, Healthcare, Finance"
                    {...register("industry")}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="month"
                    {...register("startDate")}
                  />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="month"
                    {...register("endDate")}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Job Description</label>
                <textarea
                  placeholder="Describe your responsibilities and achievements..."
                  rows="3"
                  {...register("jobDescription")}
                ></textarea>
              </div>
            </div>

            {/* Education Section */}
            <div className="form-section">
              <h2>Education</h2>
              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faGraduationCap} className="icon" />
                  Degree
                </label>
                <input
                  type="text"
                  placeholder="e.g., Bachelor of Science in Computer Science"
                  {...register("degree")}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Institution</label>
                  <input
                    type="text"
                    placeholder="University or College name"
                    {...register("institution")}
                  />
                </div>
                <div className="form-group">
                  <label>Graduation Year</label>
                  <input
                    type="number"
                    placeholder="YYYY"
                    min="1950"
                    max="2030"
                    {...register("graduationYear")}
                  />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="form-section">
              <h2>Skills & Expertise</h2>
              <div className="form-group">
                <label>Technical Skills</label>
                <input
                  type="text"
                  placeholder="e.g., JavaScript, React, Node.js, Python, SQL (separate with commas)"
                  {...register("technicalSkills")}
                />
              </div>

              <div className="form-group">
                <label>Soft Skills</label>
                <input
                  type="text"
                  placeholder="e.g., Leadership, Communication, Problem Solving, Teamwork (separate with commas)"
                  {...register("softSkills")}
                />
              </div>
            </div>

            {/* Social Links Section */}
            <div className="form-section">
              <h2>Social & Professional Links</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    {...register("linkedin")}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faGithubBrand} className="icon" />
                    GitHub Profile
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/yourusername"
                    {...register("github")}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faGlobe} className="icon" />
                    Personal Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    {...register("website")}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FontAwesomeIcon icon={faTwitterBrand} className="icon" />
                    Twitter/X Profile
                  </label>
                  <input
                    type="url"
                    placeholder="https://twitter.com/yourusername"
                    {...register("twitter")}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
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
