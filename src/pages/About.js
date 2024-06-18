import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.css';
import '../styles/AboutSubPages.css';

// Import staff images
import staff1 from '../assets/images/Utoronto_coa.svg.png';
import staff2 from '../assets/images/Utoronto_coa.svg.png';
import staff3 from '../assets/images/Utoronto_coa.svg.png';
import staff4 from '../assets/images/Utoronto_coa.svg.png';
import staff5 from '../assets/images/Utoronto_coa.svg.png';
import staff6 from '../assets/images/Utoronto_coa.svg.png';
import staff7 from '../assets/images/Utoronto_coa.svg.png';
import staff8 from '../assets/images/Utoronto_coa.svg.png';
import staff9 from '../assets/images/Utoronto_coa.svg.png';
import staff10 from '../assets/images/Utoronto_coa.svg.png';
import staff11 from '../assets/images/Utoronto_coa.svg.png';
import staff12 from '../assets/images/Utoronto_coa.svg.png';
import logo2 from "../assets/images/7ah4lwcm.png";

const staffData = [
    {
        id: 'rwaida-akra',
        name: 'Rwaida Akra',
        role: 'Research Assistant',
        description: 'Rwaida is a dentist and research assistant at the Migrant Oral Health Project...',
        img: staff1,
        category: 'principal'
    },
    {
        id: 'olawale-dudubo',
        name: 'Olawale Dudubo',
        role: 'Research Assistant',
        description: 'Olawale is a PhD student in the Faculty of Dentistry at McGill University...',
        img: staff2,
        category: 'principal'
    },
    {
        id: 'asma-salem',
        name: 'Asma Salem',
        role: 'Research Coordinator',
        description: 'Asma is a graduate student in the Master of Science-Dental Sciences program...',
        img: staff3,
        category: 'principal'
    },
    {
        id: 'staff-4',
        name: 'Staff Member 4',
        role: 'Staff & Trainee',
        description: 'Description for staff member 4...',
        img: staff4,
        category: 'staff'
    },
    {
        id: 'staff-5',
        name: 'Staff Member 5',
        role: 'Staff & Trainee',
        description: 'Description for staff member 5...',
        img: staff5,
        category: 'staff'
    },
    {
        id: 'staff-6',
        name: 'Staff Member 6',
        role: 'Staff & Trainee',
        description: 'Description for staff member 6...',
        img: staff6,
        category: 'staff'
    },
    {
        id: 'co-investigator-7',
        name: 'Co-Investigator 7',
        role: 'Co-Investigator',
        description: 'Description for co-investigator 7...',
        img: staff7,
        category: 'co-investigator'
    },
    {
        id: 'co-investigator-8',
        name: 'Co-Investigator 8',
        role: 'Co-Investigator',
        description: 'Description for co-investigator 8...',
        img: staff8,
        category: 'co-investigator'
    },
    {
        id: 'co-investigator-9',
        name: 'Co-Investigator 9',
        role: 'Co-Investigator',
        description: 'Description for co-investigator 9...',
        img: staff9,
        category: 'co-investigator'
    },
    {
        id: 'collaborator-10',
        name: 'Collaborator 10',
        role: 'Collaborator',
        description: 'Description for collaborator 10...',
        img: staff10,
        category: 'collaborator'
    },
    {
        id: 'collaborator-11',
        name: 'Collaborator 11',
        role: 'Collaborator',
        description: 'Description for collaborator 11...',
        img: staff11,
        category: 'collaborator'
    },
    {
        id: 'collaborator-12',
        name: 'Collaborator 12',
        role: 'Collaborator',
        description: 'Description for collaborator 12...',
        img: staff12,
        category: 'collaborator'
    }
];

function AboutUs() {
    return (
        <div className="subpage-main">
            <h1 className="titleabout">About Us</h1>
            <p>Lorem ipsum dolor sit amet. Ea voluptas sunt ut fugiat libero non quidem quod quo repellendus voluptas et dignissimos minima in doloribus deleniti...</p>
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
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/principal-investigators" element={<PrincipalInvestigators />} />
                    <Route path="/staff-trainees" element={<StaffTrainees />} />
                    <Route path="/co-investigators" element={<CoInvestigators />} />
                    <Route path="/collaborators" element={<Collaborators />} />
                    <Route path="/staff/:id" element={<StaffDetail />} />
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
                {staffData.filter((staff) => staff.category === 'principal').map((staff) => (
                    <Link to={`/about/staff/${staff.id}`} key={staff.id} className="card-link">
                        <div className="card">
                            <img src={staff.img} alt={staff.name} />
                            <div className="info">
                                <h3>{staff.name}</h3>
                                <h4>{staff.role}</h4>
                                <p>{staff.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function StaffTrainees() {
    return (
        <div className="subpage">
            <h1>Staff & Trainees</h1>
            <div className="cards-container">
                {staffData.filter((staff) => staff.category === 'staff').map((staff) => (
                    <Link to={`/about/staff/${staff.id}`} key={staff.id} className="card-link">
                        <div className="card">
                            <img src={staff.img} alt={staff.name} />
                            <div className="info">
                                <h3>{staff.name}</h3>
                                <h4>{staff.role}</h4>
                                <p>{staff.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function CoInvestigators() {
    return (
        <div className="subpage">
            <h1>Co-Investigators</h1>
            <div className="cards-container">
                {staffData.filter((staff) => staff.category === 'co-investigator').map((staff) => (
                    <Link to={`/about/staff/${staff.id}`} key={staff.id} className="card-link">
                        <div className="card">
                            <img src={staff.img} alt={staff.name} />
                            <div className="info">
                                <h3>{staff.name}</h3>
                                <h4>{staff.role}</h4>
                                <p>{staff.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function Collaborators() {
    return (
        <div className="subpage">
            <h1>Collaborators</h1>
            <div className="cards-container">
                {staffData.filter((staff) => staff.category === 'collaborator').map((staff) => (
                    <Link to={`/about/staff/${staff.id}`} key={staff.id} className="card-link">
                        <div className="card">
                            <img src={staff.img} alt={staff.name} />
                            <div className="info">
                                <h3>{staff.name}</h3>
                                <h4>{staff.role}</h4>
                                <p>{staff.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function StaffDetail() {
    const { id } = useParams();
    const staff = staffData.find((s) => s.id === id);

    if (!staff) {
        return <div>Staff not found</div>;
    }

    return (
        <div className="subpage">
            <h1>{staff.name}</h1>
            <img src={staff.img} alt={staff.name} />
            <h4>{staff.role}</h4>
            <p>{staff.description}</p>
        </div>
    );
}

export default About;
