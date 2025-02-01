import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="navbar">
        <Link to="/" className="logo-link">
          <img 
            src="/images/logos/logo-cebel.png" 
            alt="CEBEL Logo" 
            className="logo"
          />
        </Link>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>

        <nav className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/quienes-somos" className="nav-item">
            ¿Quiénes somos?
          </Link>
          <Link to="/revista" className="nav-item">
            Revista CEBEL
          </Link>
          <Link to="/subcomisiones" className="nav-item">
            Subcomisiones
          </Link>
          <Link to="/onboarding" className="nav-item">
            Onboarding
          </Link>
          <Link to="/material-educativo" className="nav-item">
            Material Educativo
          </Link>
          <a 
            href="https://forms.google.com/tu-formulario" 
            className="volunteer-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voluntariado
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;