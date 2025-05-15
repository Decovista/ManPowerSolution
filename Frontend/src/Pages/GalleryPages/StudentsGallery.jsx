import React from 'react';
import assets from '../../../public/assets';
import './GalleryPage.css'; // Create your own CSS for layout

const studentsImages = [
  assets.students1,
  assets.students2,
  assets.students3,
  assets.students4,
  assets.students5,
  assets.students6,
  assets.students7,
];

const StudentsGallery = () => {
  return (
    <div className="gallery-container">
      <h2>Students Gallery</h2>
      <div className="gallery-grid">
        {studentsImages.map((img, index) => (
          <img src={img} alt={`Student ${index + 1}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default StudentsGallery;
