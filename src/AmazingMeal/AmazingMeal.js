import React, {useState} from 'react'
import "./AmazingMeal.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../../pearly-kitch/src/images/coffee.jpg";
import image2 from "../../../pearly-kitch/src/images/coffee2.jpg";
import image3 from "../../../pearly-kitch/src/images/Hamburger.jpg";
import image4 from "../../../pearly-kitch/src/images/Hamburger2.jpg";
import image5 from "../../../pearly-kitch/src/images/Story.jpg";
import image6 from "../../../pearly-kitch/src/images/cupcakes.jpg";
import Slider from 'react-slick'
import {BsFillStarFill} from 'react-icons/bs'


function AmazingMeal() {
    const [items] = useState([
        {id:1, url:image1},
        {id:2, url:image2},
        {id:3, url:image3},
        {id:4, url:image4},
        {id:5, url:image5},
       {id:6, url:image6},
    ])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
  return (
    <div className='section'>
    <div className='container'>
        <div className='amazing-container'>
            <div className='amazing-carousel'>
                <div>
                    <Slider {...settings}>
                        {items.map(item => (
                            <div key={item.id}>
                            <img src={item.url} alt="carousel pic"/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='amazing-content'>
                <h2 className='heading-secondary'>
                    Amazing meals <span className='ampersand'>&#38;</span><br/>
                    <span className='break'>
                        Great <br/> Entertainment
                    </span>
                </h2>
                <h4>We Hope To see You Soon!</h4>
                <p>Import the slider component in your React component file. For example,
                     to import the Slider component from react-slick: To install a slider 
                     component in your React project, you can use an existing slider library,
                      such as react-slick or react-carousel. Here are the general steps to follow
                      <br/>
                      <br/>
                      Import the slider component in your React component file. For example,
                     to import the Slider component from react-slick: To install a slider 
                     component in your React project, you can use an existing slider library,
                      </p>
                      <blockquote>
                      Import the slider component in your React component file. For example
                      </blockquote>
            </div>
    </div>
    <div className='amazing-card-container'>
        <div className='amazing-card amazing-card-left'>
        <img src={image1} alt='coffee1'/>
            <div className='amazing-card-content'>
            <div className='amazing-card-title'>
            <BsFillStarFill color='#c3512f'/>
            <h3>The Best <span>Ingredient</span></h3>
        </div>
        <p>
        Import the slider component in your React component file. For example
        </p>
            </div>
        </div>
        <div className='amazing-card amazing-card-right'>
        <img src={image1} alt='coffee'/>
            <div className='amazing-card-content'>
            <div className='amazing-card-title'>
            <BsFillStarFill color='#c3512f'/>
            <h3>The Best <span>Reservation</span></h3>
        </div>
        <p>
        Import the slider component in your React component file. For example
        </p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
};

export default AmazingMeal;
