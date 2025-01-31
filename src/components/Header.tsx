import { Link } from 'react-router-dom';
import '../styles/components/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <Link to="/">
          <img 
            src="/images/logos/logo-cebel.png" 
            alt="CEBEL Logo" 
            className="logo"
          />
        </Link>
        <nav className="navLinks">
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