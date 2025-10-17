import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import About from '../about/About';
import Skill from '../skills/Skill';
import Project from '../projects/Project';
import Experience from '../experience/Experience';
import Contact from '../contact/Contact';


function HomePage() {
  return (
    <>
      <Navbar />
      <section id="about"><About /></section>
      <section id="skills"><Skill /></section>
      <section id="projects"><Project /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
       <Footer />
    </>
  )
}

export default HomePage