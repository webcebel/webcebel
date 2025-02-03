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
            <li><FaEnvelope /> comiteinternacionalcebel@gmail.com</li>
            <li>160 W Evergreen Ave., Suite 290, Longwood, FL 32750</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/comision-internacional-de-expertos-en-bienestar-laboral-cebel/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;