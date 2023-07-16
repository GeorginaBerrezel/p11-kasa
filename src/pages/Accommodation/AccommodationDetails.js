import React from "react";
import { useParams } from "react-router-dom";

// import Thumbnail from "../../components/Thumbnail/Thumbnail";
import Gallery from "../../components/Gallery/Gallery";
import jsonData from "../../logements.json";

const AccommodationDetails = () => {
  const { id } = useParams();

  const accommodation = jsonData.find((accommodation) => accommodation.id === id);
  if (!accommodation) {
    return <div>Aucun hébergement trouvé pour cet ID</div>;
  } else {
    const { pictures } = accommodation; // Déplacer cette ligne ici

    return (
      <Gallery pictures={pictures} />

      // <Thumbnail
      //   id={accommodation.id}
      //   title={accommodation.title}
      //   cover={accommodation.cover}
      // />
    );
  }
};

export default AccommodationDetails;
