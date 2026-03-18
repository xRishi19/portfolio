import React from 'react';
import Card from './ui/Card';
import './Experience.css';

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "RTX",
    period: "June 2025 – Present",
    location: "Cedar Rapids, IA",
    points: [
      "Implemented a modified Dijkstra's algorithm in C++ using real-time wind data, reducing aircraft re-routing computation time by 72%.",
      "Designed a CI/CD pipeline architecture using custom Docker containers and Python scripts for linting and packaging, currently used by 120+ engineers.",
      "Modernized 10 major projects by automating the migration of requirements from IBM Doors and SVN to GitLab with a Python script, cutting migration time by 90%.",
      "Built a full-stack application tab for workflow automation featuring Python multiprocessing for parallel execution and live status reporting."
    ]
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Mind, Music, Machine Lab (Virginia Tech)",
    period: "August 2024 – May 2025",
    location: "Blacksburg, VA",
    points: [
      "Engineered a Python and ReactJS full-stack application for participant-AI agent communication, which improved trial times by 63%.",
      "Developed a hands-free interaction system using custom speech-to-text and text-to-speech programs via Python APIs.",
      "Designed a MySQL and ReactJS data collection interface to capture and structure research results for streamlined analysis."
    ]
  },
  {
    role: "Undergraduate Teaching Assistant",
    company: "Virginia Tech Department of Computer Science",
    period: "August 2024 – May 2025",
    location: "Blacksburg, VA",
    points: [
      "Assisted in teaching introductory Python to over 750 students, including proctoring quizzes and grading.",
      "Provided 10+ hours of weekly 1-on-1 support through virtual and in-person office hours."
    ]
  },
  {
    role: "Embedded Software Engineer",
    company: "BOLT Virginia Tech",
    period: "February 2024 – October 2024",
    location: "Blacksburg, VA",
    points: [
      "Developed a super bike performance simulation using C and CAN messaging for validation testing.",
      "Created a Python-based wireless data transmission script using XBee modules, extending real-time monitoring range from 2 to 28 miles.",
      "Led weekly workshops on Git and Agile methodologies to improve project management and code maintainability."
    ]
  }
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2>Professional Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <Card className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-company-loc">
                    <span className="experience-company">{exp.company}</span>
                    <span className="dot-separator">•</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                <div className="experience-period">{exp.period}</div>
              </div>
              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
