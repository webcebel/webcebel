import '../styles/components/hero.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Transformando el futuro laboral</h1>
      <p>Expertos globales en bienestar organizacional desde 2023</p>
      <div className="cta-container">
        <a href="/voluntariado" className="cta-primary">Únete al cambio</a>
        <a href="#" className="cta-secondary">Ver video institucional</a>
      </div>
    </div>
  </section>
);

export default HeroSection;