import axios from "axios";

const API_URL = "http://localhost:5000"; // Update with your backend URL

export const getCareerPrediction = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/career-prediction`, formData);
        return response.data;
    } catch (error) {
        console.error("Error fetching career prediction:", error);
        return null;
    }
};
