import React from 'react';
import Accommodation from './Accomodation';
import Header from './Header';
import SectionHome from './Sectionhome'; // Import du composant SectionHome

const App = () => {
  const jsonData = [
    {
      "id": "c67ab8a7",
      "title": "Appartement cosy",
      "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      "pictures": [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
      ]
    },
    // Ajoutez d'autres objets de données ici
  ];

  return (
    <div>
      <Header /> {/* Ajout du composant Header */}
      <SectionHome /> {/* Ajout du composant SectionHome */}
      {jsonData.map((accommodation) => (
        <Accommodation
          key={accommodation.id}
          title={accommodation.title}
          cover={accommodation.cover}
          pictures={accommodation.pictures}
        />
      ))}
    </div>
  );
};

export default App;
