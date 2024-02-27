/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ARCOM
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#about">A Propos</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/lucas-siani-347653171"
          target={'_blank'}
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Lucas199525?tab=repositories"
          target={'_blank'}
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a href="https://instagram.com" target={'_blank'} rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://facebook.com" target={'_blank'} rel="noreferrer">
          {' '}
          <BsFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ARCOM. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
