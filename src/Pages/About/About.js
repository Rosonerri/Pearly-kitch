import React from 'react'
import MenuImage from '../../MenuImage/MenuImage'
import bgImage from "../../images/Tomatoes.jpg"
import "./About.css"
import AboutUs from './AboutUs/AboutUs'
import AboutData from './AboutData/AboutData'
import Gallery from './Gallery/Gallery'
export default function About() {
  return (
    <div>
      <MenuImage bgImage={bgImage}  heading={[<span className='our-menu'>About Us</span>, <span className='ampersand'> & </span>,<span className='menuu'>Photo Gallery</span> ]}
      text="Take a look at the place, the people and the food..."/>
      <AboutUs/>
      <AboutData/>
      <Gallery/>
    </div>
  )
}
