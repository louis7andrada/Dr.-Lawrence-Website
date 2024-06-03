import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ResearchActivities.css';

function ResearchActivities() {
    return (
        <div>
            <Header />
            <main className="research-activities-content">
                <h1>Research Activities</h1>
                <p>
                    Our research activities focus on improving the oral health of refugeed people through various projects and studies. We collaborate with
                    numerous institutions and community organizations to conduct research that addresses the unique challenges faced by refugeed populations.
                    Check back soon for updates on our current and past projects.
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default ResearchActivities;
