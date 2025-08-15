const express = require("express");
const cors = require("cors");
const contactRoutes = require("./contact");

const app = express();
app.use(cors());
app.use(express.json());
console.log("going to use contact routes");
app.use("/contact", contactRoutes); // << important!

app.get("/", (req, res) => res.send("✅ Server running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Server: http://localhost:${PORT}`);
});
