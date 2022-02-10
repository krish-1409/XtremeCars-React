import React, { useState } from 'react'
import Carcard from './Carcard'
import Axios from 'axios'
import { useEffect } from 'react'
import './Listcars.css'
import { Route } from 'react-router-dom'
import Details from '../Details/Details'

const Listcars = (props:any) => {
  const api = 'https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/cars'
  const credentials = {
      username: "Hasher",
      password: "L#(qc{f}TaJu4%4k"
  }
  const [cars,setCars] = useState<any[]>([])
  useEffect(()=>{
      async function getdata(){
        const response = await Axios.get(api+'/'+props.type,{ auth:credentials });
        setCars(response.data)
      }
      getdata();
  },[])


  console.log(cars)
  return (
    <div className='cars-container'>
    { 
        cars.map((car)=>(<Carcard details={car} />))
        
    }
    <Route path="/sedan/details" component={Details} />
    </div>
    
  )
}

export default Listcars