import React from 'react'
import { Link, Route } from 'react-router-dom'
import Arrow from './Arrow.png'
import Details from '../Details/Details'


const Carcard = (props:any) => {
  return (
    
            <div className="card">
                {/* <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/City-2017-2020/7259/Honda-City-2017-2020-SV-MT/1637828825177/front-left-side-47.jpg?impolicy=resize&imwidth=420" alt=":("  /> */}
                <img src={ props.details.image } alt="" />
                <div className="container">
                    <h4 className='card-car-name'><b>{ props.details.name }</b></h4>
                    <p className='card-car-price'>{props.details.price}akhs Onwards</p>
                    <Link to={{pathname:'/sedan/details', state:{carId:props.details.id} }} ><img src={ Arrow } alt="" className='arrow'/></Link>
                    
                </div>
                
            </div>
    
  )
}

export default Carcard
