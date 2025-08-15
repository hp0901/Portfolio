// routes/contact.js
const express = require("express");
const router = express.Router();
const transporter = require("./transporter");
const generateEmailTemplate = require("./emailtemplate");

router.post("/transport", async (req, res) => {
  console.log("Received contact request:", req.body);
  const { fullName, phone, subject, recipientEmail, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Harsh Patel" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: `New Inquiry: ${subject || "No Subject"} from ${fullName || "Visitor"}`,
      html: generateEmailTemplate({
        fullName,
        phone,
        subject,
        recipientEmail,
        message,
      }),
    });

    res.status(200).json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: "❌ Failed to send email." });
  }
});

module.exports = router;
