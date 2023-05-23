import React from 'react';
import logo from '../../assets/svg/kasa-logo-white.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;