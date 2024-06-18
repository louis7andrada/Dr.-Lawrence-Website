import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <ul>
                        <h4><li><a href="/about">About Us</a></li></h4>
                        <li><a href="/about/principal-investigators">Principal Investigators</a></li>
                        <li><a href="/about/staff-trainees">Staff & Trainees</a></li>
                        <li><a href="/about/co-investigators">Co-Investigators</a></li>
                        <li><a href="/about/collaborators">Collaborators</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <h4><li><a href="/project-partners">Project Partners</a></li></h4>
                        <li><a href="/project-partners/project-partners-toronto">Project Partners Toronto</a></li>
                        <li><a href="/project-partners/project-partners-thunder-bay">Project Partners Thunder Bay</a></li>
                        <li><a href="/project-partners/other-name-2">Project Partners other name 2</a></li>
                        <li><a href="/project-partners/other-name-3">Project Partners other name 3</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <h4><li><a href="/research-activities">Research Activities</a></li></h4>
                        <li><a href="/research-activities/current-research-activities">Current Research Activities</a></li>
                        <li><a href="/research-activities/past-research-activities">Past Research Activities</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <h4><li><a href="/knowledge-mobilization">Knowledge Mobilization</a></li></h4>
                        <li><a href="/knowledge-mobilization/subpage-1">Subpage 1</a></li>
                        <li><a href="/knowledge-mobilization/subpage-2">Subpage 2</a></li>
                        <li><a href="/knowledge-mobilization/subpage-3">Subpage 3</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <h4><li><a href="/contact">Contact Us</a></li></h4>
                    </ul>
                </div>
            <div className="footer-column">
                <ul>
                    <h4><li><a href="/blog">Blog</a></li></h4>
                </ul>
            </div>
            </div>
            <div className="footer-bottom">
                <p>University of Toronto - Dr. Lawrence Website &copy; 2024. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
