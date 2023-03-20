import React from 'react'
import "./Breakfast.css"
import ListItems from '../../../ListItems/ListItems'
export default function Breakfast() {
  const menuDataLeft = [
    {
        description: "Egg Bennedict",
        title : "With either bacon or salmon",
        price: "34.44"
    }, 
    {
        description: "Enfold Famous Creep",
        title : "With fresh fruits and  either bacon or salmon",
        price: "24.99"
    },
    {
        description: "French Toasted Briochie",
        title : "With grill banana, either bacon or salmon",
        price: "11.99"
    }
  ]

  const menuDataRight = [
    {
        description: "Low Carb Breakfast",
        title : "With either bacon or salmon",
        price: "34.44"
    }, 
    {
        description: "Bagel",
        title : "With fresh fruits and  either bacon or salmon",
        price: "24.99"
    },
    {
        description: "French Pancakes",
        title : "With grill banana, either bacon or salmon",
        price: "14.99"
    }
  ]

  return (
    <div className='breakfast'>
        <h1 className='heading-secondary'>
            Break <span>Fast</span>
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
  )
}
