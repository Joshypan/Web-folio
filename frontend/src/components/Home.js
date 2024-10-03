import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css'; // Add custom styling in this file

const Home = () => {
  return (
    <div className="home-page my-5">
      {/* Hero Section */}
      <div className="hero-section text-center">
        <img
          src={`${process.env.PUBLIC_URL}/Josh_shpe.png`}
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

      {/* Career Objective Section */}
      <div className="career-objective-section my-5">
        <h2 className="text-center">Career Objective</h2>
        <p>
          I am looking for a full-time software development position starting May 2025, where I can apply my knowledge in software engineering, 
          DevOps, and automation. I am open to opportunities across the country and internationally, and am willing to travel or relocate 
          to work in a challenging and stimulating environment that encourages growth and learning.
        </p>
      </div>

      {/* Education Section */}
      <div className="education-section my-5">
        <h2 className="text-center">Education</h2>
        <p><strong>The University of Akron</strong> | Akron, OH</p>
        <p>Bachelor of Computer Science | GPA: 3.5/4.0 | Expected Graduation: May 2025</p>
      </div>

      {/* Skills Section */}
      <div className="skills-section my-5">
        <h2 className="text-center">Skills Summary</h2>
        <ul className="skills-list">
          <li><strong>Languages:</strong> C++, JavaScript, Python, SQL, React.js, HTML, CSS</li>
          <li><strong>Tools & Platforms:</strong> Git, GitHub, Azure DevOps, Nintex Cloud Automation, SharePoint</li>
          <li><strong>Software:</strong> Visual Studio Code, MySQL, MAMP/WAMP</li>
          <li><strong>Languages:</strong> Fluent in Spanish</li>
        </ul>
      </div>

      {/* Professional Experiences */}
      <div className="experience-section my-5">
        <h2 className="text-center">Professional Experience</h2>
        <div className="experience-item">
          <h3>API Programming Intern | Goodyear Tire and Rubber Co. (May 2024 - August 2024)</h3>
          <ul>
            <li>Developed Python actions to manage metadata across platforms using AWS Event Bus.</li>
            <li>Enhanced program health checks by designing and implementing test functions.</li>
            <li>Integrated DevOps practices into workflows, contributing to better automation and reliability.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Global IT Digital Intern | Goodyear Tire and Rubber Co. (May 2023 - Dec 2023)</h3>
          <ul>
            <li>Expanded digital signage platform to over 50 global locations.</li>
            <li>Completed 10 bug fixes and user stories, doubling performance metrics in 3 months.</li>
            <li>Developed 5 SharePoint sites, 3 of which had automated workflows, in 5 sprints.</li>
            <li>Enhanced platform responsiveness and user interaction using React.js.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Technical Specialist | Apple (January 2022 - Present)</h3>
          <ul>
            <li>Managed day-to-day operations and provided technical support to the Genius Bar team.</li>
            <li>Documented customer interactions and troubleshooting steps for future reference.</li>
            <li>Stayed up-to-date on the latest Apple devices and troubleshooting techniques.</li>
          </ul>
        </div>
      </div>

      {/* Leadership and Organizations */}
      <div className="leadership-section my-5">
        <h2 className="text-center">Organizations & Leadership</h2>
        <div className="leadership-item">
          <h3>President | Society of Hispanic Professional Engineers (SHPE)</h3>
          <ul>
            <li>Led discussions with companies to create partnerships and professional opportunities for members.</li>
            <li>Organized workshops on resume building, networking, and career development for members.</li>
            <li>Invited STEM professionals to share career insights with the SHPE community.</li>
          </ul>
        </div>
        <div className="leadership-item">
          <h3>Treasurer | UA Latinos</h3>
          <ul>
            <li>Managed the budget to fund cultural events, providing entertainment and supplies for students.</li>
            <li>Helped organize and run events to celebrate Latino heritage and culture at the University of Akron.</li>
          </ul>
        </div>
      </div>

      {/* Personal Touch */}
      <div className="personal-section my-5">
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