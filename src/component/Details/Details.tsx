import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './Details.css'
import { Link } from 'react-router-dom'

interface ParamTypes {
    handle: string
  }
interface LocationTypes{
    state: object,
    // CarID : object,
    carId : string
    // carName : string
}
const Details = () => {
    const { handle } = useParams<ParamTypes>()
    const location = useLocation<LocationTypes>()
    const  carID = location.state
    
    // console.log(carID.carId)
    const api = 'https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/cars/details'
    const credentials = {
      username: "Hasher",
      password: "L#(qc{f}TaJu4%4k"
  }

  
    const [details,setDetails] = useState<any>({})
    const [car_name,setCarname] = useState<any>('')
    useEffect(()=>{
        async function getdetails(){
            const response = await Axios.get(api+'/'+carID.carId,{auth:credentials})
            setDetails(response.data)
            setCarname(response.data.specifications.name)
            
        }
        getdetails();
    },[handle])
    console.log(details)
    
    
  return (
    <div className='details-container'>
      <div className="details-car-name">{car_name}</div>
      <div className="details-flex-container">
          <div id='details-inner-flex1'>One</div>
          <div id='details-inner-flex'>Two</div>
      </div> 
 
      <div className="details-flex-container">
          <div id='details-inner-flex1'>Three</div>
          <div id='details-inner-flex'>Four</div>
      </div> 

      <div className="details-flex-container">
          <div id='details-inner-flex1'>Five</div>
          <div id='details-inner-flex'><Link to={{pathname:'/booking', state:{carId: carID.carId}}} >Book Now</Link></div>
      </div>
        
    </div>
  )
}

export default Details