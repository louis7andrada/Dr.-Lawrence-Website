import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.css';
import '../styles/AboutSubPages.css';


// Import staff images
import staff1 from '../assets/images/Utoronto_coa.svg.png';
import staff2 from '../assets/images/Utoronto_coa.svg.png';
import staff3 from '../assets/images/Utoronto_coa.svg.png';
import logo2 from "../assets/images/7ah4lwcm.png";

function AboutUs() {
    return (
        <div className="subpage">
            <h1 className="titleabout">About Us</h1>
            <p>
                <p>Lorem ipsum dolor sit amet. Ea voluptas sunt ut fugiat libero non quidem quod quo repellendus voluptas et dignissimos minima in doloribus deleniti. Est magnam ipsa ut nulla nulla ab porro voluptates. Quo explicabo soluta et impedit consequatur sit asperiores voluptatibus qui molestias dolores et magni vitae ex reiciendis nisi id quis odit. Qui iure provident ad earum minima est quia modi ad ipsum officiis sed alias placeat est ratione quia ad mollitia dolorem! Et voluptas perferendis et error blanditiis et assumenda animi. Aut pariatur explicabo et nobis officiis cum consectetur beatae et velit odit et voluptatum iste. Quo fugit repudiandae non expedita quisquam et velit fugiat qui quaerat sunt. Aut tempora quia nam consequatur perferendis ea error internos ea illum minima sit eius neque rem omnis quidem aut impedit dignissimos. Quo dolorem quia sit asperiores animi est corporis tenetur. </p>
            </p>
            <div className="logo2">
                <img src={logo2} alt="alt img" />
            </div>
        </div>
    );
}

function About() {
    return (
        <div>
            <Header />
            <main className="about-content">
                <div className="about-submenu">
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/about/principal-investigators">Principal Investigators</Link></li>
                        <li><Link to="/about/staff-trainees">Staff & Trainees</Link></li>
                        <li><Link to="/about/co-investigators">Co-Investigators</Link></li>
                        <li><Link to="/about/collaborators">Collaborators</Link></li>
                        {/* Add more submenu items here */}
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/principal-investigators" element={<PrincipalInvestigators />} />
                    <Route path="/staff-trainees" element={<StaffTrainees />} />
                    <Route path="/co-investigators" element={<CoInvestigators />} />
                    <Route path="/collaborators" element={<Collaborators />} />
                    {/* Add more routes for subpages here */}
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

function PrincipalInvestigators() {
    return (
        <div className="subpage">
            <h1>Principal Investigators</h1>
            <div className="cards-container">
                <div className="card">
                    <img src={staff1} alt="Rwaida Akra" />
                    <div className="info">
                        <h3>Rwaida Akra</h3>
                        <h4>Research Assistant</h4>
                        <p>Rwaida is a dentist and research assistant at the Migrant Oral Health Project...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={staff2} alt="Olawale Dudubo" />
                    <div className="info">
                        <h3>Olawale Dudubo</h3>
                        <h4>Research Assistant</h4>
                        <p>Olawale is a PhD student in the Faculty of Dentistry at McGill University...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={staff3} alt="Asma Salem" />
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

function StaffTrainees() {
    return (
        <div className="subpage">
            <h1>Staff & Trainees</h1>
            <div className="cards-container">
                <div className="card">
                    <img src={staff1} alt="Rwaida Akra" />
                    <div className="info">
                        <h3>Rwaida Akra</h3>
                        <h4>Research Assistant</h4>
                        <p>Rwaida is a dentist and research assistant at the Migrant Oral Health Project...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={staff2} alt="Olawale Dudubo" />
                    <div className="info">
                        <h3>Olawale Dudubo</h3>
                        <h4>Research Assistant</h4>
                        <p>Olawale is a PhD student in the Faculty of Dentistry at McGill University...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={staff3} alt="Asma Salem" />
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

function CoInvestigators() {
    return (
        <div className="subpage">
            <h1>Co-Investigators</h1>
            <div className="cards-container">
                <div className="card">
                    <img src={staff1} alt="Rwaida Akra" />
                    <div className="info">
                        <h3>Rwaida Akra</h3>
                        <h4>Research Assistant</h4>
                        <p>Rwaida is a dentist and research assistant at the Migrant Oral Health Project...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={staff2} alt="Olawale Dudubo" />
                    <div className="info">
                        <h3>Olawale Dudubo</h3>
                        <h4>Research Assistant</h4>
                        <p>Olawale is a PhD student in the Faculty of Dentistry at McGill University...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={staff3} alt="Asma Salem" />
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

function Collaborators() {
    return (
        <div className="subpage">
            <h1>Collaborators</h1>
            <div className="cards-container">
                <div className="card">
                    <img src={staff1} alt="Rwaida Akra" />
                    <div className="info">
                        <h3>Rwaida Akra</h3>
                        <h4>Research Assistant</h4>
                        <p>Rwaida is a dentist and research assistant at the Migrant Oral Health Project...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={staff2} alt="Olawale Dudubo" />
                    <div className="info">
                        <h3>Olawale Dudubo</h3>
                        <h4>Research Assistant</h4>
                        <p>Olawale is a PhD student in the Faculty of Dentistry at McGill University...</p>
                    </div>
                </div>
                <div className="card">
                    <img src={staff3} alt="Asma Salem" />
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

export default About;
