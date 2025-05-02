import React, { useContext } from 'react';
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
              <li key={index}>
                <h2>{Item.Title}</h2>
                <p>{Item.description}</p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default AllCourses;
