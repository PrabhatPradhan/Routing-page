import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (

    <>
    <div id='nav-main'>
      <div id='logo'>
      <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
      <h2>GeekFoods</h2>
      </div>
      <ul id='nav'>
        <li id='nav-home'><Link to="/">Home</Link>
        </li>
        <li><Link to="/quote">Quote</Link></li>
        <li><Link to="/resturant">Resturant</Link></li>
        <li><Link to="/Foods">Foods</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
     
      <button id='nav-btn'>Get started</button>
    </div>
    </>
  )
}

export default Navbar

