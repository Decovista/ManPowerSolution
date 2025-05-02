import React, { useEffect, useState, useContext, useRef} from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";
import assets from "../../../public/assets";
import SideBar from "../SideBar/SideBar";
import DropBox from "../DropBox/DropBox";
import { GlobalContext } from "../../context/GlobalContext";

function Header() {
  const [toggleRegister, setToggleRegister] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [navItem, setNavItem] = useState('');
  const navigate = useNavigate();
  const { courseData, setGetFinder,searchInput,setSearchInput } = useContext(GlobalContext);
  const dropDownRef = useRef('')
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setNavItem('');
      }
    };
  
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  

  const findNavItem = (item) => {
    setNavItem(item);
  };
  useEffect(() => {
    setGetFinder(false);
  }, [setGetFinder]);

  const handleSearch = () => {
    const input = searchInput.trim().toLowerCase();
    if (!input) return;

    const foundCourse = courseData.find(course => {
      const titleMatch = course.Title?.toLowerCase().includes(input);
      const subjectMatch = course.Subject?.some(subject =>
        subject.SubjectTitle?.toLowerCase().includes(input)
      );
      return titleMatch || subjectMatch;
    });

    if (foundCourse?.path) {
      navigate(`/${foundCourse.path}`);
      setSearchInput('');
      setToggleSearch(false); 
      setGetFinder(false);
    } else {
        setGetFinder(true);
    }
  };

  const selectSearchBar = () => {
    handleSearch();
    setToggleSearch(true); 
  };

  return (
    <div className="Header" onMouseLeave={() => setNavItem('')}>
      <div className={`${toggleSearch ? 'show-search' : ''} search-bar-top`}>
        <div className={`${toggleSearch ? 'hide-bar' : ''} input-con-top-m`}>
          <i className="fa-solid fa-xmark" onClick={() => setToggleSearch(false)}></i>
          <div className="input-con-top">
            <input
              type="text"
              placeholder="Search Courses"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
          </div>
        </div>
      </div>

      <div className="Navigation">
        <div className="main-logo">
          <Link to='/' onClick={() => setGetFinder(false)}><img src={assets.logo} alt="logo" /></Link>
        </div>

        <ul className="nav-links">
          <Link to='/'><li><i className="fa-solid fa-house" onClick={() => setGetFinder(false)}></i></li></Link>
          <li
          onMouseOver={() => findNavItem('Subjects')} onClick={() =>{
            setGetFinder(false)
            findNavItem('Subjects')
           }}>
            <h2>Courses</h2>
            <i className="fa-solid fa-chevron-down"></i>
          </li>
          <li
           onMouseOver={() => findNavItem('Gallery')} onClick={() =>{
            setGetFinder(false)
            findNavItem('Gallery')
           }} >
            <h2>Gallery</h2>
            <i className="fa-solid fa-chevron-down"></i>
          </li>
          <Link to='/Career'>
          <li >
            <h2>Career</h2>
          </li>
          </Link>
        </ul>

        <div className="nav-tools">
          <div className="input-con">
            <input
              type="text"
              placeholder="Search Courses"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <i
              onClick={selectSearchBar}
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

      {toggleSidebar && <SideBar setToggleSidebar={setToggleSidebar} />}
      {navItem && <DropBox ref={dropDownRef} navItem={navItem} setNavItem={setNavItem} findNavItem={findNavItem} />}
    </div>
  );
}

export default Header;
