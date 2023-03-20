import React from 'react'
import "./AddToCart.css"
import ListItems from '../../ListItems/ListItems'
import image1 from "../../images/Hamburger2.jpg"
import image2 from "../../images/coffee2.jpg"
import image3 from "../../images/Story.jpg"
import image4 from "../../images/coffee.jpg"
import image5 from "../../images/coffee2.jpg"
import image6 from "../../images/cupcakes.jpg"
import image7 from "../../images/logo.jpg"
import image8 from "../../images/Story.jpg"
function addToCart() {
    const menuDataLeft = [
        {
            title: "CHEESE BURGER",
            description: "From fine Wheat burger",
            price: "11.19",
            img:  image1,
        },
        {
            title: "VEGETERIAN PIZZA",
            description: "Mushroom ketchup & fries",
            price: "11.19",
            img:  image2,
        },

        {
            title: "CAROT SOUP",
            description: "Best ingredient, all fresh",
            price: "21.19",
            img:  image3,
        },
        {
            title: "PASTRIES WITH FRUITS",
            description: "Pasteries That hides strawberry inside",
            price: "13.19",
            img:  image4,
        },
    ]

    const menuDataRight = [
        {
            title: "CHEESE BURGER",
            description: "From fine Wheat burger",
            price: "11.19",
            img:  image5,
        },
        {
            title: "VEGETERIAN PIZZA",
            description: "Mushroom ketchup & fries",
            price: "11.19",
            img:  image6,
        },

        {
            title: "CAROT SOUP",
            description: "Best ingredient, all fresh",
            price: "21.19",
            img:  image7,
        },
        {
            title: "PASTRIES WITH FRUITS",
            description: "Pasteries That hides strawberry inside",
            price: "13.19",
            img:  image8,
        },
    ]
  return (
    <div className='addToCart'>
      <div className='addToCart-data'>
        <h1 className='heading-secondary'>
            <span>CLICK</span> TO ADD TO CART
        </h1>
        <div className='grid-container'>
        <div>
            {menuDataLeft.map((data,i) => (
            <ListItems description={data.description} title={data.title} price={data.price} itemImage={data.img}/>
            ))}
        </div>
        <div>
            {menuDataRight.map((data,i) => (
            <ListItems description={data.description} title={data.title} price={data.price} itemImage={data.img}/>
            ))}
        </div>
        </div>
        <div className='addToCart-section'>
        <h1 className='heading-secondary'>
            Are You <span>Done</span>?
        </h1>
        <button className='cta'>show cart & checkout</button>
        </div>
      </div>
    </div>
  )
}

export default addToCart
