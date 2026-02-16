import React from 'react'
import "../assets/styles/pages/home.sass"
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Education from '../components/Education';
import { useMetaTags } from '../hooks/useMetaTags';
import { pageSEO } from '../consts/seo';


function Home({ home, skills, education }) {
  useMetaTags(pageSEO.home);

  return (
    <>
      <Hero name={home.hero.name} title={home.hero.title} description={home.hero.description} button={home.hero.button} status={home.hero.status} />
      <About section={home.about} />
      <Experiences section={home.experiences} />
      <Projects section={home.projects} />
      <Skills section={home.skills} t={skills} />
      <Education section={education} />
      <About section={home.summary} />
    </>
  )
}

export default Home