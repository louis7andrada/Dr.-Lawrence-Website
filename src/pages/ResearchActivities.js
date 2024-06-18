import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ResearchActivities.css';
import '../styles/ResearchActivitiesSubPages.css';

// Import research images
import research1 from '../assets/images/Utoronto_coa.svg.png';
import research2 from '../assets/images/Utoronto_coa.svg.png';
import research3 from '../assets/images/Utoronto_coa.svg.png';
import research4 from '../assets/images/Utoronto_coa.svg.png';
import research5 from '../assets/images/Utoronto_coa.svg.png';
import research6 from '../assets/images/Utoronto_coa.svg.png';
import logo3 from "../assets/images/7ah4lwcm.png";

function Activities() {
    return (
        <div className="subpage3-main">
            <main className="research-activities-content">
                <h1 className="titleabout">Research Activities</h1>
                <p>
                    Our research activities focus on improving the oral health of refugeed people through various projects and studies. We collaborate with
                    numerous institutions and community organizations to conduct research that addresses the unique challenges faced by refugeed populations.
                    Check back soon for updates on our current and past projects.
                </p>
                <div className="logo3">
                    <img src={logo3} alt="alt img" />
                </div>
            </main>
        </div>
    );
}

function ResearchActivities() {
    return (
        <div>
            <Header />
            <main className="activities-content">
                <div className="activities-submenu">
                    <ul>
                        <li><Link to="/research-activities">Research Activities</Link></li>
                        <li><Link to="/research-activities/current-research-activities">Current Research Activities</Link></li>
                        <li><Link to="/research-activities/past-research-activities">Past Research Activities</Link></li>
                        {/* Add more submenu items here */}
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Activities />} />
                    <Route path="current-research-activities" element={<CurrentResearchActivities />} />
                    <Route path="past-research-activities" element={<PastResearchActivities />} />
                    {/* Add more routes for subpages here */}
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

function CurrentResearchActivities() {
    return (
        <div className="subpage3">
            <h1>Current Research Activities</h1>
            <div className="cards-container3">
                <div className="card3">
                    <img src={research1} alt="Research 1" />
                    <div className="info3">
                        <h3>Research 1</h3>
                        <h4>Current Research</h4>
                        <p>Description of current research activity 1...Description of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research of current research activityDescription of current research activity</p>
                    </div>
                </div>
                <div className="card3">
                    <img src={research2} alt="Research 2" />
                    <div className="info3">
                        <h3>Research 2</h3>
                        <h4>Current Research</h4>
                        <p>Description of current research activity 2...Description of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research of current research activityDescription of current research activity</p>
                    </div>
                </div>
                <div className="card3">
                    <img src={research3} alt="Research 3" />
                    <div className="info3">
                        <h3>Research 3</h3>
                        <h4>Current Research</h4>
                        <p>Description of current research activity 3...Description of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research of current research activityDescription of current research activity</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PastResearchActivities() {
    return (
        <div className="subpage3">
            <h1>Past Research Activities</h1>
            <div className="cards-container3">
                <div className="card3">
                    <img src={research4} alt="Research 4" />
                    <div className="info3">
                        <h3>Research 4</h3>
                        <h4>Past Research</h4>
                        <p>Description of past research activity 4...Description of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research of current research activityDescription of current research activity</p>
                    </div>
                </div>
                <div className="card3">
                    <img src={research5} alt="Research 5" />
                    <div className="info3">
                        <h3>Research 5</h3>
                        <h4>Past Research</h4>
                        <p>Description of past research activity 5...Description of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research of current research activityDescription of current research activity</p>
                    </div>
                </div>
                <div className="card3">
                    <img src={research6} alt="Research 6" />
                    <div className="info3">
                        <h3>Research 6</h3>
                        <h4>Past Research</h4>
                        <p>Description of past research activity 6...Description of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research activityDescription of current research
                            activityDescription of current research of current research activityDescription of current research activity</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResearchActivities;
