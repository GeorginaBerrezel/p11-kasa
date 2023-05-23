import React from 'react';
// import './style.css';
import'../accommodation/style.css';

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

// import React from "react";
// import { useParams } from "react-router-dom";

// const ThumbnailDetails = () => {
//   const { id } = useParams();

//   // Utilisez l'ID pour récupérer les détails du composant Thumbnail correspondant depuis vos données

//   return (
//     <div>
//       <h1>Thumbnail Details - {id}</h1>
//       {/* Affichez les détails du composant Thumbnail ici */}
//     </div>
//   );
// };

// export default ThumbnailDetails;

