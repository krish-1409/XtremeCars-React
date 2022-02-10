import React from 'react'

const Carcard = (props:any) => {
  return (
    
            <div className="card">
                {/* <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/City-2017-2020/7259/Honda-City-2017-2020-SV-MT/1637828825177/front-left-side-47.jpg?impolicy=resize&imwidth=420" alt=":("  /> */}
                <img src={ props.details.image } alt="" />
                <div className="container">
                    <h4 className='card-car-name'><b>{ props.details.name }</b></h4>
                    <p className='card-car-price'>{props.details.price}akhs Onwards</p>
                </div>
            </div>
    
  )
}

export default Carcard