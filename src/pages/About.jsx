import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>Hello! I'm a passionate developer with experience in building modern web applications.</p>
          <p>My journey in software development started with a curiosity about how things work, which led me to pursue a career in this exciting field.</p>
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Responsive Design</li>
            <li>Git & Version Control</li>
          </ul>
        </div>
      </div>
      <a href="/" className="btn">Back to Home</a>
    </div>
  );
};

export default About;
