import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="contact-section">
      <h2><b>Contact Us</b></h2>
      <p>Feel free to reach out!</p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
          {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
        </form>

        {/* Direct Contact Information */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          
          <br/>
          
          
          <p><strong>Email:</strong> drs.prabhu2018@gmail.com</p>
          <p><strong>Discord:</strong> shash1670</p>
          
          <br/>
          <br/>
          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shashwath-prabhu-1b144827a/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/shashwath1278" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://x.com/PrabhuShas26482" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
