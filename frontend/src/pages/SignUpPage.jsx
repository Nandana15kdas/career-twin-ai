import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/signup.css";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setError("All fields are required.");
            return;
        }

        const response = await registerUser(formData);
        if (response) {
            navigate("/user-details");  // Redirect to UserDetailsPage after signup
        } else {
            setError("Signup failed. Try again.");
        }
    };

    return (
        <div className="signup-container">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                
                <button type="submit">Sign Up</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default SignUpPage;
