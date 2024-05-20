import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour je m'appel</h5>
        <h1>Lucas SIANI</h1>
        <h5>Je suis</h5>
        <h5 className="text-light">
          Developpeur Front et Back <br /> et Technicien Informatique
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
        <video className='video'autoPlay muted loop>
          <source src={'logo.mp4'} type='video/mp4' />
          </video>
        </div>
        <a href="#contact" className="scroll__down Down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
