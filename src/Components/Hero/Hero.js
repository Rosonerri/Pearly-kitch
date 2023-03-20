import React, {useState} from 'react'
import "./Hero.css"
import { FaBars, FaTimes} from 'react-icons/fa'
import logo from "../../images/logo.jpg"
import { Link, NavLink } from 'react-router-dom'
function Hero() {

const [click, setClick] = useState(false);
const handleClick = () => {
    setClick(!click)
}

  return (
    <div className='header'>
      <div className='container'>
        <div className='nav-bar'>
            <div className='nav'>
            <h3>Pearly's Kitch</h3>
            <Link to="/">
        <img src={logo} alt="logo"/>
            </Link>
            </div>
            <ul className={click ? "nav-menu active":"nav-menu"}>
                <li onClick={handleClick}>
                <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li onClick={handleClick}>
                <NavLink className="nav-link" to="/menu">Menu</NavLink>
                </li>
                <li onClick={handleClick}>
                <NavLink className="nav-link" to="/delivery">Delivery</NavLink>
                </li>
                <li onClick={handleClick}>
                <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li onClick={handleClick}>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li onClick={handleClick}>
                    <button className='cta'>Order Now</button>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style = {{color:'#dc143c'}}/>):(<FaBars  size={20} style={{color:'#dc143c'}}/>)}


            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
