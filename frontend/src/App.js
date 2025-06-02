import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="bg-dark text-white text-center py-5 mb-4">
                    <h1>Joshua Panchana's Webfolio</h1>
                    <nav>
                        <Link className="btn btn-link text-white" to="/">Home</Link>
                        <Link className="btn btn-link text-white" to="/projects">Projects</Link>
                        <Link className="btn btn-link text-white" to="/about">About</Link>
                        <Link className="btn btn-link text-white" to="/skills">Skills</Link>
                        <Link className="btn btn-link text-white" to="/work-experience">Work Experience</Link>
                        <Link className="btn btn-link text-white" to="/contact">Contact</Link>
                    </nav>
                </header>
                <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/work-experience" element={<WorkExperience />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                </main>
                <footer className="text-center py-4 bg-dark text-white mt-5">
                    <p>&copy; 2025 Joshua Panchana Cedeño</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
