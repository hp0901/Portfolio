import React, { useEffect, useState } from "react";

const ContactEntries = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://portfolio-3-2ni7.onrender.com/contact/entries")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContacts(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h2 className="text-3xl font-bold text-center text-indigo-400 mb-8">📋 Submitted Contacts</h2>

      {loading ? (
        <p className="text-center text-pink-300">Loading entries...</p>
      ) : contacts.length === 0 ? (
        <p className="text-center text-gray-400">No entries found.</p>
      ) : (
        <div className="space-y-6">
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="bg-gray-800 rounded-xl p-6 border border-pink-500/20 shadow-md"
            >
              <h3 className="text-xl font-semibold text-pink-400">{contact.fullName}</h3>
              <p><span className="text-indigo-300">Email:</span> {contact.recipientEmail}</p>
              <p><span className="text-indigo-300">Phone:</span> {contact.phone}</p>
              {contact.alternatePhone && <p><span className="text-indigo-300">Alt Phone:</span> {contact.alternatePhone}</p>}
              <p><span className="text-indigo-300">Subject:</span> {contact.subject}</p>
              <p><span className="text-indigo-300">DOB:</span> {contact.dob}</p>
              <p><span className="text-indigo-300">Gender:</span> {contact.gender}</p>
              <p><span className="text-indigo-300">Message:</span> {contact.message}</p>
              <p className="text-sm text-gray-400 mt-2">Submitted on: {new Date(contact.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactEntries;
