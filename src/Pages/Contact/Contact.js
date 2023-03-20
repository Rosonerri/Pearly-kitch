import React from 'react'
import "./Contact.css"
import MenuImage from '../../MenuImage/MenuImage';
import bgImage from "../../images/contact.jpg"
import ContactForm from './ContactForm/ContactForm';
function Contact() {
  return (
    <div>
     <MenuImage bgImage={bgImage}  heading={[<span className='our-menu'>CONTACT</span>, <span className='menu'> US</span>]}
      text="Contact Us Anytime"/>
      <ContactForm/>
    </div>
  )
}

export default Contact;
