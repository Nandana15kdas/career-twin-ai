import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCareerPrediction } from "../services/careerService";
import "../styles/userDetails.css";

const UserDetailsPage = () => {
    const [formData, setFormData] = useState({
        skills: "",
        education: "",
        experience: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.skills || !formData.education || !formData.experience) {
            setError("All fields are required.");
            return;
        }

        const response = await getCareerPrediction(formData);
        if (response) {
            localStorage.setItem("careerPrediction", JSON.stringify(response));
            navigate("/dashboard");
        }
    };

    return (
        <div className="user-details-container">
            <h2>Tell us about yourself</h2>
            <form onSubmit={handleSubmit}>
                <label>Skills (comma-separated):</label>
                <input type="text" name="skills" value={formData.skills} onChange={handleChange} />

                <label>Education Level:</label>
                <input type="text" name="education" value={formData.education} onChange={handleChange} />

                <label>Years of Experience:</label>
                <input type="number" name="experience" value={formData.experience} onChange={handleChange} />

                <button type="submit">Get Career Prediction</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default UserDetailsPage;
