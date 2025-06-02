import React from 'react';
import '../styles/Skills.css'

const Skills = () => {
  const skills = [
    {
      title: 'Programming Languages',
      details: 'Python, C++, JavaScript, HTML, CSS, SQL'
    },
    {
      title: 'Frameworks & Libraries',
      details: 'React.js, Node.js'
    },
    {
      title: 'DevOps & Cloud Platforms',
      details: 'AWS (Event Bus), Azure DevOps, Nintex Cloud Automation'
    },
    {
      title: 'Tools & Software',
      details: 'Git, GitHub, Visual Studio Code, SharePoint, Microsoft Office Suite'
    },
    {
      title: 'Languages',
      details: 'Fluent in Spanish'
    },
    {
      title: 'Leadership & Communication',
      details: 'Project management, community outreach, cross-functional team collaboration'
    },
    {
      title: 'Customer Service & Support',
      details: 'Apple technical support expertise, troubleshooting, customer relations'
    }
  ];

  return (
    <div className="skills-tab container my-5">
      <h2 className="text-center fw-bold mb-4">Full Skills Summary</h2>
      <ul className="list-unstyled">
        {skills.map((skill, idx) => (
          <li key={idx} className="skill-item mb-3">
            <strong>{skill.title}:</strong> {skill.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
