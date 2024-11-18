import "./Contact.css";
import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";

function Contact() {
  // State untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fungsi untuk mengirim data ke Firebase
  const handleSubmit = (e) => {
    e.preventDefault();

    const database = getDatabase(); // Mengambil referensi database
    const contactsRef = ref(database, "contacts"); // Lokasi data di Firebase

    // Menambahkan data ke Firebase
    push(contactsRef, formData)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        }); // Reset form
      })
      .catch((error) => {
        alert("Failed to send message: " + error.message);
      });
  };

  return (
    <div className="Contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contact-info">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
