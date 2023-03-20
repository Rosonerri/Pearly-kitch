import React from 'react';
import "./ContactForm.css";
import image1 from "../../../images/Chef.jpg"
function ContactForm() {
  return (
    <div className='contact-form'>
      <div className='contact-container'>
        <div>
        <h1 className='heading-primary'>
            Get in <span>Touch</span>
        </h1>
        <p>Operations are an essential part of the eatery
             business and require experience and <span>understanding </span>
             to manage them. You should be able to compare food costs,
             labor costs, gross margins, and profits.</p>
             <img src={image1} alt='Chef' className='contactform-img'/>
             <p className='form-para'>This one is a no-brainer: a famous eatery is known for its food, 
                and great tasting food is a vital <span>feature</span> of a good eatery. 
                 No matter what you do, if the food at your eatery is not great, 
                 people will not return. This is why <span>delicious</span> food is a key element 
                 of a successful eatery</p>
                 <p>Eateries are often known for a particular <span>signature</span> dish that draws customers to the joint.</p>
        </div>
        <div>
        <h1 className='heading-primary'>
            Mail <span>Us</span>
       </h1>
       <div className='contact-form'>
       <form>
        <div className='input-form'>
        <div className='input'>
         <h3>Name</h3>
        <input type='input' placeholder="Enter Your Full Name"/>
        </div>
       <div>
       <h3>Email</h3>
        <input type='input' placeholder="Enter Your Email"/>
       </div>
        </div>
        <div className='subject'>
         <h3>Subject</h3>
        <input type='input'/>
        </div>
        <div className='message'>
         <h3>Message</h3>
        <textarea type='input'/>
        </div>
        <button className='cta'>Submit</button>
       </form>
       </div>
       
        </div>
      </div>
    </div>
  )
}

export default ContactForm
