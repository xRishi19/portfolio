import React from 'react';
import Card from './ui/Card';
import './Education.css';

const Education = () => {
  return (
    <section className="section" id="education">
      <h2>Education</h2>
      <Card className="education-card">
        <div className="education-header">
          <div>
            <h3 className="education-university">Virginia Tech</h3>
            <p className="education-degree">B.S. in Computer Science</p>
          </div>
          <div className="education-details">
            <span className="education-timeline">Expected Graduation: Dec. 2026</span>
            <span className="education-gpa">GPA: 3.72/4.00</span>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Education;
