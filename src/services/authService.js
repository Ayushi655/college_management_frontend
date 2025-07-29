// src/services/authService.js
import axios from "axios";

const API_BASE = "http://localhost:3000/api/auth";

export const registerUser = async(email, password, role) => {
    const allowedRoles = ["student", "teacher"];
    if (!allowedRoles.includes(role)) {
        console.error("Invalid role provided:", role);
        throw new Error("Invalid role");
    }

    try {
        const response = await axios.post(`${API_BASE}/register`, {
            email,
            password,
            role,
        });

        switch (response.status) {
            case 200:
            case 201:
                console.log("✅ Registration successful:", response.data);
                return response.data;
            default:
                console.warn(`⚠️ Unexpected success status: ${response.status}`, response.data);
                throw new Error(`Unexpected success response: ${response.status}`);
        }

    } catch (error) {
        if (error.response) {
            const { status, data } = error.response;

            switch (status) {
                case 400:
                    console.error("❌ Bad Request:", data.message || "Invalid input.");
                    throw new Error(`Bad Request: ${data?.message || "Invalid input."}`);
                case 401:
                    console.error("❌ Unauthorized:", data.message || "Authentication required.");
                    throw new Error(`Unauthorized: ${data?.message || "Authentication required."}`);
                case 403:
                    console.error("❌ Forbidden:", data.message || "Access denied.");
                    throw new Error(`Forbidden: ${data?.message || "Access denied."}`);
                case 409:
                    console.error("❌ Conflict:", data.message || "User already exists.");
                    throw new Error(`Conflict: ${data?.message || "User already exists."}`);
                case 500:
                    console.error("❌ Internal Server Error:", data.message || "Try again later.");
                    throw new Error(`Server Error: ${data?.message || "Try again later."}`);
                default:
                    console.error(`❌ Unhandled Error ${status}:`, data.message || "Something went wrong.");
                    throw new Error(`Unhandled Error ${status}: ${data?.message || "Something went wrong."}`);
            }

        } else if (error.request) {
            console.error("❌ No response received from server.");
            throw new Error("No response from server. Please check your internet connection.");
        } else {
            console.error("❌ Request error:", error.message);
            throw new Error(`Request failed: ${error.message}`);
        }
    }
};