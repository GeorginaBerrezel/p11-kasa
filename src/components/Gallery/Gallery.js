import React, { useState } from "react";
import "./style.css";

function Gallery(props) {
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
    <div className="gallery">
      <button className="prev" onClick={prevImage}>
        &lt;
      </button>
      <img src={pictures[currentIndex]} alt={`Image ${currentImageNumber}/${totalImages}`} />
      <button className="next" onClick={nextImage}>
        &gt;
      </button>
      <p className="image-count">{`${currentImageNumber}/${totalImages}`}</p>
    </div>
  );
}

export default Gallery;
