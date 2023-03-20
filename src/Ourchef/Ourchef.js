import React from 'react'
import "./Ourchef.css"
function Ourchef() {
  return (
    <div>
      <div className="chef-img">
      <div className="container">
      <div className="chef-content">
      <h1 className="heading-secondary">
        Our <span>Chef</span>
      </h1>
      <p className='text-white'>Award winning meals, delivered by an amazing team </p>
      </div>
      </div>
      </div>
      {/*Chef Info */}
      <div className='grid-container py-md'>
          <div className='grid-item chef-info'>
            <h3 className='heading-tertiary'>
              Marcus <span>Cole</span>
            </h3>
            <h4>
              Grill Chef
            </h4>
            <p>Good chef can understand your interest, taste,
               preferences and cook for you while great chef 
               can have it cooked from other chef/s who may not be a good one.
               </p>
          </div>
         
          <div className='grid-item chef-info'>
            <h3 className='heading-tertiary'>
              Kate <span>Maxwel</span>
            </h3>
            <h4>
              Executive Chef
            </h4>
            <p>Good chef can understand your interest, taste,
               preferences and cook for you while great chef 
               can have it cooked from other chef/s who may not be a good one.
               </p>
          </div>

          <div className='grid-item chef-info'>
            <h3 className='heading-tertiary'>
              Lara <span>Lang</span>
            </h3>
            <h4>
              Chef De Cousine
            </h4>
            <p>Good chef can understand your interest, taste,
               preferences and cook for you while great chef 
               can have it cooked from other chef/s who may not be a good one.
               </p>
          </div>

          <div className='grid-item chef-info'>
            <h3 className='heading-tertiary'>
              Peter<span> Wright</span>
            </h3>
            <h4>
              Source Chef
            </h4>
            <p>Good chef can understand your interest, taste,
               preferences and cook for you while great chef 
               can have it cooked from other chef/s who may not be a good one.
               </p>
      </div>
      </div>

         
      </div>
  )
}

export default Ourchef;
