import React, { useContext, useState } from 'react';
import './SideBar.css';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';

function SideBar({ setToggleSidebar }) {
  const { courseData } = useContext(GlobalContext);
  const [activeMain, setActiveMain] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  const sideBarData = [
    { MainTitle: 'Home'},
    { MainTitle: 'Courses' },
    { MainTitle: 'Gellery' },
    { MainTitle: 'Career' }
  ];

  const toggleMainMenu = (index) => {
    setActiveMain(activeMain === index ? null : index);
    setActiveSub(null); 
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
                {mainT.MainTitle === 'Courses' && courseData.map((item, courseIndex) => (
                  courseIndex < 9 && (
                   <Link to={`/${item.path}`}><li key={courseIndex} className="sub-menu-item" onClick={() => setToggleSidebar(false)}>
                    <h3 className="sub-title" onClick={() => toggleSubMenu(courseIndex)}>
                      {item.Title}
                    </h3></li></Link>
                  )
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
