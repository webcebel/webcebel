import '../styles/components/hero.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>"Liderando la Revolución del Bienestar Laboral"</h1>
      <p>Somos el puente entre la excelencia corporativa y el crecimiento humano.
      Líderes en bienestar laboral estratégico desde 2023</p>
      <div className="cta-container">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScOapwQ8AhbfbJxWz6sHQs5poS9ByM2oZ_eTLjpwQ36oNsVzA/viewform?usp=sharing" className="cta-primary">Únete al cambio</a>
        <a href="https://www.youtube.com/watch?v=V29myFICYxg" className="cta-secondary">Ver video institucional</a>
      </div>
    </div>
  </section>
);

export default HeroSection;