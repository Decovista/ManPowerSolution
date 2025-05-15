import React from 'react'
import HeroSection from '../../Component/HeroSection/HeroSection'
import TopSubject from '../../Component/Top-Subject/TopSubject'
import Promotional from '../../Component/Promotional-banner/Promotional'
import AboutUs from '../../Component/About-us/AboutUs'
import Testimonial from '../../Component/Testimonials/Testimonial'

function Home() {
  return (
    <div className='Home'>
      <Promotional/>
      <HeroSection/>
      <TopSubject/>
      <AboutUs />
      <Testimonial />
    </div>
  )
}

export default Home
