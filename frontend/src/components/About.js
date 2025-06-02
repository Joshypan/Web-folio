import React from 'react';
import '../App.css';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page container py-5">
      <section className="text-center mb-5">
        <h2 className="fw-bold">About Me</h2>
        <p className="fs-5 mx-auto" style={{ maxWidth: '800px' }}>
          Hello! I'm <strong>Joshua Panchana Cedeño</strong>, a Computer Science graduate from the University of Akron, where I also minored in Applied Mathematics and Spanish (GPA: 3.4).
          Throughout my college career, I took pride in not only my academics but also my involvement on campus and in leadership roles.
        </p>
      </section>

      <section className="text-center mb-5">
        <h3 className="fw-bold">Leadership & Impact</h3>
        <p className="fs-6 mx-auto" style={{ maxWidth: '800px' }}>
          As <strong>President of UA Latinos</strong>, I tripled our membership and organized impactful cultural events, earning us a LIFE Award for Diversity in 2023.
          Later, as <strong>Vice President of SHPE</strong>, I helped drive collaboration with companies like Goodyear and Nestle while supporting underrepresented students in STEM.
          I also joined the <strong>Akronauts</strong> Rocket Design Team, contributing to GUI development for testing systems.
        </p>
      </section>

      <section className="text-center mb-5">
        <h3 className="fw-bold">What Drives Me</h3>
        <p className="fs-6 mx-auto" style={{ maxWidth: '800px' }}>
          I love applying what I learn through personal projects that blend creativity and code. This website is one of those—built from the ground up to showcase my journey, passions, and potential.
        </p>
      </section>

      <section className="text-center">
        <p className="text-muted">Thank you for visiting my site!</p>
      </section>
    </div>
  );
};

export default About;
