// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('logements.json')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//         <div>
//           <h1>Liste des logements :</h1>
//           <ul>
//             {data.map(logement => (
//               <li key={logement.id}>{logement.title}</li>
//               // créer un composants
//               // props les info
//               // gerer les roots
//               // nouvelle page logement
//               // composant header
//               // composant footer
//             ))}
//           </ul>
//         </div>
//       );
// }

// export default App;


import React from 'react';
import Accommodation from './Accomodation'; // Importez le composant

const App = () => {
  // Exemple de données JSON
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
