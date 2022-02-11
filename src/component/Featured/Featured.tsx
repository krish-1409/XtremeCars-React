import React, { useState } from 'react'
import './Featured.css'
import Axios from 'axios'
import { useEffect } from 'react'
import Listcars from '../Listing/Listcars'
import { Link } from 'react-router-dom'


const Featured = () => {
    const [featured,setFeatured] = useState([])
    const api = 'https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/cars/'
    const credentials ={
        username: "Hasher",
        password: "L#(qc{f}TaJu4%4k"
    }

    useEffect(()=>{
        const fetchdata = async()=>{
            const response = await Axios.get(api,{auth:credentials});
            setFeatured(response.data.slice(0,4))
        };
        fetchdata();
    },[])

  return (
    <div>
        <div className="listing-container">
       <div className="listing-title">Featured <b>Cars</b></div>
       <div className="listin-nav feature-container">
           <div>
        <nav>
            <ul className="list-categories">
                <li className='category-item' ><a className='category-link' style={{fontWeight:'bolder'}} >Featured</a></li>
                <li className='category-item'><a className='category-link' >Just Launched</a></li>
                <li className='category-item'><a className='category-link'  >Upcoming</a></li>
                <li className='category-item view-all-button'><Link className='category-link' to={{pathname:'/view-all'}} >View all {'->'}</Link></li>
            </ul>
        </nav>
        </div>
        {/* <div><Link to={{pathname:'/view-all'}} >View all<img src={ Arrow } alt="" className='view-arrow'/></Link></div> */}
       </div>

       
    <div>
        <Listcars cars={featured} />
    </div>
       
   </div>
    </div>
  )
}

export default Featured