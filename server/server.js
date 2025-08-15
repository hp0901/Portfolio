const express = require("express");
const cors = require("cors");
const contactRoutes = require("./contact");

const app = express();

// ✅ Allow both localhost (dev) and your Vercel site (prod)
const allowedOrigins = [
  "http://localhost:3000",                 // local dev
  "https://portfolio-valq.vercel.app"      // your deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

console.log("going to use contact routes");
app.use("/contact", contactRoutes);

app.get("/", (req, res) => res.send("✅ Server running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Server: http://localhost:${PORT}`);
});
