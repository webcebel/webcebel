import '../styles/sections/mission.css';

const MissionSection = () => (
  <section className="mission-section">
    <div className="section-container">
      <div className="mission-grid">
        <div className="mission-card">
          <h3>Nuestra Misión</h3>
          <p>Impulsar la transformación cultural en las organizaciones mediante:</p>
          <ul className="mission-list">
            <li>Programas de certificación internacional</li>
            <li>Investigación aplicada en bienestar laboral</li>
            <li>Formación ejecutiva especializada</li>
          </ul>
        </div>

        <div className="vision-card">
          <h3>Nuestra Visión 2030</h3>
          <p>Ser el referente global en la creación de estándares de bienestar laboral sostenible, impactando a:</p>
          <div className="vision-stats">
            <div className="stat-item">
              <h4>1M+</h4>
              <p>Profesionales certificados</p>
            </div>
            <div className="stat-item">
              <h4>50+</h4>
              <p>Países con programas activos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MissionSection;