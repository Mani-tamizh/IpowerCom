import React, { useState } from 'react';
import './ContactUs.css';
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setShowPopup(true);
    }
     else {
      console.log('Form data submitted:', formData);
      // Add logic to send form data to a server here.
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className='parent-contact'>
      <div className="contact-info">
        <h3>Get in touch with us</h3>
        <p>
          Have a question or need a quote? We're here to help with all your plasma cutting needs. Reach out today, and let’s create something great together!
        </p>
        
        <div className="info-item">
          <div className="info-icon">
            <BsTelephone className='contact-icons' />
          </div>
          <div>
            <h4>Have any question?</h4>
            <p>Free +1 3333 976 444</p>
          </div>
        </div>
        
        <div className="info-item">
          <div className="info-icon">
            <CiMail className='contact-icons'/>
          </div>
          <div>
            <h4>Write email</h4>
            <p>ipowerplasma@company.com</p>
          </div>
        </div>
        
        <div className="info-item">
          <div className="info-icon">
            <IoLocationOutline className='contact-icons'/>
          </div>
          <div>
            <h4>Visit anytime</h4>
            <p>33 Road Brooklyn Street, 600 New York, USA</p>
          </div>
        </div>
      </div>
      

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Form fields */}
        <div>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
        </div>
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Contact Us</button>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Please fill out all fields before submitting the form.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
