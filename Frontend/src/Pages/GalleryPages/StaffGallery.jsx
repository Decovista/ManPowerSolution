import React from 'react';
import assets from '../../../public/assets';
import './GalleryPage.css';

const staffImages = [
  assets.Teacher1,
  assets.Teacher2,
  assets.Teacher3,
  assets.Teacher4,
  assets.Teacher5,
];

const StaffGallery = () => {
  return (
    <div className="gallery-container">
      <h2>Staff Gallery</h2>
      <div className="gallery-grid">
        {staffImages.map((img, index) => (
          <img src={img} alt={`Staff ${index + 1}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default StaffGallery;
