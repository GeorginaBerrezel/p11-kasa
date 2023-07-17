import React, { useState } from "react";
import "./style.css";

function Carrousel(props) {
  const { pictures } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  // Calculer le numéro de la photo actuelle (index + 1) et le nombre total de photos
  const currentImageNumber = currentIndex + 1;
  const totalImages = pictures.length;

  return (
    <div className="carrousel
    ">
      <button className="arrow-button prev" onClick={prevImage}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <img src={pictures[currentIndex]} alt={`Image ${currentImageNumber}/${totalImages}`} />
      <button className="arrow-button next" onClick={nextImage}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <p className="image-count">{`${currentImageNumber}/${totalImages}`}</p>
    </div>
  );
}

export default Carrousel;
