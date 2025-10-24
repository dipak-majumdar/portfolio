import React from 'react'
import "../assets/styles/pages/home.sass"
import Hero from '../components/Hero';
import Projects from '../components/Projects';


function Home({ home, projects }) {
  console.log("home", home);
  const title = "Dipak Majumdar <br /> <span>Software Engineer</span>";
  const description = "I'm a software engineer with a passion for building web applications.";
  const button = "Contact Me";
  const status = "Available for work";

  return (
    <>
      <Hero title={title} description={description} button={button} status={status} />
      <Projects section={home.projects} t={projects} limit={3} />
    </>
  )
}

export default Home