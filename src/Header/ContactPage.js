import React, { useState } from "react";
import "../index.css";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    alternatePhone: "",
    subject: "",
    recipientEmail: "",
    dob: "",
    gender: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.phone || !/^\+?[0-9\s-]{10,15}$/.test(formData.phone))
      newErrors.phone = "Valid phone number is required";

    if (formData.alternatePhone && !/^\+?[0-9\s-]{10,15}$/.test(formData.alternatePhone))
      newErrors.alternatePhone = "Alternate phone must be valid";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (
      !formData.recipientEmail.trim() ||
      !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.recipientEmail)
    )
      newErrors.recipientEmail = "Valid recipient email is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setSubmitStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("going to backend");
    try {
      console.log("API Base URL:", API_BASE_URL); // helps you debug
      const response = await fetch(`http://portfolio-3-2ni7.onrender.com/contact/transport`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


  console.log(formData);


      if (!response.ok) throw new Error("Network error");

      setSubmitStatus("✅ Email sent successfully!");
      setFormData({
        fullName: "",
        phone: "",
        alternatePhone: "",
        subject: "",
        recipientEmail: "",
        dob: "",
        gender: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setSubmitStatus("❌ Failed to send email.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl backdrop-blur-xl text-white animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-pink-400 mb-10 tracking-wide drop-shadow-md">
        Contact Us
      </h1>

      <form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 bg-gray-900/50 p-4 sm:p-6 md:p-10 rounded-3xl border border-pink-500/30 shadow-inner shadow-pink-500/10"
>
  {/* Full Name */}
  <div className="col-span-1 sm:col-span-2">
    <label className="block mb-2 text-indigo-300 font-semibold text-sm sm:text-base">Full Name *</label>
    <input
      type="text"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      className={`w-full px-4 py-3 sm:px-6 rounded-xl bg-gray-800 text-white border-2 ${errors.fullName ? "border-red-500" : "border-pink-500/20"} focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base`}
      placeholder="Your full name"
    />
    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
  </div>

  {/* Phone Number */}
  <div>
    <label className="block mb-2 text-indigo-300 font-semibold text-sm sm:text-base">Phone Number *</label>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="+91xxxxxxxxxx"
      className={`w-full px-4 py-3 sm:px-6 rounded-xl bg-gray-800 text-white border-2 ${errors.phone ? "border-red-500" : "border-pink-500/20"} focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base`}
    />
    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
  </div>

  {/* Alternate Number */}
  <div>
    <label className="block mb-2 text-indigo-300 font-semibold text-sm sm:text-base">Alternate Number (Optional)</label>
    <input
      type="tel"
      name="alternatePhone"
      value={formData.alternatePhone}
      onChange={handleChange}
      placeholder="+91xxxxxxxxxx"
      className={`w-full px-4 py-3 sm:px-6 rounded-xl bg-gray-800 text-white border-2 ${errors.alternatePhone ? "border-red-500" : "border-pink-500/20"} focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base`}
    />
    {errors.alternatePhone && <p className="text-red-400 text-xs mt-1">{errors.alternatePhone}</p>}
  </div>

  {/* Date of Birth */}
  <div>
    <label className="block mb-2 text-indigo-300 font-semibold text-sm sm:text-base">Date of Birth</label>
    <div className="relative">
      <input
        type="date"
        name="dob"
        id="dob"
        value={formData.dob}
        onChange={handleChange}
        className="w-full pr-12 px-4 py-3 sm:px-6 rounded-xl bg-gray-800 text-white border-2 border-pink-500/20 focus:ring-2 focus:ring-pink-500 outline-none appearance-none text-sm sm:text-base"
      />
      <button
        type="button"
        onClick={() => document.getElementById("dob")?.showPicker?.()}
        className="absolute inset-y-0 right-4 flex items-center text-pink-400 text-lg sm:text-xl"
      >
        📅
      </button>
    </div>
  </div>

  {/* Gender */}
  <div>
    <label className="block mb-2 text-indigo-300 font-semibold text-sm sm:text-base">Gender</label>
    <select
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      className="w-full px-4 py-3 sm:px-6 rounded-xl bg-gray-800 text-white border-2 border-pink-500/20 focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
    >
      <option value="">Select</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
      <option value="Prefer not to say">Prefer not to say</option>
    </select>
  </div>

  {/* Subject */}
  <div>
    <label className="block mb-2 text-indigo-300 font-semibold text-sm sm:text-base">Subject *</label>
    <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      placeholder="Email subject"
      className={`w-full px-4 py-3 sm:px-6 rounded-xl bg-gray-800 text-white border-2 ${errors.subject ? "border-red-500" : "border-pink-500/20"} focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base`}
    />
    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
  </div>

  {/* Recipient Email */}
  <div>
    <label className="block mb-2 text-indigo-300 font-semibold text-sm sm:text-base">Recipient Email *</label>
    <input
      type="email"
      name="recipientEmail"
      value={formData.recipientEmail}
      onChange={handleChange}
      placeholder="recipient@example.com"
      className={`w-full px-4 py-3 sm:px-6 rounded-xl bg-gray-800 text-white border-2 ${errors.recipientEmail ? "border-red-500" : "border-pink-500/20"} focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base`}
    />
    {errors.recipientEmail && <p className="text-red-400 text-xs mt-1">{errors.recipientEmail}</p>}
  </div>

  {/* Message */}
  <div className="col-span-1 sm:col-span-2">
    <label className="block mb-2 text-indigo-300 font-semibold text-sm sm:text-base">Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Your message..."
      rows="4"
      className="w-full px-4 py-3 sm:px-6 rounded-xl bg-gray-800 text-white border-2 border-pink-500/20 focus:ring-2 focus:ring-pink-500 outline-none text-sm sm:text-base"
    ></textarea>
  </div>

  {/* Submit Button */}
  <div className="col-span-1 sm:col-span-2 text-center mt-2">
    <button
      type="submit"
      className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white text-base rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      ✉️ Send Email
    </button>
  </div>

  {/* Submission Status */}
  {submitStatus && (
    <p className="col-span-1 sm:col-span-2 text-center mt-4 text-sm text-green-400 font-medium">
      {submitStatus}
    </p>
  )}
</form>

    </div>
  );
};

export default ContactPage;
