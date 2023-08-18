import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { IoCall } from 'react-icons/io5'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q4xjf3s', 'template_7p4x3sn', form.current, 'user_RyDtAgZ5PP0gXIx5u')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email-id</h4>
            <a href="mailto:shashank.sharma.280201@gmail.com" target='_blank'>Send a Mail</a>
          </article>

          <article className="contact__option">
            <IoCall className='contact__option-icon' />
            <h4>Phone Number</h4>
            <a href="tel:+91 9591678076" target='_blank'>Call</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=9591678076" target='_blank'>Whatsapp</a>
          </article>

        </div>
        {/* END OF Contact Option */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact