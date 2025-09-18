import React, { useState } from 'react'
import Footer from '../Components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault(); // form reload আটকাবে
  setSuccess("Congratulations🎉 Successfully Sent Your Message✅");

  // ফিল্ড খালি করে দাও
  setFormData({
    name: "",
    email: "",
    message: "",
  });

  // ৩ সেকেন্ড পরে success message hide হবে
  setTimeout(() => {
    setSuccess("");
  }, 3000);
};

  return (
    <div>
      <div className="mt-12 min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Success Message */}
          {success && (
            <p className="mt-4 text-green-600 font-medium text-center">
              {success}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
