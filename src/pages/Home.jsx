import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Project from '../sections/Project'
import Marquee from '../sections/Marquee'
import CTA from '../components/CTA'
import Resume from '../sections/Resume'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Project/>
    <Marquee/>
    <Resume/>
    <CTA/>
    </>
  )
}

export default Home