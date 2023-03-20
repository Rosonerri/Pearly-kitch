import React from 'react'
import "./MenuImage.css"
function MenuImage(props) {
  return (
    <div className='container' style={{background: `url(${props.bgImage}) no-repeat bottom center/cover`, height: "80vh", position: "relative", zIndex:"-1", width: "100vw"}}>
       <div className='menu-content'>
        <h1 className='menu-heading'>{props.heading}</h1>
        <p className='text-menu'>{props.text}</p>
       </div>
    </div>
  )
}

export default MenuImage;
