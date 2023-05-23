import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import Accommodation from "../../components/Accommodation/Accommodation";
import jsonData from "../../logements.json";

export default function Home() {
  const [selectedAccommodationId, setSelectedAccommodationId] = useState(null);

  const getGalleryItems = () => {
    return jsonData.map((accommodation) => (
      <Link key={accommodation.id} to={`/accommodation/${accommodation.id}`}>
        <Thumbnail
          title={accommodation.title}
          cover={accommodation.cover}
          onClick={() => setSelectedAccommodationId(accommodation.id)}
        />
      </Link>
    ));
  };

  return (
    <div className="section-home">
      <div className="section-content">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="gallery-row">
        {selectedAccommodationId ? (
          <Accommodation id={selectedAccommodationId} />
        ) : (
          getGalleryItems()
        )}
      </div>
    </div>
  );
}
