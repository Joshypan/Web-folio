import React from 'react';
import '../WorkExperience.css';

const WorkExperience = () => {
    return (
        <div className="my-5">
            <h2 className="text-center">Professional Experience</h2>
            
            <div className="experience-item my-4 goodyear">
                <img src={`${process.env.PUBLIC_URL}/wing.png`} alt="Goodyear Logo" className="company-logo"/>
                <h3>Global IT Digital Intern</h3>
                <p className="text-muted">Goodyear Tire and Rubber Co. | Akron, OH | May 2023 - Dec 2023</p>
                <ul>
                    <li>
                        Supported the global expansion of a digital signage platform to over 50 locations, improving internal communications and user engagement.
                    </li>
                    <li>
                        Completed 10 bug fixes and user stories, enhancing platform stability and user satisfaction.
                    </li>
                    <li>
                        Designed 5 SharePoint sites, including 3 with automated workflows, using Nintex Cloud Automation to streamline processes.
                    </li>
                    <li>
                        Engaged with business units to assess automation needs and provide solutions that met operational requirements.
                    </li>
                </ul>
            </div>

            <div className="experience-item my-4 goodyear">
                <img src={`${process.env.PUBLIC_URL}/wing.png`} alt="Goodyear Logo" className="company-logo"/>
                <h3>API Programming Intern</h3>
                <p className="text-muted">Goodyear Tire and Rubber Co. | Akron, OH | May 2024 - August 2024</p>
                <ul>
                    <li>
                        Developed Python-based actions for transferring metadata across platforms, utilizing AWS Event Bus to streamline event execution.
                    </li>
                    <li>
                        Created unit tests to ensure robust and reliable functionality, significantly contributing to the health check system.
                    </li>
                    <li>
                        Integrated DevOps practices into development workflows, enhancing automation and code deployment efficiency.
                    </li>
                </ul>
            </div>

            <div className="experience-item my-4 apple">
                <img src={`${process.env.PUBLIC_URL}/apple.png`} alt="Apple Logo" className="company-logo"/>
                <h3>Technical Specialist</h3>
                <p className="text-muted">Apple | Akron, OH | January 2022 - July 2023, March 2024 - Present</p>
                <ul>
                    <li>
                        Delivered excellent technical support and troubleshooting for Apple customers, ensuring quick resolution of device issues.
                    </li>
                    <li>
                        Maintained organized and accurate records of customer interactions and resolutions to support future troubleshooting.
                    </li>
                    <li>
                        Stayed current with Apple’s latest products and troubleshooting techniques, providing knowledgeable assistance to customers.
                    </li>
                </ul>
            </div>

            <div className="experience-item my-4 apple">
                <img src={`${process.env.PUBLIC_URL}/apple.png`} alt="Apple Logo" className="company-logo"/>
                <h3>Genius Admin</h3>
                <p className="text-muted">Apple | Akron, OH | August 2024 </p>
                <ul>
                    <li>
                        Managed customer cases, delivering high-level technical support and ensuring customer satisfaction with repair solutions.
                    </li>
                    <li>
                        Followed Apple's rigorous security and privacy guidelines to protect customer data during diagnostics and repairs.
                    </li>
                    <li>
                        Provided guidance and mentorship to new team members, enhancing the technical team’s overall service quality.
                    </li>
                </ul>
            </div>

            <div className="experience-item my-4">
                <h3>Leadership and Organizations</h3>

                <div className="experience-item my-4 university-akron">
                    <img src={`${process.env.PUBLIC_URL}/shpe.png`} alt="University of Akron Logo" className="company-logo"/>
                    <h4>Co-President, Society of Hispanic Professional Engineers (SHPE)</h4>
                    <p className="text-muted">University of Akron | May 2023 – Present</p>
                    <ul>
                        <li>
                            Established partnerships and organized community outreach initiatives, increasing SHPE’s presence and support for Hispanic students in STEM.
                        </li>
                        <li>
                            Represented the chapter at national conferences, fostering connections and advocating for Hispanic representation.
                        </li>
                    </ul>
                </div>

                <div className="experience-item my-4 university-akron">
                    <img src={`${process.env.PUBLIC_URL}/uoa.png`} alt="University of Akron Logo" className="company-logo"/>
                    <h4>Dean's Team, College of Engineering and Polymer Science</h4>
                    <p className="text-muted">University of Akron | January 2024 – Present</p>
                    <ul>
                        <li>
                            Guided prospective students and their families through tours, providing insights into the engineering programs and campus life.
                        </li>
                        <li>
                            Assisted faculty during college events, ensuring smooth operations and a welcoming experience for visitors.
                        </li>
                        <li>
                            Represented the College of Engineering and Polymer Science, promoting its programs and supporting outreach efforts.
                        </li>
                    </ul>
                </div>

                <div className="experience-item my-4 university-akron">
                    <img src={`${process.env.PUBLIC_URL}/sun.jpeg`} alt="University of Akron Logo" className="company-logo"/>
                    <h4>Treasurer, UA Latinos</h4>
                    <p className="text-muted">University of Akron | Fall 2024 – Present</p>
                    <ul>
                        <li>
                            Manage funds to support cultural events, ensuring that activities are well-funded and impactful for the community.
                        </li>
                        <li>
                            Oversee budgeting and financial planning for events, helping to maintain sustainability and accountability.
                        </li>
                        <li>
                            Collaborate with other team members to organize events that celebrate Latino culture and engage the student body.
                        </li>
                    </ul>
                </div>

                <div className="experience-item my-4 university-akron">
                    <img src={`${process.env.PUBLIC_URL}/sun.jpeg`} alt="University of Akron Logo" className="company-logo"/>
                    <h4>President, UA Latinos</h4>
                    <p className="text-muted">September 2021 – May 2023</p>
                    <ul>
                        <li>
                            Expanded the organization from 10 to 30 members, creating a thriving community of Latino students on campus.
                        </li>
                        <li>
                            Organized large events and meetings to enhance campus awareness of Latin and Hispanic culture, educating peers and faculty.
                        </li>
                        <li>
                            Represented UA Latinos at various panels and the Black, Brown, and Beyond Male Summit 2022, advocating for Hispanic voices in academic settings.
                        </li>
                        <li>
                            Coordinated closely with the executive board, hosting bi-weekly meetings, assigning tasks, and ensuring successful event planning.
                        </li>
                        <li>
                            Fostered relationships with campus directors and recruited new members, furthering the organization’s growth and influence.
                        </li>
                        <li>
                            Led the organization to win the LIFE Award for Diversity and Inclusion in Fall 2022, marking a significant achievement in promoting inclusivity on campus.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
