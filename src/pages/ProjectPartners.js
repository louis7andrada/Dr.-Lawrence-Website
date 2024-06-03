import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ProjectPartners.css';

function ProjectPartners() {
    return (
        <div>
            <Header />
            <main className="project-partners-content">
                <h1>Project Partners</h1>
                <p>
                    Our project partners include various universities, public health organizations, and community groups. This collaboration enhances our
                    ability to improve oral health care for refugeed people in Canada and beyond. Please check back later for more detailed information on our
                    specific project partners.
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default ProjectPartners;
