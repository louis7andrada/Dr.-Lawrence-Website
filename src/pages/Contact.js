import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_03zl9nx', // Replace with your EmailJS service ID
            'template_jti1eh2', // Replace with your EmailJS template ID
            formData,
            'gjU74_4zQnIIETSdo' // Replace with your EmailJS user ID
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div>
            <Header />
            <main className="contact-us-content">
                <h1 className="titleabout">Contact Us</h1>
                <p>
                    If you have any questions, suggestions, or would like more information about the Migrant Oral Health Project,
                    please feel free to reach out to us. We value your feedback and look forward to connecting with you.
                </p>
                <p id="contactp">
                    <br />
                    Email: luis.andrada@utoronto.ca<br />
                    Phone: (437) 996-3911<br />
                    Address: University of Toronto, 124 Edward St, Room 355, Toronto, ON M5G 1X3<br /><br /> <br />
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Contact form</h3><br />
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={handleChange} required />
                    </label>
                    <div className="button-container">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default ContactUs;
