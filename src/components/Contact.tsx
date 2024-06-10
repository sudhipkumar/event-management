import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await axios.post("/api/contact", formData);
      if (response.status === 200) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("Message sent successfully!");
        Swal.fire("Success", "Message sent successfully!", "success");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <article>
      <div className="main-container py-10 bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white space-y-6 p-14 rounded-lg shadow-lg"
        >
          <h1 className="text-4xl font-bold text-center uppercase">
            Contact Us
          </h1>
          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 font-semibold text-xl"
              htmlFor="name"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 font-semibold text-xl"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 font-semibold text-xl"
              htmlFor="message"
            >
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 tracking-wider text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-center  text-green-600">{status}</p>
          )}
        </form>
      </div>
    </article>
  );
};

export default ContactForm;
