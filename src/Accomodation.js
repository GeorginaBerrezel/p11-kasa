import React from 'react';

const Accommodation = ({ title, cover, pictures }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={cover} alt={title} />
      <div>
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`Toto ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Accommodation;