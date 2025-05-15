import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import './AllCourses.css'; 
import { GlobalContext } from '../../context/GlobalContext';

function AllCourses() {
  const { courseData } = useContext(GlobalContext);

  return (
    <div className="All-courses">
      <h1>All Courses</h1>
      <ul>
        {
          courseData.map((Item, index) => {
            return (
              <li key={index} style={{ animationDelay: `${(index % 27) * 0.3}s` }}>
                <div className="course-logo">
                  <img src={Item.icon} alt={`courseLogo${index}`} />
                </div>
                <h2>{Item.Title}</h2>
                <Link to={`/${Item.path}`}>  <button className='redirect-course'>Explore</button> </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default AllCourses;
