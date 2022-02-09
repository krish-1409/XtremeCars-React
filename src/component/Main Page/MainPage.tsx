import React from 'react'
import "./MainPage.css"
import MainBkg from "./main.jpg";

const MainPage = () => {
  return (
    <div className="main-container">
        <img src={ MainBkg } alt=":("  />
        <div className="main-title">FIND YOUR DREAM CAR</div>
        <div className="search-bar"><input type="text" placeholder='Enter car name'/><button>Search</button></div>

    </div>
  )
}

export default MainPage