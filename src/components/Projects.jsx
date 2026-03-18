import React from 'react';
import Card from './ui/Card';
import './Projects.css';

const projects = [
  {
    title: "Auto Delivery UAV System",
    period: "November 2025 – Present",
    techStack: ["Python", "Flask", "ReactJS", "ROS2"],
    points: [
      "Built a Mission Control Center to manage 16 drones, integrating ROS2 and UWB for 3D telemetry and real-time health monitoring.",
      "Developed a Multi-Level Path Planning Pipeline using HPA* and Windowed EECBS to optimize routing and conflict resolution.",
      "Integrated a ReactJS procurement portal with an e-commerce-style checkout system for internal supply requests."
    ]
  },
  {
    title: "Image-Based Group Sentiment Classification",
    period: "January 2025 – May 2025",
    techStack: ["Python", "PyTorch", "Pandas", "NumPy"],
    points: [
      "Trained a novel computer vision model for sentiment analysis using PyTorch on a custom dataset of 600 images.",
      "Built a machine learning pipeline using fine-tuned YOLOv11 for detection and a pretrained EfficientNet model, increasing accuracy by 73% over the baseline."
    ]
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2>Technical Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card className="project-card" key={index}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-period">{project.period}</span>
            </div>
            
            <div className="project-tech">
              {project.techStack.map((tech, i) => (
                <span className="tech-badge" key={i}>{tech}</span>
              ))}
            </div>
            
            <ul className="project-points">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
