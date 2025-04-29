import React, { useContext, useState } from 'react';
import './SideBar.css';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';

function SideBar({ setToggleSidebar }) {
  const { courseData } = useContext(GlobalContext);
  const [activeMain, setActiveMain] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  const sideBarData = [
    { MainTitle: 'Subjects' },
    { MainTitle: 'Courses' },
    { MainTitle: 'Programs' },
    { MainTitle: 'Career' }
  ];

  const toggleMainMenu = (index) => {
    setActiveMain(activeMain === index ? null : index);
    setActiveSub(null); // reset sub-menu if main changed
  };

  const toggleSubMenu = (index) => {
    setActiveSub(activeSub === index ? null : index);
  };

  console.log(courseData ? 'good' : 'bad');

  return (
    <div className="SideBar">
      <i className="fa-solid fa-xmark close-icon" onClick={() => setToggleSidebar(false)}></i>

      <ul className="side-bar-wrapper">
        {sideBarData.map((mainT, idx) => (
          <li key={idx} className="sidebar-item">
            <h2 className="sidebar-title" onClick={() => toggleMainMenu(idx)}>
              {mainT.MainTitle}
            </h2>

            {activeMain === idx && (
              <ul className="sub-menu">
                {/* If the section is Courses, show all courseData */}
                {mainT.MainTitle === 'Courses' && courseData.map((item, courseIndex) => (
                  <li key={courseIndex} className="sub-menu-item">
                    <h3 className="sub-title" onClick={() => toggleSubMenu(courseIndex)}>
                      {item.Title}
                    </h3>

                    {activeSub === courseIndex && (
                      <ul className="deep-sub-menu">
                        {item.Subject.map((subjectItem, subIndex) => (
                          <li key={subIndex} className="deep-sub-menu-item">
                            <Link to={`/${item.path}`} className="sub-menu-link">
                              {subjectItem.SubjectTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
