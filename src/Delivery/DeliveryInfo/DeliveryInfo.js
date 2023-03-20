import React from 'react'
import "./DeliveryInfo.css"
import {BsFillStarFill} from 'react-icons/bs'
function DeliveryInfo() {
  return (
    <div className='delivery-info'>
      <div className='delivery-content'>
        <div>
        <div className='bsfill'>
        <BsFillStarFill color='#c3512f'/>
        <h3>Order With <span>Woocommerce</span></h3>
        </div>
        <p>Add the WooCommerce plugin to any WordPress site
             and set up a new store in minutes. Get secure payments, 
             configurable shipping options, and more, out of the box – for free. 
             Whether you’re selling subscriptions, gym classes, or luxury cars, 
             WooCommerce is fully customizable to meet your needs. The WooCommerce 
             Marketplace has hundreds of vetted extensions, themes, and services to help you get started.</p>
        </div>
        <div>
        <div className='bsfill'>
        <BsFillStarFill color='#c3512f'/>
        <h3>Additional <span>Information</span></h3>
        </div>
        <p>Add the WooCommerce plugin to any WordPress site
             and set up a new store in minutes. Get secure payments, 
             configurable shipping options, and more, out of the box – for free. 
             Whether you’re selling subscriptions, gym classes, or luxury cars, 
             WooCommerce is fully customizable to meet your needs. The WooCommerce Marketplace 
             has hundreds of vetted extensions, themes, and services to help you get started.</p>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfo
