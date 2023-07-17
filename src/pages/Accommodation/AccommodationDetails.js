import React from "react";
import { useParams } from "react-router-dom";

import Carrousel from "../../components/Carrousel/Carrousel";
import jsonData from "../../logements.json";
import Sheet from "../../components/Sheet/Sheet";
import Collapse from "../../components/Collapse/Collapse"; // Importer le composant Collapse


const AccommodationDetails = () => {
  const { id } = useParams();

  const accommodation = jsonData.find((accommodation) => accommodation.id === id);
  if (!accommodation) {
    return <div>Aucun hébergement trouvé pour cet ID</div>;
  } else {
    const { pictures, description, equipments } = accommodation; // Déplacer cette ligne ici

    return (
      <div>
        <Carrousel pictures={pictures} />
        <Sheet accommodation={accommodation} />
        <div className="collapses">
          <Collapse title="Description" content={description} /> {/* Ajouter le composant Collapse ici */}
          <Collapse title="Équipements" content={equipments} />
        </div>

      </div>
    );
  }
};

export default AccommodationDetails;
