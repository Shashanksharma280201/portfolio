import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Design and Redesign</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>A single page or a multi page web applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Experience (UX) Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface (UI) Design</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DESIGN */}

        <article className="service">
          <div className="service__head">
            <h3>Figma Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI Design (User Interface Design)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UX Design (User Experience Design)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>App Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Animation and Microinteractions</p>
            </li>
          </ul>
        </article>
        {/* END OF Figma DESIGN */}


        <article className="service">
          <div className="service__head">
            <h3>React Native</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Experience (UX) Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interaction Design</p>
            </li>
          </ul>
        </article>
        {/* END OF React Native */}


      </div>
    </section>
  )
}

export default services