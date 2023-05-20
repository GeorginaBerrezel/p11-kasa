import React from "react";
function Thumbnail(props) {
    const { title, cover } = props;

  return (
    <div className="thumbnail" >
      <img src={cover} alt={title} />
      <h2 className="thumbnail-title">{title}</h2>
    </div>
  );
}

export default Thumbnail;
  