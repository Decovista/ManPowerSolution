import './App.css'
import Home from './Pages/Home/Home'
import Header from './Component/Header/Header'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import CourseDetails from './Pages/CourseDetails/CourseDetails';
import StudentsGallery from './Pages/GalleryPages/StudentsGallery';
import StaffGallery from './Pages/GalleryPages/StaffGallery';

function App() {
 

  return (
    <BrowserRouter>
    <>
    <Header />
    <Routes>
    <Route path="*" element={<Home />} />
    <Route path="/Admissiondetails" element={<StudentsGallery />} />
    <Route path="/staff-gallery" element={<StaffGallery />} />
    <Route path="/course/:courseId" element={<CourseDetails />} />
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
