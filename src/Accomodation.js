import React from 'react';
import './Accomodation.css';

const Accommodation = ({ title, cover, pictures }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={cover} alt={title} />
      <div className="image-gallery">
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`Accomodationimage ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
