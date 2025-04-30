import React from 'react'
import assets from '../../../public/assets'
import  './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <div className="main-wrapper">
        <ul className="wrapper">
        <li className="wrapper-logo-address">
        <img src={assets.logo} alt="logo" />
      </li>
      <li>
      <p>It is a rising startup in the vocational education space, focused on bridging the gap between skill development and employability.</p>
      </li>
          <li>
          <p><span><i class="fa-solid fa-location-pin"></i> Our Presense :</span> Patna | Bangalore | Kolkata | Pune | Delhi NCR</p>
          </li>
          <li>
          <p>Unit No. 417, 4th Floor,<span>Vipul Business Park</span>, Sector 48, Main Sohna Road, Gurugram-122011.</p>
          </li>
          <li style={{listStyle:'none'}}>
          <button>ContactUs</button>
          </li>
        </ul>
        <ul className='wrapper-c'>
          <h2>Courses</h2>
          <li>&#9670;<p>Electrical Engineering</p></li>
          <li>&#9670;<p>Solar Energy Technician</p></li>
          <li>&#9670;<p>Electronic Technician</p></li>
          <li>&#9670;<p>Welder Training</p></li>
          <li>&#9670;<p>Fitter</p></li>
          <li>&#9670;<p>Animal Husbandry & Artificial Insemination (AI)</p></li>
          <li>&#9670;<p>Rural Medical Practitioner (RMP)</p></li>
        </ul>
        <ul className='wrapper-c'>
          <h2>Services</h2>
          <li>&#9670;<p>100% Placement</p></li>
          <li>&#9670;<p>Varified Courses</p></li>
          <li>&#9670;<p>Skilled Staff</p></li>
          <li>&#9670;<p>Programs</p></li>
          <li>&#9670;<p>Culture</p></li>
          <li>&#9670;<p>Technologies</p></li>
        </ul>
        <ul className='wrapper-c'>
          <h2>Others</h2>
          <li>&#9670;<p>Frequently Asked Question</p></li>
          <li>&#9670;<p>Who We Are</p></li>
          <li>&#9670;<p>Our Team</p></li>
          <li>&#9670;<p>About</p></li>
          <li>&#9670;<p>branch</p></li>
          <li>&#9670;<p>Mission</p></li>
          <li>&#9670;<p>Vission</p></li>
        </ul>
      </div>
      <div className="social-media">
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-x-twitter"></i>
      <i class="fa-brands fa-linkedin-in"></i>
      </div>
      <div className="copyright">
        <p>© 2025 Manpower Solutions. All rights reserved.</p>
      </div>
     
    </div>
  )
}

export default Footer
