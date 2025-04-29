import React from 'react'
import HeroSection from '../../Component/HeroSection/HeroSection'
import TopSubject from '../../Component/Top-Subject/TopSubject'
import Promotional from '../../Component/Promotional-banner/Promotional'
import AboutUs from '../../Component/About-us/AboutUs'

function Home() {
  return (
    <div className='Home'>
      <Promotional/>
      <HeroSection/>
      <TopSubject/>
      <AboutUs />
    </div>
  )
}

export default Home
