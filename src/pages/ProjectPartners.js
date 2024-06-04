import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ProjectPartners.css';
import '../styles/ProjectPartnersSubPages.css';

// Import partner images
import partner1 from '../assets/images/Utoronto_coa.svg.png';
import partner2 from '../assets/images/Utoronto_coa.svg.png';
import partner3 from '../assets/images/Utoronto_coa.svg.png';
import partner4 from '../assets/images/Utoronto_coa.svg.png';
import partner6 from '../assets/images/Utoronto_coa.svg.png';
import partner7 from '../assets/images/Utoronto_coa.svg.png';
import partner8 from '../assets/images/Utoronto_coa.svg.png';
import partner9 from '../assets/images/Utoronto_coa.svg.png';
import partner10 from '../assets/images/Utoronto_coa.svg.png';
import partner11 from '../assets/images/Utoronto_coa.svg.png';
import partner12 from '../assets/images/Utoronto_coa.svg.png';
import logo2 from "../assets/images/7ah4lwcm.png";

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

function Partners() {
    return (
        <div>
            <Header />
            <main className="partners-content">
                <div className="partners-submenu">
                    <ul>
                        <li><Link to="/partners">Project Partners</Link></li>
                        <li><Link to="/partners/project-partners-toronto">Projects Partners Toronto</Link></li>
                        <li><Link to="/partners/project-partners-thunder-bay">Projects Partners Thunder Bay</Link></li>
                        <li><Link to="/partners/other-name-2">Other Name 2</Link></li>
                        <li><Link to="/partners/other-name-3">Other Name 3</Link></li>
                        {/* Add more submenu items here */}
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/project-partners-toronto" element={<ProjectsPartnersToronto />} />
                    <Route path="/project-partners-thunder-bay" element={<ProjectsPartnersThunderBay />} />
                    <Route path="/other-name-2" element={<OtherName2 />} />
                    <Route path="/other-name-3" element={<OtherName3 />} />
                    {/* Add more routes for subpages here */}
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

function ProjectsPartnersToronto() {
    return (
        <div className="subpage">
            <h1>Projects Partners Toronto</h1>
            <div className="cards-container">
                <div className="card">
                    <img src={partner1} alt="Rwaida Akra" />
                    <div className="info">
                        <h3>Rwaida Akra</h3>
                        <h4>Research Assistant</h4>
                        <p>Rwaida is a dentist and research assistant at the Migrant Oral Health Project...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={partner2} alt="Olawale Dudubo" />
                    <div className="info">
                        <h3>Olawale Dudubo</h3>
                        <h4>Research Assistant</h4>
                        <p>Olawale is a PhD student in the Faculty of Dentistry at McGill University...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={partner3} alt="Asma Salem" />
                    <div className="info">
                        <h3>Asma Salem</h3>
                        <h4>Research Coordinator</h4>
                        <p>Asma is a graduate student in the Master of Science-Dental Sciences program...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectsPartnersThunderBay() {
    return (
        <div className="subpage">
            <h1>Projects Partners Thunder Bay</h1>
            <div className="cards-container">
                <div className="card">
                    <img src={partner4} alt="Rwaida Akra" />
                    <div className="info">
                        <h3>Rwaida Akra</h3>
                        <h4>Research Assistant</h4>
                        <p>Rwaida is a dentist and research assistant at the Migrant Oral Health Project...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={partner5} alt="Olawale Dudubo" />
                    <div className="info">
                        <h3>Olawale Dudubo</h3>
                        <h4>Research Assistant</h4>
                        <p>Olawale is a PhD student in the Faculty of Dentistry at McGill University...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={partner6} alt="Asma Salem" />
                    <div className="info">
                        <h3>Asma Salem</h3>
                        <h4>Research Coordinator</h4>
                        <p>Asma is a graduate student in the Master of Science-Dental Sciences program...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OtherName2() {
    return (
        <div className="subpage">
            <h1>Other Name 2</h1>
            <div className="cards-container">
                <div className="card">
                    <img src={partner7} alt="Rwaida Akra" />
                    <div className="info">
                        <h3>Rwaida Akra</h3>
                        <h4>Research Assistant</h4>
                        <p>Rwaida is a dentist and research assistant at the Migrant Oral Health Project...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={partner8} alt="Olawale Dudubo" />
                    <div className="info">
                        <h3>Olawale Dudubo</h3>
                        <h4>Research Assistant</h4>
                        <p>Olawale is a PhD student in the Faculty of Dentistry at McGill University...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={partner9} alt="Asma Salem" />
                    <div className="info">
                        <h3>Asma Salem</h3>
                        <h4>Research Coordinator</h4>
                        <p>Asma is a graduate student in the Master of Science-Dental Sciences program...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OtherName3() {
    return (
        <div className="subpage">
            <h1>Other Name 3</h1>
            <div className="cards-container">
                <div className="card">
                    <img src={partner10} alt="Rwaida Akra" />
                    <div className="info">
                        <h3>Rwaida Akra</h3>
                        <h4>Research Assistant</h4>
                        <p>Rwaida is a dentist and research assistant at the Migrant Oral Health Project...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={partner11} alt="Olawale Dudubo" />
                    <div className="info">
                        <h3>Olawale Dudubo</h3>
                        <h4>Research Assistant</h4>
                        <p>Olawale is a PhD student in the Faculty of Dentistry at McGill University...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={partner12} alt="Asma Salem" />
                    <div className="info">
                        <h3>Asma Salem</h3>
                        <h4>Research Coordinator</h4>
                        <p>Asma is a graduate student in the Master of Science-Dental Sciences program...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;

