import React from 'react';
import { NavLink } from 'react-router-dom'; // Importer NavLink au lieu de a
import logo from '../../assets/svg/kasa-logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active-link">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" activeClassName="active-link">À propos</NavLink>
          </li>
          <li>
            <NavLink to="/test" activeClassName="active-link">Test</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
