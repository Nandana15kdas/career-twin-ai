import axios from "axios";

const API_URL = "http://localhost:5000"; // Update with your backend URL

export const loginUser = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, formData);
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        return null;
    }
};

export const registerUser = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, formData);
        return response.data;
    } catch (error) {
        console.error("Signup failed:", error);
        return null;
    }
};
