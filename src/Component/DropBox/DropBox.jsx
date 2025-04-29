import React, { useContext, useState } from 'react';
import './DropBox.css';
import { GlobalContext } from '../../context/GlobalContext';

function DropBox({ navItem, setNavItem, findNavItem }) {
  const { courseData } = useContext(GlobalContext);
  const [trackSubTitle, setTrackSubTitle] = useState(null);

  const renderSubjects = () => (
    <>
      <ul>
        {courseData.map((item, index) => (
          index < 9 && (
            <li
              onClick={() => setTrackSubTitle(item)}
              key={index}
              className="main-item"
            >
              <h2>{item.Title}</h2>
              <i className="fa-solid fa-chevron-right"></i>
            </li>
          )
        ))}
      </ul>

      {trackSubTitle ? (
        trackSubTitle.Subject && (
          <ul className="sub-list">
            {trackSubTitle.Subject.map((subItem, subIndex) => (
              <li key={subIndex} className="sub-item">
                {subItem.SubjectTitle}
              </li>
            ))}
          </ul>
        )
      ) : (
        <ul className="sub-list">
          <li className="sub-item">Click on the titles to get information here</li>
        </ul>
      )}
    </>
  );

  const renderCourses = () => (
    <>
      <ul>
        {courseData[0]?.Subject?.map((item, index) => ( 
          index < 9 && (
            <li
              onClick={() => setTrackSubTitle(item)}
              key={index}
              className="main-item"
            >
              <h2>{item.SubjectTitle}</h2>
              <i className="fa-solid fa-chevron-right"></i>
            </li>
          )
        ))}
      </ul>

      {trackSubTitle ? (
        trackSubTitle.Subject && (
          <ul className="sub-list">
            {trackSubTitle.Subject.map((subItem, subIndex) => (
              <li key={subIndex} className="sub-item">
                {subItem.SubjectTitle}
              </li>
            ))}
          </ul>
        )
      ) : (
        <ul className="sub-list">
          <li className="sub-item">Click on the titles to get information</li>
        </ul>
      )}
    </>
  );

  return (
    <div className="DropBox" onMouseLeave={() => setNavItem('')}>
      <div className="drop-box-wrapper">
        {navItem === 'Subjects' && renderSubjects()}
        {navItem === 'Courses' && renderCourses()}
        {!['Subjects', 'Courses'].includes(navItem) && (
          <div className="empty-dropbox">
            <p>Select a category from the menu.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropBox;
