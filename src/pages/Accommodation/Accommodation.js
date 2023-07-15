// import React from 'react';
// import './style.css';
// import AccommodationDetails from "./AccommodationDetails";
// import jsonData from "../../logements.json"; 

// const Accommodation = ({ title, cover, pictures }) => {
//   // Utilise les données JSON pour afficher les informations correspondantes
//   const accommodationData = jsonData.map((accommodation) => {
//     if (accommodation.title === title) {
//       return accommodation;
//     }
//     return null;
//   }).filter(Boolean)[0];

//   if (!accommodationData) {
//     return <div>Aucune donnée d'hébergement trouvée pour ce titre</div>;
//   }

//   const { cover: accommodationCover, pictures: accommodationPictures } = accommodationData;

//   return (
//     <div>
//       <h2>{title}</h2>
//       <img src={accommodationCover} alt={title} />
//       <div className="image-gallery">
//         {accommodationPictures.map((picture, index) => (
//           <img key={index} src={picture} alt={`Accommodation image ${index + 1}`} />
//         ))}
//       </div>
//       <AccommodationDetails id={accommodationData.id} />
//     </div>
//   );
// };

// export default Accommodation;
