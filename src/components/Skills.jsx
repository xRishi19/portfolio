import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "C", "HTML", "CSS", "JavaScript", "MATLAB", "SQL"]
  },
  {
    title: "Libraries/Frameworks",
    skills: ["PyTorch", "Pandas", "Matplotlib", "scikit-learn", "NumPy", "Selenium", "OpenCV", "PIL", "ReactJS"]
  }
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <span className="skill-item" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
