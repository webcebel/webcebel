import '../styles/components/footer.css';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-container">
      <div className="footer-column">
        <img 
          src="/src/assets/images/logo-cebel.png" 
          alt="CEBEL Logo" 
          className="footer-logo"
        />
        <p>© 2025 CEBEL Internacional<br/>Todos los derechos reservados</p>
      </div>

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
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;