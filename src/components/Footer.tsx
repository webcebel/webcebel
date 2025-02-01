import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../styles/components/footer.css';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-container">
      <div className="left-section">
        <img 
          src="/images/logos/logo-cebel.png" 
          alt="CEBEL Logo" 
          className="footer-logo"
        />
        <div className="copyright-text">
          <p>© 2023 CEBEL Internacional</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>

      <div className="right-section">
        <div className="footer-column">
          <h4>Contacto</h4>
          <ul>
            <li><FaEnvelope /> contacto@cebelglobal.org</li>
            <li>+1 (305) 123-4567</li>
            <li>Av. Principal 123, Miami, FL</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;