import React from 'react'
import "./LunchTime.css"
import ListItems from '../../../ListItems/ListItems'
function LunchTime() {
    const menuDataLeft = [
        {
            title: "Grilled Plantain with Pepper Source",
            description: "Plantain and plantain flavour",
            price: "9.99"
        },
        {
            
            title: "Scorched Egg with Plantain Source",
            description: "Raw egg, salmon, Galic and natural onion",
            price: "11.59"
        },
        {
            
            title: "Roasted Corn With Spices",
            description: "Made with the Finest corn baked egg",
            price: "11.29"
        }

    ]

    const menuDataRight = [
        {
            title: "Homederied-Tomatoes with Sources",
            description: "Peprica Tomatoes, paster paste",
            price: "23.99"
        },
        {
            
            title: " Spiced Chicken with Seasoned Onions",
            description: "Raw egg, salmon, Galic and natural onion",
            price: "11.59"
        },
        {
            
            title: "Nigerian Jollof Rice with Some Seasoned",
            description: "Made with the Finest corn baked egg",
            price: "11.29"
        }

    ]
  return (
    <div className='lunch-time'>
      <div className='heading-secondary'>
         <h1 className='heading-primary'>
            Lunch <span>Time</span>
         </h1>
         <div className='grid-container'>
         <div>
            {menuDataLeft.map((data,i) => (
                <ListItems description={data.description} title={data.title} price={data.price}/>
            ))}
         </div>

         <div>
            {menuDataRight.map((data,i) => (
                <ListItems description={data.description} title={data.title} price={data.price}/>
            ))}
         </div>
         </div>
      </div>
    </div>
  )
}

export default LunchTime
