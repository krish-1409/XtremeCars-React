import React from 'react'
import { Link, Route } from 'react-router-dom'
import Arrow from './Arrow.png'



const Carcard = (props:any) => {
  return (
    
            <div className="card">
                <img src={ props.details.image } alt="" />
                <div className="container">
                    <h4 className='card-car-name'><b>{ props.details.name }</b></h4>
                    <p className='card-car-price'>{props.details.price}akhs Onwards</p>
                    <Link to={{pathname:'/details', state:{carId:props.details.id} }} ><img src={ Arrow } alt="" className='arrow'/></Link>
                    
                </div>
                
            </div>
    
  )
}

export default Carcard
