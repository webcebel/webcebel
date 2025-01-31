import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/quienes-somos.css';

const QuienesSomos: FC = () => {
  const directiva = [
    {
      nombre: "Anna Traverso",
      cargo: "Presidenta",
      pais: "Chile - Estados Unidos",
      imagen: "./src/assets/images/team/anna-traverso.png"
    },
    {
      nombre: "Lina De Giglio",
      cargo: "Vicepresidenta",
      pais: "Argentina - España",
      imagen: "./src/assets/images/team/lina-degiglio.png"
    },
    {
      nombre: "Eloy Casique",
      cargo: "Secretario General",
      pais: "Venezuela",
      imagen: "./src/assets/images/team/eloy-casique.png"
    },
    {
      nombre: "Francisco Florian",
      cargo: "Secretario General",
      pais: "Estados Unidos",
      imagen: "./src/assets/images/team/francisco-florian.png"
    }
  ];

  const cofundadores = [
    {
      nombre: "Anna Traverso",
      cargo: "Presidenta",
      pais: "Estados Unidos",
      imagen: "./src/assets/images/team/anna-traverso.png"
    },
    {
      nombre: "Francisco Florian",
      cargo: "Secretario General",
      pais: "Estados Unidos",
      imagen: "./src/assets/images/team/francisco-florian.png"
    },
    {
      nombre: "Eloy Casique",
      cargo: "Secretario General",
      pais: "Venezuela",
      imagen: "./src/assets/images/team/eloy-casique.png"
    },
    {
      nombre: "Lina De Giglio",
      cargo: "Vicepresidenta",
      pais: "Estados Unidos",
      imagen: "./src/assets/images/team/lina-degiglio.png"
    },
    {
      nombre: "Christian L.A. Ramos J.",
      cargo: "Cofundador",
      pais: "Estados Unidos",
      imagen: "./src/assets/images/team/christian-ramos.png"
    },
    {
      nombre: "Paulina Puelma Rojas",
      cargo: "Cofundador",
      pais: "Chile",
      imagen: "./src/assets/images/team/paulina-puelma.png"
    },
    {
      nombre: "Ramíro Murillo",
      cargo: "Cofundador",
      pais: "Colombia",
      imagen: "./src/assets/images/team/ramiro-murillo.png"
    },
    {
      nombre: "Sergio Molina",
      cargo: "Cofundador",
      pais: "México",
      imagen: "./src/assets/images/team/sergio-molina.png"
    },
    {
      nombre: "Ale Camarena",
      cargo: "Cofundador",
      pais: "México",
      imagen: "./src/assets/images/team/ale-camarena.png"
    },
    {
      nombre: "Mauricio Cáceres",
      cargo: "Cofundador",
      pais: "Colombia",
      imagen: "./src/assets/images/team/mauricio-caceres.png"
    },
    {
      nombre: "Elizabeth Ordoñez",
      cargo: "Cofundador",
      pais: "Ecuador",
      imagen: "./src/assets/images/team/elizabeth-ordonez.png"
    },
    {
      nombre: "Beatriz Crespo",
      cargo: "Cofundador",
      pais: "España",
      imagen: "./src/assets/images/team/beatriz-crespo.png"
    },
    {
      nombre: "Dr. Eduardo Vásquez",
      cargo: "Cofundador",
      pais: "Venezuela",
      imagen: "./src/assets/images/team/eduardo-vasquez.png"
    }
  ];

  return (
    <div className="quienes-somos-page">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>¿Quiénes Somos?</h1>
          <p className="subtitle">Conoce al equipo que hace posible CEBEL</p>
        </section>

        <section className="about-section">
  <div className="container">
    <h2>Nuestra Historia</h2>
    <div className="content-block">
      <p className="block-text">
        La Comisión Internacional de Expertos en Bienestar Laboral (CEBEL) es una organización líder dedicada a la transformación y mejora de los entornos laborales a nivel global. Establecida en 2023 con sede en Florida, Estados Unidos, la institución surgió como respuesta a las crecientes demandas del entorno laboral contemporáneo, con el propósito fundamental de elevar los estándares del bienestar en las organizaciones modernas.
      </p>
      <p className="block-text">
        CEBEL se distingue por su estructura de gobierno robusta y su enfoque científico-profesional, respaldado por un equipo directivo y técnico de alto nivel, compuesto por especialistas de múltiples nacionalidades. La institución fundamenta su actuación en siete ejes estratégicos: sensibilización, educación, conexión, promoción, investigación, innovación y certificación en el ámbito del bienestar laboral.
      </p>
      <p className="block-text">
        La metodología institucional se sustenta en un modelo de gestión integrado que comprende sesiones de coordinación periódicas, grupos de trabajo especializados, eventos de alcance internacional y una red de comunicación permanente entre sus miembros. Este sistema se fortalece mediante alianzas estratégicas con instituciones académicas, organizaciones no gubernamentales y entidades empresariales comprometidas con la excelencia en bienestar laboral.
      </p>  
      <p className="block-text">
        La Comisión mantiene un firme compromiso con la inclusión y la responsabilidad social corporativa, garantizando la representación y participación activa de diversos sectores y regiones geográficas. Su visión estratégica se alinea con los principios del desarrollo sostenible, trabajando consistentemente en la consolidación de una cultura laboral donde el bienestar constituya un elemento fundamental en toda organización.
      </p>
    </div>
  </div>
</section>

        <section className="directiva-section">
          <div className="container">
            <h2>Directiva</h2>
            <div className="team-grid">
              {directiva.map((miembro, index) => (
                <div key={index} className="team-card">
                  <img src={miembro.imagen} alt={miembro.nombre} />
                  <h3>{miembro.nombre}</h3>
                  <p className="cargo">{miembro.cargo}</p>
                  <p className="pais">{miembro.pais}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cofundadores-section">
          <div className="container">
            <h2>Cofundadores</h2>
            <div className="team-grid">
              {cofundadores.map((cofundador, index) => (
                <div key={index} className="team-card">
                  <img src={cofundador.imagen} alt={cofundador.nombre} />
                  <h3>{cofundador.nombre}</h3>
                  <p className="cargo">{cofundador.cargo}</p>
                  <p className="pais">{cofundador.pais}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="embajadores-section">
          <div className="container">
            <h2>Embajadores del Día Mundial del Bienestar Laboral</h2>
            <p>Conoce a nuestros embajadores que promueven el bienestar laboral alrededor del mundo.</p>
            <a 
              href="https://url-de-la-web-de-embajadores" 
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Embajadores
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuienesSomos;