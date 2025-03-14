import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../styles/login.css";

const LogInPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("All fields are required.");
            return;
        }

        const response = await loginUser(formData);
        if (response) {
            navigate("/user-details");  // Redirect to UserDetailsPage after login
        } else {
            setError("Invalid credentials. Try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Welcome Back</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />

                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />

                <button type="submit">Log In</button>
            </form>
            {error && <p className="error">{error}</p>}

            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
    );
};

export default LogInPage;
