import React from 'react'
import './Footer.css'
import Facebook_logo from './facebook.png'
import Twitter_logo from './twitter.png'
import Instagram_logo from './instagram.png'



const Footer = () => {
  return (
    <div className="footer-container">
        <div className="contact">
            <h3>Contact:</h3>
            {"-> "}<a href="/">Request a Test Drive</a><br/>
            {"-> "}<a href="/">Book Car</a><br/>
            {"-> "}<a href="/">Career</a><br/>
            {"-> "}<a href="/">Contact Us</a>
        </div>

        <div className="xtremecars">
            <h3>Xtemecars:</h3>
            <p>12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai-400705.</p>
            <p>Maharashtra, India.</p>
            <br/>
            Phone: <a href="tel:+91-22-61280000">+91-22-61280000</a>

        </div>

        <div className="legal">
            <h3>Legal:</h3>
            {"-> "}<a href="/">Legal Disclaimer / Imprint </a><br/>
            {"-> "}<a href="/">Privacy Policy</a><br/>
            {"-> "}<a href="/">Cookie Policy</a>
        </div>

        <div className="connect">
            <h3>Connect with us:</h3>
            <a href="www.facebook.com" target="_blank"><img src={Facebook_logo} alt="" /><br/></a>
            <a href="www.twitter.com" target="_blank"><img src={Twitter_logo} alt="" /><br/></a>
            <a href="www.instagram.com" target="_blank"><img src={Instagram_logo} alt="" /><br/></a>
        </div>

    </div>
  )
}

export default Footer