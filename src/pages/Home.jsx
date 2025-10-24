import React from 'react'
import "../assets/styles/pages/home.sass"
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

function Home({ home, projects, skills }) {
  return (
    <>
      <Hero title={home.hero.title} description={home.hero.description} button={home.hero.button} status={home.hero.status} />
      <Projects section={home.projects} t={projects} limit={3} />
      <Skills section={home.skills} t={skills} />
    </>
  )
}

export default Home