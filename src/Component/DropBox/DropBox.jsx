import React, { useContext, useState } from 'react';
import './DropBox.css';
import { GlobalContext } from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

function DropBox({ navItem, setNavItem }) {
  const { courseData } = useContext(GlobalContext);
  const [trackSubTitle, setTrackSubTitle] = useState(null);
  const navigate = useNavigate();

  const Gallery = [
    { title: 'Staff', path: '/staff-gallery' },
    { title: 'Students', path: '/Admissiondetails' },
  ];

  const renderSubjects = () => (
    <ul>
      {courseData.slice(0, 9).map((item, index) => (
        <li key={index} className="main-item" onClick={() => setTrackSubTitle(item)}>
          <h2>{item.Title}</h2>
          <i className="fa-solid fa-chevron-right"></i>
        </li>
      ))}
    </ul>
  );

  const renderCourses = () => (
    <ul>
      {courseData[0]?.Subject?.slice(0, 9).map((item, index) => (
        <li key={index} className="main-item" onClick={() => setTrackSubTitle(item)}>
          <h2>{item.SubjectTitle}</h2>
          <i className="fa-solid fa-chevron-right"></i>
        </li>
      ))}
    </ul>
  );

  const renderGalleryLinks = () => (
    <ul>
      {Gallery.map((item, index) => (
        <li
          key={index}
          className="main-item"
          onClick={() => navigate(item.path)}
        >
          <h2>{item.title}</h2>
          <i className="fa-solid fa-chevron-right"></i>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="DropBox" onMouseLeave={() => setNavItem('')}>
      <div className="drop-box-wrapper">
        {navItem === 'Subjects' && renderSubjects()}
        {navItem === 'Courses' && renderCourses()}
        {navItem === 'Gallery' && renderGalleryLinks()}
      </div>
    </div>
  );
}

export default DropBox;
