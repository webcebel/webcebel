import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="navbar">
        <Link to="/">
          <img 
            src="/src/assets/images/logo-cebel.png" 
            alt="CEBEL Logo" 
            className="logo"
          />
        </Link>
        <nav className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/quienes-somos" className="nav-item">
            ¿Quiénes somos?
          </Link>
          <Link to="/revista" className="nav-item">
            Revista CEBEL
          </Link>
          <Link to="/material-educativo" className="nav-item">
            Subcomisiones
          </Link>
          <div className="volunteer-button">
            <a 
              href="https://forms.google.com/tu-formulario" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Voluntariado
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;