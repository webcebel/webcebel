import '../styles/sections/about.css';

const AboutSection = () => (
  <section className="about-section">
    <div className="section-container">
      <h2>Nuestra historia</h2>
      <div className="content-grid">
        <div className="text-content">
          <p>Fundada en 2023 por 12 expertos internacionales, CEBEL trabaja para:</p>
          <ul className="mission-list">
            <li>Certificación de estándares laborales</li>
            <li>Investigación aplicada en bienestar organizacional</li>
            <li>Formación ejecutiva en políticas laborales</li>
          </ul>
        </div>
        <div className="image-content">
          <img 
            src="/src/assets/images/about-team.jpg" 
            alt="Equipo CEBEL" 
            className="about-image"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;