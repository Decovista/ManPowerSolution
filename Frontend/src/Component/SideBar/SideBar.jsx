import React, { useContext, useState } from 'react';
import './SideBar.css';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router-dom';

function SideBar({ setToggleSidebar }) {
  const { courseData } = useContext(GlobalContext);
  const [activeMain, setActiveMain] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  const sideBarData = [
    { MainTitle: 'Home', path:'/'},
    { MainTitle: 'Courses', path:'/AllCourses' },
    { MainTitle: 'Gellery', path:'/StudentGallery' },
    { MainTitle: 'Career', path:'/Career' }
  ];

  const toggleMainMenu = (index) => {
    setActiveMain(activeMain === index ? null : index);
    setActiveSub(null); 
  };

  const toggleSubMenu = (index) => {
    setActiveSub(activeSub === index ? null : index);
  };

  return (
    <div className="SideBar">
      <i className="fa-solid fa-xmark close-icon" onClick={() => setToggleSidebar(false)}></i>

      <ul className="side-bar-wrapper">
        {sideBarData.map((mainT, idx) => (
          <li key={idx} className="sidebar-item">
            <Link to={mainT.path} onClick={() => setToggleSidebar(false)}>
            <h2 className="sidebar-title" onClick={() => toggleMainMenu(idx)}>
              {mainT.MainTitle}
            </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
