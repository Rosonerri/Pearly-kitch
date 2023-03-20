import React from 'react'
import "./Gallery.css"
import image1 from "../../../images/Chef.jpg"
import image2 from "../../../images/Tomatoes.jpg"
import image3 from "../../../images/Tomatoes2.jpg"
import image4 from "../../../images/cupcakes.jpg"
import image5 from "../../../images/Story.jpg"
import image6 from "../../../images/Hamburger.jpg"
import image7 from "../../../images/Hamburger2.jpg"
import image8 from "../../../images/coffee.jpg"
import image9 from "../../../images/coffee2.jpg"
import image10 from "../../../images/Team.jpg"
function Gallery() {
  return (
    <div className='gallery'>
        <figure className='gallery-item1'>
          <img src={image1} alt="Gallery image1" className='gallery-img'/>
        </figure>

        <figure className='gallery-item2'>
          <img src={image2} alt="Gallery image2" className='gallery-img'/>
        </figure>

        <figure className='gallery-item3'>
          <img src={image3} alt="Gallery image3" className='gallery-img'/>
        </figure>

        <figure className='gallery-item4'>
          <img src={image4} alt="Gallery image4" className='gallery-img'/>
        </figure>

        <figure className='gallery-item5'>
          <img src={image5} alt="Gallery image5" className='gallery-img'/>
        </figure>

        <figure className='gallery-item6'>
          <img src={image6} alt="Gallery image6" className='gallery-img'/>
        </figure>

        <figure className='gallery-item7'>
          <img src={image7} alt="Gallery image7" className='gallery-img'/>
        </figure>

        <figure className='gallery-item8'>
          <img src={image8} alt="Gallery image8" className='gallery-img'/>
        </figure>

        <figure className='gallery-item9'>
          <img src={image9} alt="Gallery image9" className='gallery-img'/>
        </figure>

        <figure className='gallery-item10'>
          <img src={image10} alt="Gallery image10" className='gallery-img'/>
        </figure>
    </div>
  )
}

export default Gallery
