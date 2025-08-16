// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoutes = require("./contact"); // Adjust path if needed

const app = express();

// ✅ Allow both localhost (dev) and deployed frontends (prod)
const allowedOrigins = [
  "http://localhost:3001",                    // Local dev
  "https://portfolio-valq.vercel.app",        // Vercel frontend
  "https://hp0901.netlify.app",               // Netlify frontend
  "https://hpportfolio0901.netlify.app/"      // Additional frontend
];

// 🌐 MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully."))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// 🔐 CORS Configuration
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow mobile apps or curl
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 🧠 Middleware
app.use(express.json());

// 📬 Routes
console.log("📨 Mounting contact routes...");
app.use("/contact", contactRoutes);

// 🏁 Health Check
app.get("/", (req, res) => res.send("✅ Server running"));

// 🚀 Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌐 Server listening at: http://localhost:${PORT}`);
});
