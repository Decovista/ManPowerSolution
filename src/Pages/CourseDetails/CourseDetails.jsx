import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetails() {
  const { courseId } = useParams();

  return (
    <div style={{ padding: '40px' }}>
      <h1>Course Details for: {courseId.replace(/-/g, ' ')}</h1>
      {/* You can fetch or match courseId with data here */}
    </div>
  );
}

export default CourseDetails;
