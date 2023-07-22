import React from "react";
import Collapse from "../../components/Collapse/Collapse";
import aproposData from "../../apropos.json";

export default function About() {
  return (
    <div>
      <div className="section-about-us">
        {/* Insérer ici le contenu de la div "section-about-us" */}
      </div>
      <div className="collapses-container">
        {aproposData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}
