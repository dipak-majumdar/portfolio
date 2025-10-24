import React from 'react'
import "../assets/styles/pages/home.sass"
import Hero from '../components/Hero';
import Projects from '../components/Projects';


function Home() {
  const title = "Dipak Majumdar <br /> <span>Software Engineer</span>";
  const description = "I'm a software engineer with a passion for building web applications.";
  const button = "Contact Me";
  const status = "Available for work";
  const t = {
    title: "Projects",
    button: "View All Projects"
  };
  const t2 = {
    limit: 3
  };
  return (
    <>
      <Hero title={title} description={description} button={button} status={status} />
      <Projects t={t} t2={t2} />
    </>
  )
}

export default Home