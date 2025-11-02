import React from 'react'
import "../assets/styles/pages/home.sass"
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Education from '../components/Education';
import Contacts from '../components/Contacts';


function Home({ home, skills, education }) {
  return (
    <>
      <Hero name={home.hero.name} title={home.hero.title} description={home.hero.description} button={home.hero.button} status={home.hero.status} />
      <About section={home.about} />
      <Projects section={home.projects} />
      <Skills section={home.skills} t={skills} />
      <Experiences section={home.experiences} />
      <Education section={education} />
      <About section={home.summary} />
    </>
  )
}

export default Home