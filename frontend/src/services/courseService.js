import axios from "axios";

const API_URL = "http://localhost:5000"; // Update with your backend URL

export const fetchCourses = async () => {
    try {
        const response = await axios.get(`${API_URL}/fetch-courses`);
        return response.data.courses;
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
};
