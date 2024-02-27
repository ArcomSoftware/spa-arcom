import react from 'react';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <ul className="icons">
          <a href="https://fr.linkedin.com/in/lucas-siani-347653171?trk=public_profile_browsemap_profile-result-card_result-card_full-click">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/lucassianifaure/">
            {' '}
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://github.com/Lucas199525">
            <i className="fa-brands fa-github"></i>
          </a>
          <i className="fa-solid fa-envelope"></i>
        </ul>
        <ul className="copyright">
          <li>&copy; ARCOM</li>
          <li>
            Design: <a href=""> by LUCAS SIANI</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
