import React from 'react'
import { Link } from 'react-router-dom'

const Header2 = () => {
  return (
    <div>

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

export default Header2