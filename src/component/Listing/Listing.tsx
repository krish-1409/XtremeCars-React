import React, { useEffect, useState } from 'react'
import './Listing.css'
import  Axios  from 'axios'
import Listcars from './Listcars'

const Listing = (props:any) => {

    const api = 'https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/cars/'
    const credentials ={
        username: "Hasher",
        password: "L#(qc{f}TaJu4%4k"
    }

    const [reqCars,setReqCars] = useState<Array<any>>([])
    const [activeFilter,setFilter] = useState(props.activeFilter)

    useEffect(()=>{
        const fetchdata = async()=>{
            const response = await Axios.get(api,{auth:credentials});
            setReqCars(response.data)
        };
        fetchdata();
    },[])

    const handleClick = (filter:string)=>{
        if(props.page==='home'){
            setFilter(filter)
            return
        }

        const fetchdata = async ()=>{
            const response = filter==='view-all'?await Axios.get(api,{auth:credentials}):await Axios.get(api+filter,{auth:credentials})
            setReqCars(response.data)
            setFilter(filter)
        }
        fetchdata();
    }



  return (
   <div className="listing-container">
       <div className="listing-title">Featured <b>Cars</b></div>
       <div className="listin-nav">
        <nav>
            <ul className="list-categories">
                <li className='category-item'><a className='category-link'  onClick={()=>handleClick('view-all')}>View All</a></li>
                <li className='category-item'><a className='category-link' onClick={()=>handleClick('sedan')}>Sedan</a></li>
                <li className='category-item'><a className='category-link'  onClick={()=>handleClick('SUV')}>SUV</a></li>
                <li className='category-item'><a className='category-link' onClick={()=>handleClick('hatchback')}>Hatchback</a></li>
                <li className='category-item'><a className='category-link'  onClick={()=>handleClick('coupe')}>Coupe</a></li>
            </ul>
        </nav>

       </div>
       <Listcars cars={reqCars} />
   </div>
  )
}

export default Listing