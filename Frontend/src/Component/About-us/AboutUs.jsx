import React from 'react'
import './AboutUs.css'
import {Link} from 'react-router-dom'
import assets from '../../../public/assets'

function AboutUs() {
  return (
    <div className='About-us'>
      <div className="About-wrapper">
        <section className="Whoweare">
            <h3>Who We Are?</h3>
            <div className="Whoweare-wrapper">
                <div className="mission-img-con">
                    <img src={assets.homeBanner} alt="mission" />
                </div>
                <div className="misson-text">
                    <h2>We are a dynamic startup driven by a vision to transform education and skill development.</h2>
                    <p>Founded with a passion for empowering individuals, we bridge the gap between learning and real-world opportunities. Our courses are carefully designed to meet the evolving demands of industries, offering practical knowledge, hands-on experience, and career-ready skills.</p>
                    <p>We believe education should be accessible, affordable, and aligned with the future of work. With a focus on quality training, innovation, and personalized learning, Manpower Solutions is committed to helping every learner grow, succeed, and lead.</p>
                  <Link to='/About'><button>Explore</button></Link>
                </div>
            </div>
            <div className="Whoweare-wrapper">
                <div className="misson-text">
                    <h2> Our vision is to create a future where education is not a privilege, but a powerful bridge to opportunity.</h2>
                    <p>We aspire to be a global leader in skill development, empowering individuals with practical, real-world knowledge that transforms lives and careers.</p>
                    <p>By blending innovation, accessibility, and excellence, we envision a world where every learner, no matter their background, can unlock their potential, achieve their dreams, and shape a brighter tomorrow.</p>
                    <Link to='/About'><button>Explore</button></Link>
                </div>
                <div className="mission-img-con">
                    <img src={assets.classroom} alt="mission" />
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs
