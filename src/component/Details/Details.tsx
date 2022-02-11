import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './Details.css'
import { Link } from 'react-router-dom'
import Specification from './Specification'
import Exteriors from './Exteriors'
import Interiors from './Interiors'

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
    const [car_images,setCarimages] = useState<Array<any>>([])
    const [specifications,setSpecifications] = useState<Array<any>>([])
    const [exteriors,setExteriors] = useState<Array<any>>([])
    const [interiors,setInteriors] = useState<Array<any>>([])
    const [price,setPrice] = useState<Array<any>>([])

    useEffect(()=>{
        async function getdetails(){
            const response = await Axios.get(api+'/'+carID.carId,{auth:credentials})
            setCarname(response.data.specifications.name)
            setCarimages([response.data.exterior.image,response.data.interior.image1,response.data.interior.image2])
            setSpecifications([response.data.specifications.fuel_type,response.data.specifications.engine_cc,response.data.specifications.torque,response.data.specifications.acceleration,response.data.specifications.top_speed,response.data.specifications.variant])
            setExteriors([response.data.exterior.length,response.data.exterior.width,response.data.exterior.color])
            setInteriors([response.data.interior.text[0],response.data.interior.text[1]])
            setPrice(response.data.cost)
            console.log(response.data)
          }
        getdetails();
    },[handle])
    
    
    
  return (
    <div className='details-container'>
      <div className="details-flex-container">
      <div className="details-car-name">{car_name}</div>
      </div>
      <div className="details-flex-container">
          <div id='details-inner-flex1'><img src={car_images[0]} alt="No-image" /></div>
          <div id='details-inner-flex'>
          <div className="details-heading">
            Car <b>Specifications</b>
            <Specification specs={specifications} />
          </div>
          </div>
      </div> 
 
      <div className="details-flex-container">
          <div id='details-inner-flex1'><img src={car_images[1]} alt="No-image" /></div>
          <div id='details-inner-flex'>
          <div className="details-heading">
            <b>Exteriors</b>
            <Exteriors Exteriors={exteriors}/>
          </div>
          </div>
      </div> 

      <div className="details-flex-container">
          <div id='details-inner-flex1'><img src={car_images[2]} alt="No-image" /></div>
          <div id='details-inner-flex'>
          <div className="details-heading">
            <b>Interiors</b>
            <Interiors Interiors={interiors}/>
            <div className="price">Price:{price}akhs</div>
            <div className="book-wrap">
            <Link to={{pathname:'/booking', state:{carId: carID.carId}}} className='book'>Book Now</Link>
            </div>
      <div className='book-bottom'></div>
          </div>
        
            </div>
      </div>
        
    </div>
  )
}

export default Details