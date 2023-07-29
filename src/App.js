import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "../src/components/Header/Header";
import Thumbnail from "../src/components/Thumbnail/Thumbnail";
import Footer from "../src/components/Footer/Footer";
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Test from "../src/pages/Test/Test";
import Accommodation from "./pages/Accommodation/Accommodation";
import AccommodationDetails from "./pages/Accommodation/AccommodationDetails";
import Error404 from "./pages/Error/404"; // Importez correctement votre composant Error404
import jsonData from "./logements.json";

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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route
            path="/"
            element={
              <div className="gallery-row">
                {selectedAccommodationId ? (
                  <Accommodation id={selectedAccommodationId} />
                ) : (
                  getGalleryItems()
                )}
              </div>
            }
          />

          <Route path="/accommodation/:id" element={<AccommodationDetails />} />

          {/* Ajouter la route pour la page 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
