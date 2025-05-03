import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
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
      {courseData.map((item, index) => (
        <li key={index} className="main-item" onClick={() => setTrackSubTitle(item)}>
          <Link to={`/${item.path}`}>
            <h2>{item.Title}</h2>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
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
    <div className={`${navItem === 'Subjects' ? 'Courses' : ''} DropBox`} onMouseLeave={() => setNavItem('')}>
      <div className="drop-box-wrapper">
        {navItem === 'Subjects' && renderSubjects()}
        {navItem === 'Gallery' && renderGalleryLinks()}
      </div>
    </div>
  );
}

export default DropBox;
