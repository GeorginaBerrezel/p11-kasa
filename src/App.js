import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from "../src/components/Header/Header";
// import SectionHome from "./Sectionhome";
import Thumbnail from "../src/components/Thumbnail/Thumbnail";
// import Accommodation from "./components/Accommodation/Accommodation";
// import AccommodationDetails from "./AccommodationDetails";
// import { useState } from "react";
// import jsonData from "./logements.json";
import Footer from "../src/components/Footer/Footer";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";

const App = () => {
  // const [selectedAccommodationId, setSelectedAccommodationId] = useState(null);
  // const getGalleryItems = () => {
  //   return jsonData.map((accommodation) => (
  //     <Link key={accommodation.id} to={`/accommodation/${accommodation.id}`}>
  //       <Thumbnail
  //         title={accommodation.title}
  //         cover={accommodation.cover}
  //         onClick={() => setSelectedAccommodationId(accommodation.id)}
  //       />
  //     </Link>
  //   ));
  // };

  return (
    // <Router>
    //   <div>
    //     <Header />
    //     <SectionHome />

    //     <Routes>
    //       <Route path="/" element={<div className="gallery-row">{selectedAccommodationId ? (
    //         <Accommodation id={selectedAccommodationId} />
    //       ) : (
    //         getGalleryItems()
    //       )}</div>} />

    //       <Route path="/accommodation/:id" element={<AccommodationDetails />} />
    //     </Routes>

    //     <Footer />
    //   </div>
    // </Router>
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
