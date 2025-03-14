import React, { useState, useEffect } from "react";
import CareerPathTimeline from "../components/CareerPathTimeline";
import SkillRadarChart from "../components/SkillRadarChart";
import CourseRecommendations from "../components/CourseRecommendations";
import "../styles/dashboard.css";

const Dashboard = () => {
    const [careerPrediction, setCareerPrediction] = useState(null);
    const [alternativeCareers, setAlternativeCareers] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("careerPrediction");
        if (storedData) {
            const { predictedCareer, alternativeCareers } = JSON.parse(storedData);
            setCareerPrediction(predictedCareer);
            setAlternativeCareers(alternativeCareers);
        }
    }, []);

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>

            {careerPrediction ? (
                <div className="career-prediction">
                    <h2>Career Forecasting AI</h2>
                    <p><strong>Best Career Path:</strong> {careerPrediction}</p>
                    <h3>Alternative Careers</h3>
                    <ul>
                        {alternativeCareers.map((career, index) => (
                            <li key={index}>{career}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading career prediction...</p>
            )}

            <CareerPathTimeline />
            <SkillRadarChart />
            <CourseRecommendations />
        </div>
    );
};

export default Dashboard;
