import React from 'react'
import "./MainPage.css"
import MainBkg from "./main.jpg";

const MainPage = () => {
  return (
    <div className="main-container">
        <img src={ MainBkg } alt=":("  />
        <div className="main-title">FIND YOUR DREAM CAR</div>
        <div className="search-bar">Search Bar</div>

    </div>
  )
}

export default MainPage