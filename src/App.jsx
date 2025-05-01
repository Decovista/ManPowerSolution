import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Pages/Home/Home';
import StudentsGallery from './Pages/GalleryPages/StudentsGallery';
import StaffGallery from './Pages/GalleryPages/StaffGallery';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import Page404 from './Component/PAGE-404/Page404';
import { GlobalContext } from './context/GlobalContext';

function AppContent() {
  const { getFinder, setGetFinder, courseData } = useContext(GlobalContext);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const staticPaths = ['/', '/Admissiondetails', '/staff-gallery'];
    const dynamicPaths = courseData.map(course => `/${course.path}`);

    const isValid = staticPaths.includes(currentPath) || dynamicPaths.includes(currentPath);
    setGetFinder(!isValid);
  }, [location.pathname]);

  return (
    <>
      <Header />
      {getFinder ? (
        <Page404 />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admissiondetails" element={<StudentsGallery />} />
          <Route path="/staff-gallery" element={<StaffGallery />} />
          <Route path="/:path" element={<CourseDetails />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
