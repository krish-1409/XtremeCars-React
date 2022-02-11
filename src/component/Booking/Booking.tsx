import React from 'react'
import { Link } from 'react-router-dom'

const  Booking= () => {
  return (
    <div><Link to={{pathname:'/confirmation', state:{} }} > Confirm Booking</Link></div>
  )
}

export default Booking