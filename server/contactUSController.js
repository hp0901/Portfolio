const Contact = require("./schema/emailsent"); // Mongoose model
const mailSender = require("./transporter"); // Nodemailer setup
const { contactUsEmail } = require('./contactUsEmail') // Email template

// POST: Save contact and send email
exports.contactUsController = async (req, res) => {
  const {
    fullName,
    phone,
    alternatePhone,
    subject,
    recipientEmail,
    dob,
    gender,
    message,
  } = req.body;

  try {
    // Save to MongoDB
    const newContact = await Contact.create({
      fullName,
      phone,
      alternatePhone,
      subject,
      recipientEmail,
      dob,
      gender,
      message,
    });

    console.log("✅ Contact saved:", newContact);

    // Send confirmation email
    const emailRes = await mailSender(
      recipientEmail,
      "Your Data Sent Successfully",
      contactUsEmail(
        fullName,
        phone,
        alternatePhone,
        subject,
        recipientEmail,
        dob,
        gender,
        message
      )
    );

    console.log("📧 Email sent:", emailRes);

    return res.json({
      success: true,
      message: "Email sent and data saved successfully.",
    });
  } catch (error) {
    console.error("❌ Error in contactUsController:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while submitting the form.",
    });
  }
};

// GET: Retrieve all contact entries
exports.getContactsController = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // Latest first
    return res.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("❌ Error in getContactsController:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve contact entries.",
    });
  }
};
