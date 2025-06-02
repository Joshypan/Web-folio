import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const travelPhotos = [
    'chicago.jpeg', 'cowboy.png', 'familia.jpeg', 'feid_run.jpeg', 'josh_ecu.jpeg', 'shpe2023.jpeg',
    'sky.jpeg', 'pr_sunset.jpeg', 'pr_street.jpeg', 'iguana.jpeg', 'josh_pig.jpeg', 'racecar.jpeg',
    'xmas_mex.jpeg', 'central_park.jpeg', 'bad_bunny.jpeg', 'goodyear_selfie.jpeg'
  ];

  return (
    <div className="home-page container py-5">
      <section className="hero-section text-center mb-5">
        <img
          src={`${process.env.PUBLIC_URL}/josh_shpe.png`}
          alt="Joshua Panchana"
          className="rounded-circle shadow-lg mb-3"
          style={{ width: '180px' }}
        />
        <h1 className="display-4 fw-bold">Joshua Panchana Cedeño</h1>
        <p className="lead text-muted">Aspiring Software/Web Developer | University of Akron Alumnus</p>
        <p className="fs-5 mx-auto" style={{ maxWidth: '700px' }}>
          Passionate about building secure and user-friendly software. With a background in full-stack development,
          automation, and technical support, I bring a balance of tech expertise and human-centered design.
        </p>
        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          <a
            href="https://drive.google.com/file/d/1IWl__bhRUe07E0Xi78Q3SCSaVIPR2Wfs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-4"
          >
            View Resume
          </a>
          <Link to="/projects" className="btn btn-outline-secondary px-4">Explore Projects</Link>
          <Link to="/contact" className="btn btn-outline-dark px-4">Contact Me</Link>

        </div>
      </section>

      <section className="career-objective-section text-center mb-5">
        <h2 className="fw-bold">Career Objective</h2>
        <p className="fs-6 mx-auto" style={{ maxWidth: '800px' }}>
          Seeking a full-time software development role starting May 2025. I want to apply my experience in web and software
          engineering within an innovative team. Open to relocation and eager to contribute to meaningful, tech-driven solutions.
        </p>
      </section>

      <section className="education-section text-center mb-5">
        <h2 className="fw-bold">Education</h2>
        <p className="fs-5"><strong>The University of Akron</strong> — B.S. in Computer Science</p>
        <p>Minor: Applied Mathematics and Spanish | GPA: 3.39</p>
      </section>

      <section className="experience-summary text-center mb-5">
        <h2 className="fw-bold">Professional Summary</h2>
        <p className="mx-auto" style={{ maxWidth: '800px' }}>
          I’ve developed automation tools at Goodyear and provided high-level technical support at Apple. My experience
          spans scripting, user experience, and team collaboration. I bring both problem-solving and people skills to the table.
        </p>
        <Link to="/work-experience" className="btn btn-dark mt-3">View Full Experience</Link>
      </section>

      <section className="leadership-summary text-center mb-5">
        <h2 className="fw-bold">Leadership & Involvement</h2>
        <ul className="list-unstyled">
          <li><strong>SHPE:</strong> VP, led career workshops and student-industry networking events</li>
          <li><strong>UA Latinos:</strong> Revived membership, organized award-winning campus events</li>
          <li><strong>Dean’s Team:</strong> Represented College of Engineering to prospective students</li>
        </ul>
        <Link to="/work-experience" className="btn btn-outline-dark mt-3">More Leadership</Link>
      </section>

      <section className="photo-booth-section text-center">
        <h2 className="fw-bold">Photo Booth</h2>
        <p className="text-muted">Snapshots from my journey</p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {travelPhotos.map((file, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/${file}`}
              alt={file.replace(/[-_]/g, ' ').replace(/\.\w+$/, '')}
              className="rounded shadow-sm"
              style={{ width: '140px', height: 'auto' }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
