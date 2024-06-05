import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Pdf from 'react-pdf-js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/KnowledgeMobilization.css';

// Import PDF files
import pdf1 from '../assets/pdfs-posters/COHS Halifax_FABIO.pdf';
import pdf2 from '../assets/pdfs-posters/COHS Halifax_FABIO.pdf';
import pdf3 from '../assets/pdfs-posters/COHS Halifax_FABIO.pdf';
import logo4 from "../assets/images/7ah4lwcm.png";

function KnowledgeMobilization() {
    return (
        <div>
            <Header />
            <main className="knowledge-mobilization-content">
                <div className="knowledge-submenu">
                    <ul>
                        <li><Link to="/knowledge-mobilization">Knowledge Mobilization</Link></li>
                        <li><Link to="/knowledge-mobilization/subpage-1">Subpage 1</Link></li>
                        <li><Link to="/knowledge-mobilization/subpage-2">Subpage 2</Link></li>
                        <li><Link to="/knowledge-mobilization/subpage-3">Subpage 3</Link></li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<KnowledgeMobilizationHome />} />
                    <Route path="/subpage-1" element={<KnowledgeMobilizationSubpage1 />} />
                    <Route path="/subpage-2" element={<KnowledgeMobilizationSubpage2 />} />
                    <Route path="/subpage-3" element={<KnowledgeMobilizationSubpage3 />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

function KnowledgeMobilizationHome() {
    return (
        <div className="subpage4">
            <h1>Knowledge Mobilization</h1>
            <p>
                Our knowledge mobilization activities include conferences, posters, and various other methods to share our findings and engage with the
                community. We aim to disseminate our research in ways that are accessible and impactful, ensuring that our work reaches those who can benefit
                from it the most. Stay tuned for updates on our latest activities and events.
            </p>
            <div className="logo4">
                <img src={logo4} alt="alt img" />
            </div>
        </div>
    );
}

function KnowledgeMobilizationSubpage1() {
    return (
        <div className="subpage4">
            <h1>Subpage 1</h1>
            <p>
                Our knowledge mobilization activities include conferences, posters, and various other methods to share our findings and engage with the
                community. We aim to disseminate our research in ways that are accessible and impactful, ensuring that our work reaches those who can benefit
                from it the most. Stay tuned for updates on our latest activities and events.
            </p>
            <div className="pdf-list">
                <ul>
                    <li>
                        <a href={pdf1} target="_blank" rel="noopener noreferrer">PDF Document 1</a>
                        <div className="pdf-preview">
                            <Pdf file={pdf1} page={1} scale={0.25} />
                        </div>
                    </li>
                    <li>
                        <a href={pdf2} target="_blank" rel="noopener noreferrer">PDF Document 2</a>
                        <div className="pdf-preview">
                            <Pdf file={pdf2} page={1} scale={0.25} />
                        </div>
                    </li>
                    <li>
                        <a href={pdf3} target="_blank" rel="noopener noreferrer">PDF Document 3</a>
                        <div className="pdf-preview">
                            <Pdf file={pdf3} page={1} scale={0.25} />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function KnowledgeMobilizationSubpage2() {
    return (
        <div className="subpage4">
            <h1>Subpage 2</h1>
            <p>
                Our knowledge mobilization activities include conferences, posters, and various other methods to share our findings and engage with the
                community. We aim to disseminate our research in ways that are accessible and impactful, ensuring that our work reaches those who can benefit
                from it the most. Stay tuned for updates on our latest activities and events.
            </p>
            <div className="pdf-list">
                <ul>
                    <li>
                        <a href={pdf1} target="_blank" rel="noopener noreferrer">PDF Document 1</a>
                        <div className="pdf-preview">
                            <Pdf file={pdf1} page={1} scale={0.25} />
                        </div>
                    </li>
                    <li>
                        <a href={pdf2} target="_blank" rel="noopener noreferrer">PDF Document 2</a>
                        <div className="pdf-preview">
                            <Pdf file={pdf2} page={1} scale={0.25} />
                        </div>
                    </li>
                    <li>
                        <a href={pdf3} target="_blank" rel="noopener noreferrer">PDF Document 3</a>
                        <div className="pdf-preview">
                            <Pdf file={pdf3} page={1} scale={0.25} />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function KnowledgeMobilizationSubpage3() {
    return (
        <div className="subpage4">
            <h1>Subpage 3</h1>
            <p>
                Our knowledge mobilization activities include conferences, posters, and various other methods to share our findings and engage with the
                community. We aim to disseminate our research in ways that are accessible and impactful, ensuring that our work reaches those who can benefit
                from it the most. Stay tuned for updates on our latest activities and events.
            </p>
            <div className="pdf-list">
                <ul>
                    <li>
                        <a href={pdf1} target="_blank" rel="noopener noreferrer">PDF Document 1</a>
                        <div className="pdf-preview">
                            <Pdf file={pdf1} page={1} scale={0.25} />
                        </div>
                    </li>
                    <li>
                        <a href={pdf2} target="_blank" rel="noopener noreferrer">PDF Document 2</a>
                        <div className="pdf-preview">
                            <Pdf file={pdf2} page={1} scale={0.25} />
                        </div>
                    </li>
                    <li>
                        <a href={pdf3} target="_blank" rel="noopener noreferrer">PDF Document 3</a>
                        <div className="pdf-preview">
                            <Pdf file={pdf3} page={1} scale={0.25} />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default KnowledgeMobilization;
