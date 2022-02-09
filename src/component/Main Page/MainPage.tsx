import React from 'react'
import "./MainPage.css"
import MainBkg from "./main.jpg";

const MainPage = () => {
  return (
    <div className="main-container">
        <img src={ MainBkg } alt=":("  />
        <div className="main-title">FIND YOUR DREAM CAR</div>
        <div className="search-bar-container">
            <div className="search-bar">
            <input className="search-box" type="text" placeholder='Enter car name'/>
            <button type='submit' className='search-button'>Search</button>
            </div>
        </div>

    </div>
  )
}

export default MainPage