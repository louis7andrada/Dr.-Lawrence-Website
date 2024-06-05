import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProjectPartners from './pages/ProjectPartners';
import ResearchActivities from './pages/ResearchActivities';
import KnowledgeMobilization from './pages/KnowledgeMobilization';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about/*" element={<About />} />
                    <Route path="/project-partners/*" element={<ProjectPartners />} />
                    <Route path="/research-activities/*" element={<ResearchActivities />} />
                    <Route path="/knowledge-mobilization/*" element={<KnowledgeMobilization />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
