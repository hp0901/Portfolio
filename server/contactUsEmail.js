exports.contactUsEmail = (
  fullName, phone, alternatePhone, subject, recipientEmail, dob, gender, message
) => {

  // Set default values for optional fields
  const altPhone = alternatePhone || "N/A";
  const userGender = gender || "Prefer not to say";
  const userDob = dob || "dd-mm-yyyy";
  const userMessage = message || "No message provided.";

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Contact Form Confirmation</title>
  <style>
    body {
      background-color: #f0f4f8;
      font-family: Arial, sans-serif;
      color: #333333;
      margin: 0;
      padding: 0;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
    }
    .logo {
      max-width: 200px;
      height: auto;
      border-radius: 8px;
    }
    .content {
      padding: 20px;
      border-radius: 8px;
    }
    .content td {
      padding: 8px 0;
    }
    .content th {
      text-align: left;
      padding: 8px 0;
      color: #555555;
    }
    .cta {
      display: inline-block;
      padding: 12px 24px;
      background-color: #3182CE;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      margin-top: 20px;
      text-align: center;
    }
    .footer {
      font-size: 14px;
      color: #999999;
      text-align: center;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <table class="container">
    <tr>
      <td class="header">
        <!-- CORRECTED: Use the public URL for the image -->
        <a href="https://hp0901.netlify.app">
          <img
            src="https://i.postimg.cc/D0LhYBrt/harsh-linkedin-bg.jpg"
            alt="Harsh Patel Portfolio"
            style="width: 200%; max-width: 400px; height: auto;"/>
        </a>
      </td>
    </tr>
    <tr>
      <td class="content">
        <p>Dear ${fullName},</p>
        <p>${userMessage}</p>
        <p>Here are the details you provided:</p>
        <table>
          <tr>
            <th>Name:</th>
            <td>${fullName}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>${recipientEmail}</td>
          </tr>
          <tr>
            <th>Phone Number:</th>
            <td>${phone}</td>
          </tr>
          <tr>
            <th>Alternate Phone:</th>
            <td>${altPhone}</td>
          </tr>
          <tr>
            <th>Subject:</th>
            <td>${subject}</td>
          </tr>
          <tr>
            <th>Date of Birth:</th>
            <td>${userDob}</td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td>${userGender}</td>
          </tr>
          <tr>
            <th>Message:</th>
            <td>${userMessage}</td>
          </tr>
        </table>
        <a class="cta" href="https://hp0901.netlify.app">Visit My Website</a>
      </td>
    </tr>
    <tr>
      <td class="footer">
        If you have any further questions or need immediate assistance, please reach out to me at 
        <a href="mailto:${recipientEmail}">harsh.patel@example.com</a>.
      </td>
    </tr>
  </table>
</body>
</html>`;
};
