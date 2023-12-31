import React from 'react'
import './footer.css'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Shanks</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com"><BiLogoLinkedin /></a>
        <a href="https://github.com"><AiFillGithub /></a>
      </div>
    </footer>
  )
}

export default Footer