import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
const BASE_URL = "https://college-management-backend-2.onrender.com/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("✅ Login successful");
        const authUser = response.data.user;
        setUser(authUser);
        localStorage.setItem("authUser", JSON.stringify(authUser));
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        switch (status) {
          case 400:
            console.error("❌ Bad Request:", data?.message || "Invalid credentials.");
            break;
          case 401:
            console.error("❌ Unauthorized:", data?.message || "Incorrect email or password.");
            break;
          case 403:
            console.error("❌ Forbidden:", data?.message || "Access is denied.");
            break;
          case 404:
            console.error("❌ Not Found:", data?.message || "Login endpoint not found.");
            break;
          case 500:
            console.error("❌ Server Error:", data?.message || "Try again later.");
            break;
          default:
            console.error(`❌ Unexpected error ${status}:`, data?.message || "Something went wrong.");
        }
      } else if (error.request) {
        console.error("❌ No response from server. Possible network issue.");
      } else {
        console.error("❌ Login request error:", error.message);
      }
      return { message: "Login failed" };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
