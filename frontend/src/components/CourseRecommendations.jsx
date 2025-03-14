import React from "react";
import "../styles/dashboard.css";

const courses = [
  { name: "React for Beginners", link: "https://reactjs.org" },
  { name: "Mastering TypeScript", link: "https://www.typescriptlang.org" },
  { name: "GraphQL Complete Guide", link: "https://graphql.org" },
];

const CourseRecommendations = () => {
  return (
    <div className="courses-container">
      <h2>Recommended Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              {course.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseRecommendations;
