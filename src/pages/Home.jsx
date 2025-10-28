import React from 'react'
import "../assets/styles/pages/home.sass"
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Contacts from '../components/Contacts';


function Home({ home, skills }) {
  return (
    <>
      <Hero title={home.hero.title} description={home.hero.description} button={home.hero.button} status={home.hero.status} />
      <Projects section={home.projects} />
      <Skills section={home.skills} t={skills} />
      <Experiences section={home.experiences} />
      <About section={home.about} />
      <Contacts section={home.contacts}/>
    </>
  )
}

export default Home