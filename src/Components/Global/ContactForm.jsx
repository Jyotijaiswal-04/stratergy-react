import React from 'react'
import{Container,Row,Col} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from '../../assets/styles/ContactForm.module.css'
import  { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic (e.g. API call)
  };
  return (
    <div>
        <Container  fluid>
             <div className=' w-100 mb-5' style={{height:"70vh"}}>
        <iframe className={classes.iframe} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" ></iframe >
      </div>
     

        </Container>
        <Container className={classes.cont}>
            <div className={classes.contactformContainer}>
      <div className={classes.heading}><h2>Get in Touch</h2></div>
      <form onSubmit={handleSubmit} className={classes.contactform}>
        <div className={classes.row}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Write Message..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={classes.sendButton}>SEND MESSAGE</button>
      </form>
    </div>
        </Container>
      
    </div>
  )
}

export default ContactForm
