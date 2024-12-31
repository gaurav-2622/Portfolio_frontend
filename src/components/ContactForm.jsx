import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/send", formData);
      setStatus(response.data); // Show success message from backend
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send the message. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-900 to-gray-700 px-8 py-16 text-white">
      <div className="mx-auto container">
        <h2 className="mb-6 font-bold text-4xl text-center text-teal-400">Contact Me</h2>
        <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 w-full text-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 w-full text-white"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 w-full text-white"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg text-white transition duration-300">
            Send Message
          </button>
          {status && <p className="mt-4 text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
