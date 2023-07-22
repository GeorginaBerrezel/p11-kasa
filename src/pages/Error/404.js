import React from "react";
import { Link, Route, Switch } from "react-router-dom";
// import Home from "./Home"; // Assurez-vous que vous avez importé correctement votre composant Home
import "./style.css";

const Error404 = () => {
  return (
    <div className="error-404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="return-home-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error404;
