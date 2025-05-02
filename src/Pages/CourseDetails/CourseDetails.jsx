import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './CourseDetails.css'

const CourseDetail = () => {
  const { path } = useParams();  
  const { courseData } = useContext(GlobalContext);

  if (!courseData || !Array.isArray(courseData)) {
    return <div>Loading course data...</div>;
  }

  const selectedCourse = courseData.find(course => course.path === path);


  if (!selectedCourse) {
    return <div>Course not found for path: {path}</div>;
  }

  return (
    <div className='courseDetails'>
      <h1>{selectedCourse.Title}</h1>
      <p>{selectedCourse.description}</p>
      <ul>
        {selectedCourse.Subject.map((subject, index) => (
          <li key={index}>{subject.SubjectTitle}</li>  
        ))}
      </ul>
      <button>Enquire</button>
    </div>
  );
};

export default CourseDetail;
