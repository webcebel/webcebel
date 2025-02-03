import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
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
        
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`navLinks ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/quienes-somos" 
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            ¿Quiénes somos?
          </Link>
          <Link 
            to="/revista" 
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Revista CEBEL
          </Link>
          <Link 
            to="/subcomisiones" 
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Subcomisiones
          </Link>
          <Link 
            to="/onboarding" 
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Onboarding
          </Link>
          {/*<Link 
            to="/material-educativo" 
            className="nav-item"
            onClick={() => setIsMenuOpen(false)}
          >
            Material Educativo
          </Link>*/}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScOapwQ8AhbfbJxWz6sHQs5poS9ByM2oZ_eTLjpwQ36oNsVzA/viewform?usp=sharing"             className="volunteer-button"
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