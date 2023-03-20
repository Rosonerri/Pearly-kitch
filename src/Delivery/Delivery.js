import React from 'react'
import "./Delivery.css"
import MenuImage from '../MenuImage/MenuImage'
import bgImage from "../../src/images/cupcakes.jpg"
import DeliveryInfo from './DeliveryInfo/DeliveryInfo'
import AddToCart from './AddToCart/AddToCart'
function Delivery() {
  return (
    <div>
      <MenuImage bgImage={bgImage}  heading={[<span className='our-menu'>EAT AT</span>, <span className='menu'> HOME</span>]}
      text="Delivery Available Mon-Fri, 9:00-17:00 WAT"/>
      <DeliveryInfo/>
      <AddToCart/>
    </div>
  )
}

export default Delivery
