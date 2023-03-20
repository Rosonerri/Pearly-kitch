import React from 'react';
import "./CoffeeSelection.css";
import ListItems from '../../../ListItems/ListItems';
import coffeeImage from "../../../images/coffee.jpg"
function CoffeeSelection() {

    const menuDataRight = [
        {
            title: "Low Carb CoffeeSelection",
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
        },

        {
            title: "Homederied-Tomatoes with Sources",
            description: "Peprica Tomatoes, paster paste",
            price: "23.99"
        },
        {
            
            title: " Spiced Chicken with Seasoned Onions",
            description: "Raw egg, salmon, Galic and natural onion",
            price: "11.59"
        }
    ]
  return (
    <div className='coffee-selection'>
      <h1 className='heading-secondary'>
        Coffee <span>Selection</span>
      </h1>
      <div className='grid-container'>
        <div>
            <img src={coffeeImage} alt="coffee-items"/>
        </div>
        <div>
            {menuDataRight.map((data,i) => (
                <ListItems description={data.description} title={data.title} price={data.price}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CoffeeSelection
