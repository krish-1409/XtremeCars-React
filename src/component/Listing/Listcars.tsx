import React, { useState } from 'react'
import Carcard from './Carcard'
import './Listcars.css'

const Listcars = (props:any) => {
 
  
  const cars: any[] = props.cars

  console.log(cars)
  return (
    <div className='cars-container'>
    { 
        cars.map((car)=>(<Carcard details={car} />))
        
    }

    </div>
    
  )
}

export default Listcars