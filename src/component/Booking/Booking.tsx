import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Axios from'axios'
import './Booking.css'

interface ParamTypes{
  handle:string
}
interface LocationTypes{
  state: object,
  carId: string,
  
}

const  Booking= () => {
  const { handle } = useParams<ParamTypes>()
  const location = useLocation<LocationTypes>()
  const carID = location.state.carId
  console.log(carID)

  const api = 'https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/cars/details'
    const credentials = {
      username: "Hasher",
      password: "L#(qc{f}TaJu4%4k"
  }

  const [image,setImage] = useState<string>('')
  const [name,setName] = useState<string>('')
  const [specifications,setSpecifications] = useState<Array<string>>([])
  useEffect(()=>{
    async function getdetails(){
        const response = await Axios.get(api+'/'+carID,{auth:credentials})
        
        console.log(response.data)
        setImage(response.data.exterior.image)
        setName(response.data.specifications.name)
        setSpecifications([response.data.specifications.fuel_type,response.data.specifications.engine_cc])
      }
    getdetails();
},[handle])
  
// console.log(img)
  return (
    <div className='booking-container'>
      <div className="booking-header"></div>
      <div className="booking-flex-container">
        <div className='booking-inner-flex1'>
          
          <div className="details-container">
          <div className='form-heading'>Car <b>Details</b></div>
          <div className="car-image"><img src={image} alt="" /></div>
          <div className="car-name">{name}</div>
          <div className="title">
            Fuel Type
        </div>
        <div className="title-value">
            {specifications[0]}
        </div>

        <div className="title">
            Engine
        </div>
        <div className="title-value">
            {specifications[1]}
        </div>
        <br/>
        <Link to={{pathname:'/details', state:{carId: carID}}} className='book'>View all Details</Link>
          </div>
        </div>
        <div className='booking-inner-flex2'>
          <div className="form-container">
            <div className='form-heading'>Booking <b>Details</b></div>
            <div className="booking-form">
              <form action="">
              <label htmlFor="cust_name">Name:</label><br/>
              <input type="text" placeholder='Enter Your Name' name='cust_name' required/><br/><br/>

              <label htmlFor="cust_num">Contact Number:</label><br/>
              <input type="number" placeholder='+91 9999999999' name="cust_num" required/><br/><br/>
                <label htmlFor="city">Select Your City</label><br/>
               <select name="city" id="city">

                 <option value="hyd">Hyderabad</option>
                 <option value="blr">Banglore</option>
                 <option value="maa">Chennai</option>

                 </select><br/><br/>

                 <input type="checkbox" name='terms' required/>
                 <label htmlFor="terms"> I have read the terms and conditions</label>
                 <br/>
                  <br/>
                 <input type="submit" value="submit" formAction='/confirmation'/><br/><br/>
              </form>
              
            </div>
          </div>
          
        </div>
        
      </div>
      {/* <Link to={{pathname:'/confirmation', state:{} }} > Confirm Booking</Link> */}
      
    </div>
  )
}

export default Booking