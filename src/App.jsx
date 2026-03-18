import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="container">
      <Hero />
      <Experience />
      <Projects />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default App;
