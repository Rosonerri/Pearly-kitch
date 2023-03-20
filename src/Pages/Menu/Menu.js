import React from 'react'
import MenuImage from '../../MenuImage/MenuImage';
import "./Menu.css";
import bgImage from "../../images/Story.jpg"
import MenuOfTheDay from '../../MenuOfTheDay/MenuOfTheDay';
import Breakfast from './Breakfast/Breakfast';
import LunchTime from './LunchTime/LunchTime';
import CoffeeSelection from './CoffeeSelection/CoffeeSelection';
import Beverages from './Beverages/Beverages';
function Menu() {
  return (
    <div>
      <MenuImage
      bgImage={bgImage}
      heading={[<span className='our-menu'>Our</span>, <span className='menu'> Menu</span>]}
      text="Everything we have to offer at a glace"
      />
      <MenuOfTheDay/>
      <Breakfast/>
      <LunchTime/>
      <CoffeeSelection/>
      <Beverages/>
    </div>
  )
}

export default Menu;
