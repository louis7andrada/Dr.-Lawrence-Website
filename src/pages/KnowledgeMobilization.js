import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/KnowledgeMobilization.css';

function KnowledgeMobilization() {
    return (
        <div>
            <Header />
            <main className="knowledge-mobilization-content">
                <h1>Knowledge Mobilization Activities</h1>
                <p>
                    Our knowledge mobilization activities include conferences, posters, and various other methods to share our findings and engage with the
                    community. We aim to disseminate our research in ways that are accessible and impactful, ensuring that our work reaches those who can benefit
                    from it the most. Stay tuned for updates on our latest activities and events.
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default KnowledgeMobilization;
