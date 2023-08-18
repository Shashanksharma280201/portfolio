import React from 'react'
import './about.css'
import ME from '../../assets/IMG_7661 (2).jpg'
import { FaUniversity } from 'react-icons/fa'
import { MdSportsBasketball } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaUniversity className='about__icon' />
              <h5>PES UNIVERSITY</h5>
              <small>B.tech in ECE</small>
            </article>

            <article className="about__card">
              <MdSportsBasketball className='about__icon' />
              <h5>Sports</h5>
              <small>Basketball</small><br />
              <small>Cricket</small><br />
              <small>Swimming</small>
            </article>

            <article className="about__card">
              <GiSkills className='about__icon' />
              <h5>Expirence In</h5>
              <small>Web Development</small><br />
              <small>Matlab</small><br />
              <small>Cadence</small><br />
              <small>React-Native</small>
            </article>

          </div>

          <p>Every website holds significant meaning and requires a substantial
            amount of dedicated effort to successfully achieve its objectives, regardless of the 
            specific goals it aims to fulfill. I am here to collaborate with you and contribute 
            to the realization of those goals. Below, you will find a glimpse of the projects 
            I have been involved in and an overview of my skill set. Let's work together to make
            your website aspirations a reality.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About