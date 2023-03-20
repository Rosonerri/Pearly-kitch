import React from 'react'
import "./Beverages.css"
import ListItems from '../../../ListItems/ListItems'
function Beverages() {
    const menuDataLeft = [
        {
            description: "7up",
            price: "2.99",
        },
        {
            description: "Root Beer",
            price: "3.99",
        },
        {
            description: "Apple Juice",
            price: "1.90",
        },
        {
            description: "Orange Juice",
            price: "2.00",
        },
    ]
    const menuDataMiddle = [
        {
            description: "Coke",
            price: "2.99",
        },
        {
            description: "Pepsi",
            price: "3.99",
        },
        {
            description: "Red Bull",
            price: "4.90",
        },
        {
            description: "Bitter Lemon",
            price: "2.99",
        },
    ]

    const menuDataRight = [
        {
            description: "Crust",
            price: "2.90",
        },
        {
            description: "Crystal Light",
            price: "1.99",
        },
        {
            description: "Banana Shake",
            price: "1.95",
        },
        {
            description: "Apple Shake",
            price: "3.00",
        },
    ]
       
    
  return (
    <div className='beverages'>
        <h1 className='heading-secondary'>
        Non Alcoholic <span>Beverages</span>
        </h1>
        <div className='grid-container'>
            <div>
                {menuDataLeft.map((data,i) => (
                    <ListItems description={data.description} price={data.price}/>
                ))}
            </div>
            <div>
                {menuDataMiddle.map((data,i) => (
                    <ListItems description={data.description} price={data.price}/>
                ))}
            </div>
            <div>
                {menuDataRight.map((data,i) => (
                    <ListItems description={data.description} price={data.price}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Beverages
