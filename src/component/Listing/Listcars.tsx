import React, { useState } from 'react'
import Carcard from './Carcard'


const Listcars = (props:any) => {
 
  
  const cars: any[] = props.cars

  
  return (
    <div className='cars-container'>
    { 
        cars.map((car)=>(<Carcard details={car} />))
        
    }

    </div>
    
  )
}

export default Listcars