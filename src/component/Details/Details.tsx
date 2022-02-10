import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
interface ParamTypes {
    handle: string
  }
interface LocationTypes{
    state: object,
    CarID : object,
    carId : string
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


    const [details,setDetails] = useState<object>({})

    useEffect(()=>{
        async function getdetails(){
            const response = await Axios.get(api+'/'+carID.carId,{auth:credentials})
            setDetails(response.data)
        }
        getdetails();
    },[handle])
    console.log(details)
    // const api_call = Axios.get(api+'/'+carID.carId,{ auth:credentials }).then((res)=>console.log(res))
  return (
    <div>
      
      
        
    </div>
  )
}

export default Details