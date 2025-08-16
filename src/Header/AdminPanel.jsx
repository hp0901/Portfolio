// AdminPanel.jsx
import React, { useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ username: "", password: "", otp: "" });

  // Handle login
  const handleLogin = async () => {
    try {
      const res = await axios.post("https://your-backend.com/login", {
        username: form.username,
        password: form.password,
      });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      alert("✅ Login successful");
    } catch (err) {
      alert("❌ Invalid credentials");
    }
  };

  // Send OTP
  const sendOtp = async () => {
    try {
      await axios.get("https://your-backend.com/send-otp", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsOtpSent(true);
      alert("📩 OTP sent to your email");
    } catch (err) {
      alert("❌ Failed to send OTP");
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    try {
      await axios.post(
        "https://your-backend.com/verify-otp",
        { otp: form.otp },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setIsOtpVerified(true);
      alert("✅ OTP verified!");
    } catch (err) {
      alert("❌ Invalid or expired OTP");
    }
  };

  // Fetch entries
  const fetchEntries = async () => {
    try {
      const res = await axios.get("http://localhost:3001/admin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEntries(res.data);
    } catch (err) {
      alert("❌ Failed to fetch entries");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>🔐 Admin Panel</h2>

      {/* Step 1: Login */}
      {!token && (
        <div>
          <input
            placeholder="Username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {/* Step 2: Send OTP */}
      {token && !isOtpSent && (
        <div>
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      )}

      {/* Step 3: Verify OTP */}
      {isOtpSent && !isOtpVerified && (
        <div>
          <input
            placeholder="Enter OTP"
            onChange={(e) => setForm({ ...form, otp: e.target.value })}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}

      {/* Step 4: Fetch Entries */}
      {isOtpVerified && (
        <div>
          <button onClick={fetchEntries}>View Entries</button>
          <ul>
            {entries.map((entry, i) => (
              <li key={i}>
                <strong>{entry.fullName}</strong> - {entry.phone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
