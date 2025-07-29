// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (storedUser) setUser(storedUser);
  }, []);



  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      switch (response.status) {
        case 200:
          console.log("✅ Login successful");
          console.log("🔐 Token received:", response.data.token);
          console.log("📧 Email:", response.data.user.login_email);
          let authUser = response.data.user;
          setUser(authUser);
          localStorage.setItem("authUser", JSON.stringify(authUser));
          break;
        default:
          console.warn(`⚠️ Unexpected success status: ${response.status}`, response.data);
          throw new Error(`Unexpected success status code: ${response.status}`);
      }
      return response.data
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
      return error.data;
    }
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, email: user?.email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export default AuthContext;