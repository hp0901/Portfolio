const { contactUsEmail } = require('./contactUsEmail');
const mailSender = require('./transporter'); // Add this line to import mailSender

exports.contactUsController = async (req, res) => {
  const { fullName, phone, alternatePhone, subject, recipientEmail, dob, gender, message } = req.body;
  console.log(req.body);
  try {
    const emailRes = await mailSender(
      recipientEmail,
      "Your Data sent successfully",
      contactUsEmail(fullName, phone, alternatePhone, subject, recipientEmail, dob, gender, message)
    );
    console.log("Email Res ", emailRes);
    return res.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log("Error", error);
    console.log("Error message :", error.message);
    return res.json({
      success: false,
      message: "Something went wrong...",
    });
  }
}