import React from 'react'
import {BsLinkedin , BsGithub , BsInstagram} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"> <BsGithub/></a>
        <a href="https://dribble.com"><BsInstagram/></a>
    </div>
  )
}

export default headerSocials