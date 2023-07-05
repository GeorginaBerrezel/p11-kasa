import React from "react";
import './style.css';

function Thumbnail(props) {
    const { title, cover, onClick } = props;

  return (
    <div className="thumbnail" onClick={onClick}>
      <img src={cover} alt={title} />
      <h2 className="thumbnail-title">{title}</h2>
    </div>
  );
}

export default Thumbnail;
  