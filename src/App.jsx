import './App.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Pages/Home/Home';
import StudentsGallery from './Pages/GalleryPages/StudentsGallery';
import StaffGallery from './Pages/GalleryPages/StaffGallery';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import Page404 from './Component/PAGE-404/Page404';
import { GlobalContext } from './context/GlobalContext';
import AllCourses from './Component/All-courses/AllCourses';
import ScrollToTop from './Component/Scroll-top/ScrollToTop';

function AppContent() {
  const { getFinder, setGetFinder, courseData } = useContext(GlobalContext);

  return (
    <>
    <ScrollToTop/>
      <Header />
      {getFinder ? <Page404 /> : ''}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admissiondetails" element={<StudentsGallery />} />
          <Route path="/staff-gallery" element={<StaffGallery />} />
          <Route path="/:path" element={<CourseDetails />} />
          <Route path='/AllCourses' element={<AllCourses />} />
        </Routes>
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
