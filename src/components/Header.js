import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logoh from "../assets/images/Utoronto_coa.svg.png";

function Header() {
    return (
        <header>
            <div className="logoh"><Link to="/"><img src={logoh} alt="alt img"/></Link></div>
            <div className="title"><Link to="/">Dr. Lawrence Website</Link></div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/project-partners">Project Partners</Link></li>
                    <li><Link to="/research-activities">Research Activities</Link></li>
                    <li><Link to="/knowledge-mobilization">Knowledge Mobilization</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
