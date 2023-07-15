import React from "react";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import jsonData from "../../logements.json";

export default function Test() {
  // Remplacez 'logementId' par l'ID du logement que vous souhaitez sélectionner
  const logementId = "c67ab8a7";

  // Recherche du logement avec l'ID correspondant
  const selectedAccommodation = jsonData.find(
    (accommodation) => accommodation.id === logementId
  );

  if (!selectedAccommodation) {
    // Gérer le cas où aucun logement n'est trouvé avec l'ID donné
    return <div>Aucun logement trouvé.</div>;
  }

  return (
    <Thumbnail
      title={selectedAccommodation.title}
      cover={selectedAccommodation.cover}
    />
  );
}


// import React from "react";
// import Thumbnail from "../../components/Thumbnail/Thumbnail";
// import jsonData from "../../logements.json";

// export default function Test() {
    
//   return jsonData.map((accommodation) => (
//       <Thumbnail title={accommodation.title} cover={accommodation.cover} />
//   ));
// }
