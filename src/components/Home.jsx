import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm a passionate developer creating amazing web experiences.</p>
      <div className="cta-buttons">
        <a href="/about" className="btn">Learn More About Me</a>
        <a href="#contact" className="btn btn-outline">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
