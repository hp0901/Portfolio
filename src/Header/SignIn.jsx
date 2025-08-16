// src/Header/SignIn.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // ✅ Always logout on render (forces fresh login every time)
  useEffect(() => {
    localStorage.removeItem("isAuthenticated");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === "harsh_admin" && password === "Hp@2025!") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/contact/entries");
    } else {
      alert("❌ Login Failed: Invalid ID or Password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 w-80"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-400">
          🔐 Sign In
        </h2>

        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />

        {/* Password with Eye toggle */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
