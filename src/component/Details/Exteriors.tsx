import React from 'react'

const Exteriors = (props:any) => {
    const ext = props.Exteriors
  return (
    <div>
        <div className="title">Length</div>
        <div className="title-value">{ext[0]}</div>

        <div className="title">Width</div>
        <div className="title-value">{ext[1]}</div>

        <div className="title">Color</div>
        <div className="title-value">{ext[2]}</div>
    </div>
  )
}

export default Exteriors