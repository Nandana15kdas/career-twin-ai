import React, { useState } from "react";
import "../styles/dashboard.css";

const CareerInputForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        skills: "",
        education: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="career-input-form">
            <h2>Enter Your Skills & Education</h2>
            <form onSubmit={handleSubmit}>
                <label>Skills (comma-separated):</label>
                <input type="text" name="skills" value={formData.skills} onChange={handleChange} />

                <label>Education Level:</label>
                <input type="text" name="education" value={formData.education} onChange={handleChange} />

                <button type="submit">Get Career Prediction</button>
            </form>
        </div>
    );
};

export default CareerInputForm;
