import React from 'react'
import ListItems from '../ListItems/ListItems'
import "./MenuOfTheDay.css"
import image1 from "../../src/images/coffee.jpg";
import image2 from "../../src/images/coffee2.jpg";



const menuData = [
    {
        title: "Sesame crusted scotch fillet",
        description: "With honeyed pedro Ximenez source and potatoes paster",
        price: "7.88",
        img: image1,
    },
    {
        title: "Sesame crusted scotch fillet",
        description: "With honeyed pedro Ximenez source and potatoes paster",
        price: "7.88",
        img: image2,
    }
]
function MenuOfTheDay() {
  return (
    <div className='section'>
        <div className='menu-day'>
        <h1 className='heading-secondary'>
            <span>Menu</span> of the day
        </h1>
        {menuData.map((data, i) => (
      <ListItems title={data.title} 
      description={data.description} 
      price={data.price} 
      itemImage={data.img}/>
        ))}
        </div>

    </div>
  )
}

export default MenuOfTheDay;
