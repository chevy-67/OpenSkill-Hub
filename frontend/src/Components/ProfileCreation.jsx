import React, { useState } from "react";
import axios from "axios";
import './ProfileCreation.css';

function ProfileCreation() {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        dob: "",
        address: "",
        country: "",
        postalCode: "",
        about: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.fullName) tempErrors.fullName = "Full name is required";
        if (!formData.username) tempErrors.username = "Username is required";
        if (!formData.email.includes("@")) tempErrors.email = "Enter a valid email";
        if (formData.password.length < 6)
            tempErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword)
            tempErrors.confirmPassword = "Passwords do not match";
        if (!formData.mobile.match(/^[0-9]{10}$/))
            tempErrors.mobile = "Enter a valid 10-digit mobile number";
        return tempErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/profile", formData);
            alert("Profile created successfully!");
            console.log(res.data);
        } catch (err) {
            console.error(err);
            alert("Error creating profile");
        }
    };

    return (
        <>
            <h1 className="heading">Profile</h1>
            <div className="profile-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-form">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                    </div>

                    <div className="input-form">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>

                    <div className="input-form">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="input-form">
                        <label>Mobile Number</label>
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                        {errors.mobile && <span className="error">{errors.mobile}</span>}
                    </div>

                    <div className="input-form">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    <div className="input-form">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                    </div>

                    <div className="input-form">
                        <label>Profile picture</label>
                        <input type="file" name="profilePic" />
                    </div>

                    <div className="input-form">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-form">
                        <label>Address</label>
                        <textarea
                            name="address"
                            rows={3}
                            value={formData.address}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="input-form">
                        <label>Country</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-form">
                        <label>Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-form">
                        <label>About</label>
                        <textarea
                            name="about"
                            rows={3}
                            value={formData.about}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="submit-btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProfileCreation;
