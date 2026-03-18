import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section hero">
      <div className="hero-content">
        <h1 className="hero-title">Rishiraj Singh</h1>
        <p className="hero-subtitle">B.S. in Computer Science | Virginia Tech</p>
        <div className="hero-contact">
          <p>rishisingh@vt.edu</p>
        </div>
        <p className="hero-intro" style={{ marginBottom: '2rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.7' }}>
          I'm a passionate Computer Science student at Virginia Tech with hands-on experience in full-stack development, machine learning, and embedded systems. I enjoy building efficient solutions, from orchestrating multi-drone path planning pipelines to developing hands-free AI interaction systems. Always eager to tackle new challenges and learn cutting-edge technologies.
        </p>
        <div className="hero-links">
          <a href="https://www.linkedin.com/in/rishisingh19" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Resume
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src="/profile.jpg" alt="Rishiraj Singh" className="hero-image" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
        <div className="hero-image-placeholder" style={{ display: 'none' }}>
          <span>Profile Picture</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
