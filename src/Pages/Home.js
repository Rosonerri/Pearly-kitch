import React from 'react'
import AmazingMeal from '../AmazingMeal/AmazingMeal';
import Ourchef from '../Ourchef/Ourchef';
import "./Home.css"
import Mainhero from './Mainhero/Mainhero'
function Home() {
  return (
    <div>
      <Mainhero/>
      <AmazingMeal/>
      <Ourchef/>
    </div>
  )
}

export default Home;
