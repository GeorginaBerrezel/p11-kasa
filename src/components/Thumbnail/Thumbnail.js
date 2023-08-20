import React from "react";
import './style.css';

function Thumbnail(props) {
    const { title, cover, onClick, id } = props;

    return (
        <div className="thumbnail" onClick={onClick}>
            <div className="overlay"></div>
            <h1>{id}</h1>
            <img src={cover} alt={title} />
            <h2 className="thumbnail-title">{title}</h2>
        </div>
    );
}

export default Thumbnail;
