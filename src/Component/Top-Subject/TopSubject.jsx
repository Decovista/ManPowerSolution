import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './TopSubject.css'; 
import Electricle1 from '../../../public/Electrical1.jpg'
import Electricle2 from '../../../public/Electrical2.jpg'
import Solar1 from '../../../public/Solar-panel1.jpg'
import Solar2 from '../../../public/Solar-panel2.jpg'

const subjectsData = [
  {
    "title": "Electrical Engineering",
    path: '/electrical-engineering',
    "description": "Master the building blocks of modern electrical technology with expert-led courses and practical training.",
    "detail": "Dive deep into the world of electrical systems, from the basics of current and voltage to advanced smart home installations. Gain hands-on experience with transformers, motors, and generators, and ensure electrical safety following the latest industry standards. Learn troubleshooting skills and modern energy solutions to power your career forward.",
    "quote": "This course made complex electrical topics easy to understand with lots of real-world applications.",
    "person": "Rahul, India",
    "courses": [
      {
        type: "Short Course",
        name: "Basic Electrical Concepts (Current, Voltage, Resistance, Power)",
        desc: "Understand the fundamental principles of electricity and how different electrical components work together in a system.",
        img: Electricle1
      },
      {
        type: "Short Course",
        name: "Wiring Systems and Circuit Installation",
        desc: "Master the skills needed for professional wiring systems, circuit designs, and safe electrical installations.",
        img: Electricle2
      },
    ]
  },
  {
    "title": "Solar Energy Technician",
    path:'/solar-energy-technician',
    "description": "Become a solar energy expert and lead the way towards a greener, more sustainable future.",
    "detail": "Learn everything from the fundamentals of solar power systems to installation techniques and maintenance. Understand different types of solar panels, batteries, and inverters while gaining real-world insights into site assessments and safety standards. Equip yourself to build a rewarding career in the booming solar industry.",
    "quote": "Thanks to this course, I successfully installed my first residential solar system. Very detailed and practical.",
    "person": "Sneha, India",
    "courses": [
      {
        type: "Short Course",
        name: "Basics of Solar Energy and PV Systems",
        desc: "Get introduced to solar energy generation, photovoltaic systems, and the importance of renewable technologies.",
        img: Solar1
      },
      {
        type: "Short Course",
        name: "Solar Panel Types and Battery Systems",
        desc: "Discover various solar panel types, their applications, and how to integrate battery backup systems efficiently.",
        img: Solar2
      },
    ]
  }
];

function TopSubject() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="explore-subjects">
      <Link to='/AllCourses'><span className='All-courses-btn'>View All Subjects</span></Link>
      <h1>Explore <span>Top</span> Subjects</h1>
      
      <div className="tabs">
        {subjectsData.map((subject, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {subject.title}
          </div>
        ))}
      </div>

      <div className="subject-content">
        <div className="course-content">
        <h2>{subjectsData[activeTab].title}</h2>
        <p>{subjectsData[activeTab].description}</p>
        <p>{subjectsData[activeTab].detail}</p>

        <blockquote>
          <p>❝ {subjectsData[activeTab].quote} ❞</p>
          <footer>- {subjectsData[activeTab].person}</footer>
        </blockquote>

        <Link to={subjectsData[activeTab].path}>  <button className="explore-btn">Explore courses</button></Link>
        </div>
        <div className="courses-cards">
          {subjectsData[activeTab].courses.map((course, idx) => (
            <div key={idx} className="course-card">
              <img src={course.img} alt={course.name} />
              <div className="course-info">
                <h3>{course.name}</h3>
                <p>{course.desc}</p>
                <span className="tag">{course.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSubject;
