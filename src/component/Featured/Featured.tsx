import React from 'react'

const Featured = () => {
  return (
    <div>
        <div className="listing-container">
       <div className="listing-title">Featured <b>Cars</b></div>
       <div className="listin-nav">
        <nav>
            <ul className="list-categories">
                <li className='category-item'><a className='category-link'  >View All</a></li>
                <li className='category-item'><a className='category-link' >Sedan</a></li>
                <li className='category-item'><a className='category-link'  >SUV</a></li>
                <li className='category-item'><a className='category-link' >Hatchback</a></li>
                <li className='category-item'><a className='category-link'  >Coupe</a></li>
            </ul>
        </nav>

       </div>
       
   </div>
    </div>
  )
}

export default Featured