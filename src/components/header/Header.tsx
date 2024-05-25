import HeaderSocials from './HeaderSocials';
import './header.css';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <HeaderSocials />
        <div className="me">
        <img src= 'logoAr.png'/>
        </div>
        <a href="#contact" className="scroll__down Down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
