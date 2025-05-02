import React from 'react'
import assets from '../../../public/assets.js'


// import JobCard from './JobCard';

import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className='About-main-wrapper'>
      <div className="heading-p">
        <div className="caintainer">
          <h1 className="heading">About Us</h1>
          </div>
          <div className="heading-p">
            <p>
            Empowering careers through expert training, skill-building, and successful job placements across top companies.

            </p>
          
          </div>

      <div className="collage-details">
        <div className="our-owner">
          <img src={assets.Boss} alt="" />
          <h1 className="m-h">Mr. Sandeep Kumar</h1>
          <p>Our owner, Mr. Sandeep Kumar, is a visionary leader with a passion for empowering students and transforming lives. With years of experience in the manpower services industry, he has dedicated his career to bridging the gap between education and employment. Under his guidance, ManPower has become a trusted name in providing quality training and placement services.</p>
        </div>
        <div className="facalty-h">
        <img src={assets.Faculty} alt="" />
          <h1 className="m-h">Our Faculty</h1>
          
          <p>Our faculty comprises seasoned professionals and industry experts who bring a wealth of knowledge and experience to the classroom. They are dedicated to providing personalized attention, practical training, and mentorship to each student, ensuring that they are well-prepared for the challenges of the job mark</p>
        </div>
        <div className="facalty-h">
        <img src={assets.CampusCulture} alt="" />
          <h1 className="m-h">Culture Of Collage</h1>
          
          <p>Our faculty comprises seasoned professionals and industry experts who bring a wealth of knowledge and experience to the classroom. They are dedicated to providing personalized attention, practical training, and mentorship to each student, ensuring that they are well-prepared for the challenges of the job market. With a focus on real-world applications and hands-on learning.</p>
        </div>
        

    </div>
 </div>


      <div className="mid-pari">
        <h1 className="m-h">Who We Are </h1>
        <p>At ManPower, we are more than just a manpower services institute — we are a launchpad for young talent striving to build successful careers. With a proven track record of placing over 100 candidates in top companies across the country, we specialize in providing expert guidance, practical training, and confidence-building support. Our mission is to bridge the gap between education and employment by nurturing students with the right skills, values, and opportunities to excel in today’s competitive job market.</p>
        <div className="why-us">
  <h1 className="m-h">Why Choose ManPower?</h1>
  <ul>
    <li>✅ 100+ successful placements</li>
    <li>✅ Industry-expert faculty</li>
    <li>✅ Real project training</li>
    <li>✅ Affordable courses & flexible timings</li>
  </ul>
</div>
        <h1 className="m-h">Our Mission</h1>
             <p>
             Our mission is to empower students with the practical skills, mindset, and exposure they need to succeed in today’s competitive job market. Through a combination of expert training, soft skills development, personalized mentoring, and hands-on industry experiences, we prepare our students to not just find jobs — but to thrive in them.
We are committed to:

Identifying and nurturing the unique strengths of each student.

Providing up-to-date, industry-relevant training in collaboration with experienced professionals.

Offering placement assistance and career counseling that open real doors to success.

Building a supportive, inclusive learning environment that fosters growth, discipline, and confidence.

Continuously innovating our programs to match the evolving needs of the corporate world.

Our mission goes beyond employment — it is about inspiring lifelong learners and responsible citizens who bring value to their workplace and society at large.
             </p>
             
      </div>
     
      <div className="end-part"></div>
    </div>
  )
}

export default AboutPage