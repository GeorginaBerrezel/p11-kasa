import React from 'react';
import logo from '../../assets/svg/kasa-logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/a-propos">À propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
