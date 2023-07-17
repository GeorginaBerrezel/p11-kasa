import React from "react";
import "./style.css";


const Sheet = ({ accommodation }) => {
  const { title, host, rating, location, tags } = accommodation;

  // Fonction pour générer les tags avec style individuel
  const renderTags = () => {
    return tags.map((tag, index) => (
      <span key={index} className="tag" style={{ color: '#ffffff', backgroundColor: '#FF6060', borderRadius: '10px', marginRight: '10px', padding: '5px 15px', fontSize: '14px', fontWeight: '500'  }}>
        {tag}
      </span>
    ));
  };

  // Fonction pour générer les étoiles
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="star-rating" style={{ fontSize: '36px' }}>
        {[...Array(fullStars)].map((_, index) => (
          <i key={`full-${index}`} className="fas fa-star" style={{ color: '#FF6060' }} />
        ))}
        {halfStar && <i className="fas fa-star-half-alt" style={{ color: '#FF6060' }} />}
        {[...Array(emptyStars)].map((_, index) => (
          <i key={`empty-${index}`} className="fas fa-star" style={{ color: '#E3E3E3' }} />
        ))}
      </div>
    );
  };

  return (
    <div className="sheet">
      <div className="info-sheet">
        <div className="place-sheet">
            <div className="title-sheet">
            <h2>{title}</h2>
            </div>
            <div className="location-sheet">
            <p>{location}</p>
            </div>
        </div>
        <div className="host">
          <div className="name-host">
            <p>{host.name}</p>
          </div>
          <div className="picture-host">
            <img src={host.picture} alt="Host" />
          </div>
        </div>
      </div>
      <div className="rating-sheet">
        <div className="tags-rating">
        <p>{renderTags()}</p>
        </div>
        {renderStars()} {/* Appel de la fonction pour afficher les étoiles */}
      </div>
    </div>
  );
};

export default Sheet;
