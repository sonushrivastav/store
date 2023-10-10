import React, { useState } from 'react'
import "./header.css"
import logo from "../../assets/websitelogo.png"
import {LuUser} from "react-icons/lu"
import { Link, NavLink } from 'react-router-dom'
import {RxHamburgerMenu} from "react-icons/rx"
const Header = () => {
  const [toggle, setToggle] = useState(false)
  

  const togglemenu = () => {
    setToggle(!toggle)
  }

  const closeMobileNav = () => {
    setToggle(false);
  };
  return (
    <>
      <nav className={`headerContainer ${toggle ? 'active' : ''}`}>
        <img src={logo} alt="" className='logoImg' />
          
     
        
        <div className={`NavContainer ${toggle ? "active" :""}`}>
          <NavLink to="/home" onClick={closeMobileNav} className={({ isActive }) => isActive ? "activeLinks" : "links"}><span >HOME</span></NavLink> 
          
          <NavLink to="/journey" onClick={closeMobileNav} className={({ isActive }) => isActive ? "activeLinks" : "links"}><span>THE JOURNEY</span></NavLink>
          
          <NavLink to="/team" onClick={closeMobileNav} className={({ isActive }) => isActive ? "activeLinks" : "links"}><span >TEAM</span></NavLink>
          
          <NavLink to="/store" onClick={closeMobileNav} className={({ isActive }) => isActive ? "activeLinks" : "links"}><span>STORE</span></NavLink>
          
          <NavLink to="/contact" onClick={closeMobileNav} className={({isActive})=> isActive ? "activeLinks":"links"}><span >CONTACT</span></NavLink>
        </div>

        {/* Display mobile navigation links when toggled */}
        {toggle && (
          <div className={`mobileNav ${toggle ? 'active' : ''}`}>
            <NavLink to="/home" onClick={closeMobileNav}><span>HOME</span></NavLink>
            <NavLink to="/journey" onClick={closeMobileNav}><span>THE JOURNEY</span></NavLink>
            <NavLink to="/team" onClick={closeMobileNav}><span>TEAM</span></NavLink>
            <NavLink to="/store" onClick={closeMobileNav}><span>STORE</span></NavLink>
            <NavLink to="/contact" onClick={closeMobileNav}><span>CONTACT</span></NavLink>
          </div>
        )}
         
        <div className={`UserWrapper ${toggle ? 'active' : ''}`}>
          <LuUser size={20}/>
          <span>GAGAN</span>
        </div>

        <RxHamburgerMenu size={29} style={{cursor:"pointer"}} onClick={togglemenu} className='hamburger'/>
          </nav> 
    </>
  )
}

export default Header
