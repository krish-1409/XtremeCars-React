import React from 'react'

const Interiors = (props:any) => {
    const interior = props.Interiors
  return (
    <div>
        
        <ul>
            <li className='title-value'>{interior[0]}</li>
            <li className='title-value'>{interior[1]}</li>
        </ul>
    </div>
  )
}

export default Interiors