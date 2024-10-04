import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css'; // Add custom styling in this file

const Home = () => {
    return (
    <div className="home-page my-5">
        {/* Hero Section */}
        <div className="hero-section text-center">
            <img
                src={`${process.env.PUBLIC_URL}/josh_shpe.png`}
                alt="Joshua Panchana"
                className="profile-photo"
            />
            <h1 className="hero-title">Joshua Panchana</h1>
            <p className="hero-subtitle">
                Aspiring Software Developer | Graduating May 2025 | Willing to Travel & Relocate
            </p>
            <p className="hero-text">
                Hi, I'm Joshua Panchana, a passionate software developer with experience in full-stack development, DevOps, and automation. 
                I'm currently pursuing a Bachelor of Computer Science at the University of Akron, with an expected graduation in May 2025. 
                I’m seeking full-time opportunities in software development where I can apply my skills and continue growing professionally.
            </p>
            <div className="cta-buttons">
                <a
                href="https://drive.google.com/file/d/1gLsfp3BvFbUyjt0XfkoAyjfJeed79kxe/view?usp=sharing"
                className="btn btn-primary mx-2"
                target="_blank"
                rel="noopener noreferrer"
                >
                View Resume
                </a>
                <Link to="/projects" className="btn btn-secondary mx-2">Explore Projects</Link>
                <Link to="/contact" className="btn btn-outline-primary mx-2">Contact Me</Link>
            </div>
        </div>

        <div className="career-objective-section my-5">
            <h2 className="text-center">Career Objective</h2>
            <p>
                I am looking for a full-time software development position starting May 2025, where I can apply my knowledge in software engineering, 
                DevOps, and automation. I am open to opportunities across the country and internationally, and am willing to travel or relocate 
                to work in a challenging and stimulating environment that encourages growth and learning.
            </p>
        </div>

        <div className="education-section my-5 text-center">
            <h2 className="text-center">Education</h2>
            <p><strong>The University of Akron</strong> | Akron, OH</p>
            <p>Bachelor of Computer Science | GPA: 3.5/4.0 | Expected Graduation: May 2025</p>        
        </div>

        <div className="skills-section my-5 text-center">
            <h2>Technical Expertise</h2>
            <p>Proficient in Python, C++, and JavaScript, with hands-on experience in web development, cloud platforms, and customer support.</p>
            <Link to="/skills" className="btn btn-secondary mt-2">Explore Full Skill Set</Link>
        </div>

        <div className="experience-summary my-4 text-center">
            <h2>Professional Summary</h2>
            <p>
                With experience in software development and technical support, I have worked with leading companies like Goodyear and Apple. 
                At Goodyear, I contributed to global digital platforms and developed Python-based automation solutions. At Apple, I honed my customer 
                service skills and technical proficiency, working with diverse teams to resolve device issues and enhance customer satisfaction.
            </p>
            <Link to="/work-experience" className="btn btn-primary mt-2">View Full Experience</Link>
        </div>

        <div className="leadership-summary my-5 text-center">
            <h2>Leadership & Involvement</h2>
            <li>
                <strong>Society of Hispanic Professional Engineers (SHPE):</strong> Led outreach and partnerships as Vice President, 
                fostering career development opportunities for Hispanic students in STEM.
            </li>
            <li>
                <strong>UA Latinos:</strong> Developed a vibrant community on campus, expanding membership and earning 
                a LIFE Award for Diversity and Inclusion. Currently serving as Treasurer, managing funds for cultural events.
            </li>
            <li>
                <strong>Dean’s Team Member:</strong> Represented the College of Engineering at University of Akron, supporting 
                outreach and guiding prospective students.
            </li>
            <Link to="/work-experience" className="btn btn-primary mt-3">View My Full Experience</Link>
            </div>

        <div className="personal-section my-5 text-center">
            <h2 className="text-center">A Bit About Me</h2>
            <p className="text-center">
                Outside of coding, I’m passionate about fitness, exploring new cuisines, and traveling. I’ve visited Puerto Rico, Mexico, Ecuador, NYC, Miami, Salt Lake City, Utah, and Chicago. I enjoy discovering new places and challenging myself with new experiences.
            </p>
        </div>

        {/* Photo Booth */}
        <div className="photo-booth-section my-5 text-center">
            <h2>Photo Booth</h2>
            <p>Check out my travel adventures:</p>
            <div className="photo-booth-gallery">
                <img src={`${process.env.PUBLIC_URL}/chicago.jpeg`} alt="chicago sign" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/cowboy.png`} alt="Joshua wearing a cowboy outfit" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/familia.jpeg`} alt="Joshua at the SHPE convention" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/feid_run.jpeg`} alt="Feid running across stage" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/josh_ecu.jpeg`} alt="Joshua at the SHPE convention with an Ecuadorian flag" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/shpe2023.jpeg`} alt="2023 SHPE emblem" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/sky.jpeg`} alt="Joshua at the Chicago skyline" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/pr_sunset.jpeg`} alt="Puerto Rico sunset" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/pr_street.jpeg`} alt="Calle De La Fortaleza" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/iguana.jpeg`} alt="iguana" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/josh_pig.jpeg`} alt="Josh and a pigeon" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/racecar.jpeg`} alt="racecar next to Josh" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/xmas_mex.jpeg`} alt="Christmas tree in Mexico" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/central_park.jpeg`} alt="Central park at dusk" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/bad_bunny.jpeg`} alt="Bad Bunny concert entry" className="travel-photo" />
                <img src={`${process.env.PUBLIC_URL}/goodyear_selfie.jpeg`} alt="Selfie in front of Goodyear HQ" className="travel-photo" />
            </div>
        </div>
    </div>
  );
};

export default Home;