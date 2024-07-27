import React from 'react';
import './ContactPage.css'; // Add your CSS styles here

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below and we'll get in touch as soon as possible.</p>
      </header>
      <section className="contact-form-section">
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="map-section">
        {/* Embed a map here */}
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </section>
      <section className="contact-info-section">
        <div className="contact-info">
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
        </div>
      </section>
      <section className="social-media-section">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </section>
      <footer className="contact-footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
