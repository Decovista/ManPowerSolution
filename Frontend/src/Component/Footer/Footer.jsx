import React, { useContext } from "react";
import { Link } from "react-router-dom";
import assets from "../../../public/assets";
import "./Footer.css";
import { GlobalContext } from "../../context/GlobalContext";

function Footer() {
  const { courseData, setToggleContact } = useContext(GlobalContext);
  return (
    <div className="Footer">
      <div className="main-wrapper">
        <ul className="wrapper">
          <li className="wrapper-logo-address">
            <img src={assets.logoNew} alt="logo" />
          </li>
          <li>
            <p>
              It is a rising startup in the vocational education space, focused
              on bridging the gap between skill development and employability.
            </p>
          </li>
          <li>
            <a href="tel:+91 8562813027">
              <i className="fa-solid fa-phone"></i>
              <p>+91 8562813027</p>
            </a>
          </li>
          <li>
            <a href="mailto:manpowersolutions.edu@gmail.com">
            <i className="fa-regular fa-envelope"></i>
              <p>manpowersolutions.edu@gmail.com</p>
            </a>
          </li>
          <a href="https://www.google.co.in/maps/place/Vipul+Business+Park,+Central+Park+II+Rd,+Vipul+World,+Sector+48,+Gurugram,+Haryana+122004/@28.4226504,77.035029,17z/data=!3m1!4b1!4m6!3m5!1s0x390d18758a93762b:0x9348ae09f4ba0007!8m2!3d28.4226457!4d77.0376039!16s%2Fg%2F1pt_f2nln?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
            <li>
              <p>
                Unit No. 417, 4th Floor,<span>Vipul Business Park</span>, Sector
                48, Main Sohna Road, Gurugram-122011.
              </p>
            </li>
          </a>
          <li style={{ listStyle: "none" }}>
            <a href="https://www.google.co.in/maps/place/Vipul+Business+Park,+Central+Park+II+Rd,+Vipul+World,+Sector+48,+Gurugram,+Haryana+122004/@28.4226504,77.035029,17z/data=!3m1!4b1!4m6!3m5!1s0x390d18758a93762b:0x9348ae09f4ba0007!8m2!3d28.4226457!4d77.0376039!16s%2Fg%2F1pt_f2nln?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
              <button>Locate Us</button>
            </a>
          </li>
        </ul>
        <ul className="wrapper-c">
          <h2>Courses</h2>
          <div className="course-wrapper">
            {courseData.map((item, index) => {
              return (
                <>
                  <Link to={`/${item.path}`}>
                    <li key={index}>
                      &#9670;<p>{item.Title}</p>
                    </li>
                  </Link>
                </>
              );
            })}
          </div>
        </ul>
        <ul className="wrapper-c">
          <h2>Services</h2>
          <li>
            &#9670;<p>100% Placement</p>
          </li>
          <li>
            &#9670;<p>Varified Courses</p>
          </li>
          <li>
            &#9670;<p>Skilled Staff</p>
          </li>
          <li>
            &#9670;<p>Programs</p>
          </li>
          <li>
            &#9670;<p>Culture</p>
          </li>
          <li>
            &#9670;<p>Technologies</p>
          </li>
        </ul>
        <ul className="wrapper-c">
          <h2>Others</h2>
          <Link to='/FAQ'>  <li>
            &#9670;<p>Frequently Asked Question</p>
          </li></Link>
       <Link to='/About'> <li>
            &#9670;<p>Who We Are</p>
          </li></Link>
          <Link to='/About'> <li>
            &#9670;<p>Our Team</p>
          </li></Link>
          <Link to='/About'> <li>
            &#9670;<p>About</p>
          </li></Link>
          <Link to='/About'> <li>
            &#9670;<p>branch</p>
          </li></Link>
          <Link to='/About'> <li>
            &#9670;<p>Mission</p>
          </li></Link>
          <Link to='/About'><li>
            &#9670;<p>Vission</p>
          </li></Link>
        </ul>
      </div>
      <div className="social-media">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
      </div>
      <div className="copyright">
        <p>© 2025 Manpower Solutions. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
