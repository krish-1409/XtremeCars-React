import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
import Logo from "./Union.png"


const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title"> 
      
          <div style={{ flexGrow: '1' }}>
          <Link className='top-bar-links' to="/">
            <img src={ Logo } alt="/" className='logo'/><span style={{ fontWeight: 'lighter'}}>XTREME</span><span style={{ fontWeight:'bolder' }}>CARS</span>
          </Link>
          </div>
          <div style={{ flexGrow: '2' }} className='top-bar-center'>
          <div className='top-bar-links' >
            NEW CARS
          </div>
          <div className='top-bar-links' >
            USED CARS
          </div>
          </div>
          <div style={{ flexGrow: '1' }}>
          <Link className='top-bar-links' to="/">
            MY PROFILE
          </Link>
          </div>
      
      </div>
      <div className="tab-items-container-main">
      <div className="tab-items-container">
      <Link className="tab-item" to="/firstTab">
            SEDAN
          </Link>
          <Link className="tab-item" to="/secondTab">
            SUV
          </Link>
          <Link className="tab-item" to="/thirdTab">
            HATCHBACK
          </Link>
          <Link className="tab-item" to="/fourthTab">
            COUPE
          </Link>
          
      </div>
  
      <div className='type' style={{ color:'#A0A0A0', fontSize:'15px', marginTop:"0.6%" }}>BODY TYPE</div>
      </div>
      

      
    </div>
  )
}

export default Header