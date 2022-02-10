import React from 'react'
import './Listing.css'
import { Link } from 'react-router-dom'


const Listing = () => {
  return (
   <div className="listing-container">
       <div className="listing-title">Featured <b>Cars</b></div>
       <div className="listin-nav">
        <nav>
            <ul className="list-categories">
                <li className='category-item'><Link className='category-link' to='/view-all'>View All</Link></li>
                <li className='category-item'><Link className='category-link' to='/sedan'>Sedan</Link></li>
                <li className='category-item'><Link className='category-link' to='/suv'>SUV</Link></li>
                <li className='category-item'><Link className='category-link' to='/hatchback'>Hatchback</Link></li>
                <li className='category-item'><Link className='category-link' to='/coupe'>Coupe</Link></li>
            </ul>
        </nav>

       </div>
   </div>
  )
}

export default Listing