import React from 'react'
import "./header.css"
import logo from "../../assets/websitelogo.png"
import {LuUser} from "react-icons/lu"
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <nav className='headerContainer'>
        <Link to="/">
        <img src={logo} alt="" className='logoImg' />
        </Link>
          
        <div className='NavContainer'>
          
          <NavLink to="/home" className={({isActive})=> isActive ? "activeLinks":"links"}><span >HOME</span></NavLink> 
          <NavLink to="/journey" className={({isActive})=> isActive ? "activeLinks":"links"}><span>THE JOURNEY</span></NavLink>
          <NavLink to="/team" className={({isActive})=> isActive ? "activeLinks":"links"}><span >TEAM</span></NavLink>
          <NavLink to="/store" className={({isActive})=> isActive ? "activeLinks":"links"}><span>STORE</span></NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? "activeLinks":"links"}><span >CONTACT</span></NavLink>
        </div>
         
        <div className='UserWrapper'>
          <LuUser size={20}/>
          <span>GAGAN</span>
        </div>
          </nav> 
    </>
  )
}

export default Header
