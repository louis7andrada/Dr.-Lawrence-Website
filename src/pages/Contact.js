import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';

function Contact() {
    return (
        <div>
            <Header />
            <main className="contact-content">
                <h1>Contact Us</h1>
                <p id="text">
                    If you have any questions, suggestions, or would like more information about the Migrant Oral Health Project, please feel free to reach out
                    to us. We value your feedback and look forward to connecting with you.
                </p>
                <p id="email">
                    Email: info@migrantoralhealthproject.org
                </p>
                <p id="phone">
                    Phone: (123) 456-7890
                </p>
                <p id="address">
                    Address: 1234 Health St., Toronto, ON, Canada
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
