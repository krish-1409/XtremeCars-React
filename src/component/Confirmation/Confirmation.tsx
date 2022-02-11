import { Link, useLocation, useParams } from 'react-router-dom'
import './confirmation.css'
import BMW from './bmw.png'
import BMW2 from './bmw2.png'
import Black from './Black.png'


interface ParamTypes{
  handle:string
}
interface LocationTypes{
  state: object,
  imgLink: string,
  
}

const Confirmation = () => {
 

  return (
    <div className='confirmation-container'>
      <div className="booking-header"></div>
      <div className="content-container">
        <div className="booking-pass">
            <div className="booking-pass-image">
                <img src={BMW} alt="" />
                Booking <b>Successful</b>
            </div>

            <div className="sucess-info"><span style={{color:'brown',textDecoration:'underline'}}>Download</span> the booking summary</div>
            
        </div>
        <div className="explore-more">
        <img src={BMW2} alt="" className='bmw'/>
        <img src={Black} alt="" className='black_bg'/>
        
        <div className="explore-text"><Link to={{pathname:'/view-all'}} style={{color:'white'}}>Explore More{'->'}</Link></div>

        </div>
      </div>
      <div className="explore-more">

      </div>
    </div>
  )
}

export default Confirmation