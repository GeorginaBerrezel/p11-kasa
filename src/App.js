import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import SectionHome from "./Sectionhome";
import Thumbnail from "./Thumbnail";
import Accommodation from "./Accommodation";
import AccommodationDetails from "./AccommodationDetails";
import { useState } from "react";
import jsonData from "./logements.json";
import Footer from "./Footer";


const App = () => {
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
    <Router>
      <div>
        <Header />
        <SectionHome />
  
        <Routes>
          <Route path="/" element={<div className="gallery-row">{selectedAccommodationId ? (
            <Accommodation id={selectedAccommodationId} />
          ) : (
            getGalleryItems()
          )}</div>} />
  
          <Route path="/accommodation/:id" element={<AccommodationDetails />} />
        </Routes>
  
        <Footer />
      </div>
    </Router>
  );
  
  
};

export default App;
