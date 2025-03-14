import React from "react";
import "../styles/dashboard.css";

const CareerPathTimeline = () => {
  const careerSteps = [
    { stage: "Beginner", description: "Learn HTML, CSS, JavaScript & React" },
    { stage: "Intermediate", description: "Master TypeScript, GraphQL, and Redux" },
    { stage: "Advanced", description: "Work on real-world projects & contribute to open-source" },
    { stage: "Professional", description: "Apply for jobs and keep learning new trends" },
  ];

  return (
    <div className="timeline-container">
      <h2>Career Path Timeline</h2>
      <ul>
        {careerSteps.map((step, index) => (
          <li key={index}>
            <h3>{step.stage}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerPathTimeline;
