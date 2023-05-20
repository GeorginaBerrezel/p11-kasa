import React from 'react';
import Header from './Header';
import SectionHome from './Sectionhome';
import Thumbnail from './Thumbnail';
import Accommodation from './Accommodation'; // Correction ici
import { useState } from 'react';
import jsonData from './logements.json';

const App = () => {
  const [selectedAccommodationId, setSelectedAccommodationId] = useState(null);
  const getGalleryItems = () => {
    return jsonData.map((accommodation) => (
      <Thumbnail
        key={accommodation.id}
        title={accommodation.title}
        cover={accommodation.cover}
        onClick={() => setSelectedAccommodationId(accommodation.id)}
      />
    ));
  };

  return (
    <div>
      <Header />
      <SectionHome />

      <div className="gallery-row">
      {selectedAccommodationId ? (
        <Accommodation id={selectedAccommodationId} />
      ) : (
        getGalleryItems()
      )}
    </div>
    </div>
  );
};

export default App;
