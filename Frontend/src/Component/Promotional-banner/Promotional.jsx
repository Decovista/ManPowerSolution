import React from 'react'
import {Link} from 'react-router-dom'
import assets from '../../../public/assets'
import './Promotional.css'

function Promotional() {
  return (
    <div className='Promotional'>
      <div className="banner-shadow">
        <h2>
        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."
        </h2>
         <p>Our mission is to bridge the gap between learning and employment by offering practical, industry-relevant courses that prepare individuals for real-world success.
         As a growing force in the education sector, Manpower Solutions is focused on innovation, hands-on learning, and empowering every learner to unlock their true potential.</p>
       <Link to='/About'><button>About Us</button></Link> 
      </div>
      <div className="banner-img">
        <img src={assets.mission} alt="HomeBanner" />
      </div>
    </div>
  )
}

export default Promotional
