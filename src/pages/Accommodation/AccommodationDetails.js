import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel/Carrousel";
import jsonData from "../../logements.json";
import Sheet from "../../components/Sheet/Sheet";
import Collapse from "../../components/Collapse/Collapse";
import Error404 from "../../pages/Error/404"; // Importer le composant Error404

const AccommodationDetails = () => {
  const { id } = useParams();

  const accommodation = jsonData.find((accommodation) => accommodation.id === id);
  if (!accommodation) {
    return <Error404 />; // Afficher le composant Error404 si l'ID n'est pas trouvé
  } else {
    const { pictures, description, equipments } = accommodation;

    return (
      <div>
        <Carrousel pictures={pictures} />
        <Sheet accommodation={accommodation} />
        <div className="collapses">
          <Collapse title="Description" content={description} />
          <Collapse title="Équipements" content={equipments} />
        </div>
      </div>
    );
  }
};

export default AccommodationDetails;
