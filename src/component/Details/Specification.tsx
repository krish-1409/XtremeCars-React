import React from 'react'
import './right-flex.css'

const Specification = (props:any) => {
    const specs = props.specs
    const variants: Array<string> = props.variant
    
  return (
    <div>
        <div className="title">
            Fuel Type
        </div>
        <div className="title-value">
            {specs[0]}
        </div>

        <div className="title">
            Engine
        </div>
        <div className="title-value">
            {specs[1]}
        </div>

        <div className="title">
            Torque
        </div>
        <div className="title-value">
            {specs[2]}
        </div>

        <div className="title">
            Acceleration
        </div>
        <div className="title-value">
            {specs[3]}
        </div>

        <div className="title">
            Top Speed
        </div>
        <div className="title-value">
            {specs[4]}
        </div>

        <div className="title">
            Variants
        </div>
        <div className="title-value">
            
               
                {
                    specs[5]
                    // specs[5].map((var1:String)=>(<li><{...var1}</li>))
                }

                
            
            
        </div>
    </div>
  )
}

export default Specification