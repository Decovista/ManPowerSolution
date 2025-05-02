import React from 'react'
import './HeroSection.css'
import {Link} from 'react-router-dom'
import assets from '../../../public/assets'

function HeroSection() {
  return (
    <div className='HeroSection'>
        <div className="hero-wrapper">
      <div className="hero-row-1">
      <div className="hero-text-con">
      <h1>
        Smart Learning for a Smarter Future.
        </h1>
          <h2>Discover Smarter Learning. Shape Your Future.</h2>
          <h2>Explore expert-led courses, in-demand programs, and career-focused learning paths — all in one place. Whether you're a student, a professional, or just curious, we've got the tools to help you grow.</h2>
          <button class="btn-primary">Get Started</button>
          <Link to='/AllCourses'><button class="btn-secondary">Browse Courses</button></Link>
       </div>
      </div>
      <div className="hero-row-1">
         <div className="hero-img">
            <img src={assets.heroSection} alt="heroimg" />
         </div>
      </div>
      </div>
    </div>
  )
}

export default HeroSection
