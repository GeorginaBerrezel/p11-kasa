import React from 'react';
import Header from './Header';
import SectionHome from './Sectionhome';
import Thumbnail from './Thumbnail';
import jsonData from './logements.json';

const App = () => {
  const getGalleryItems = () => {
    return jsonData.map((accommodation) => (
      <Thumbnail
        key={accommodation.id}
        title={accommodation.title}
        cover={accommodation.cover}
      />
    ));
  };

  return (
    <div>
      <Header />
      <SectionHome />

      <div className="gallery-row">
        {getGalleryItems()}
      </div>
    </div>
  );
};

export default App;
