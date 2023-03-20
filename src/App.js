import './App.css';
import Hero from './Components/Hero/Hero';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home';
import Menu from './Pages/Menu/Menu';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Hero/Footer/Footer';
import Delivery from './Delivery/Delivery';
function App() {
  return (
    <div className="app">
      <Hero/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/menu' element = {<Menu/>} />
        <Route path='/delivery' element = {<Delivery/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
