import React, { useState } from "react";
import "./Header.css";
import assets from "../../../public/assets";
import SideBar from "../SideBar/SideBar";
import DropBox from "../DropBox/DropBox";

function Header() {
  const [toggleRegister, setToggleRegister] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [navItem, setNavItem] = useState('');

  const findNavItem = (item) => {
    setNavItem(item);
  };

  return (
    <div className="Header">
      <div className="search-bar-top">
        <div className={`${toggleSearch ? 'hide-bar' : ''} input-con-top-m`}>
          <i className="fa-solid fa-xmark" onClick={() => setToggleSearch(false)}></i>
          <div className="input-con-top">
            <input type="text" placeholder="Courses" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>

      <div className="Navigation">
        <div className="main-logo">
          <img src={assets.logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li onMouseOver={() => findNavItem('Subjects')}>
            <h2>Courses</h2>
            <i className="fa-solid fa-chevron-down"></i>
          </li>
          <li onMouseOver={() => findNavItem('Programs')}>
            <h2>Admission</h2>
            <i className="fa-solid fa-chevron-down"></i>
          </li>
          <li onMouseOver={() => findNavItem('Programs')}>
            <h2>About Us</h2>
            <i className="fa-solid fa-chevron-down"></i>
          </li>
          <li onMouseOver={() => findNavItem('Career')}>
            <h2>Career</h2>
          </li>
        </ul>

        <div className="nav-tools">
          <div className="input-con">
            <input type="text" placeholder="Courses" />
            <i
              onClick={() => setToggleSearch(!toggleSearch)}
              className="fa-solid fa-magnifying-glass"
            ></i>
          </div>

          <div className="Register-btn">
            <button onClick={() => setToggleRegister(!toggleRegister)}>
              Register
            </button>
            {toggleRegister && (
              <ul className="Register-drop-box">
                <li>As Student</li>
                <li>As College</li>
                <li>As Organisation</li>
              </ul>
            )}
          </div>

          <i
            className="fa-solid fa-bars"
            onClick={() => setToggleSidebar(!toggleSidebar)}
          ></i>
        </div>
      </div>

      {toggleSidebar && (
        <SideBar
          setToggleSidebar={setToggleSidebar}
        />
      )}

      {navItem && <DropBox 
      navItem={navItem}
      setNavItem={setNavItem}
      findNavItem={findNavItem} />}
    </div>
  );
}

export default Header;
