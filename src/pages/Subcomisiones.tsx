import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/subcomisiones.css';

interface Subcomision {
  nombre: string;
  descripcion: string;
  objetivos: string[];
}

const SubcomisionesPage: FC = () => {
  const subcomisiones: Subcomision[] = [
    {
      nombre: "Comunicación",
      descripcion: "Responsable de gestionar y coordinar todas las comunicaciones internas y externas de CEBEL, asegurando una transmisión efectiva de nuestro mensaje y valores.",
      objetivos: [
        "Gestionar las redes sociales y canales de comunicación",
        "Desarrollar estrategias de comunicación efectiva",
        "Crear y mantener la identidad visual de CEBEL",
        "Coordinar la difusión de eventos y actividades"
      ]
    },
    {
      nombre: "Sensibilización",
      descripcion: "Encargada de crear conciencia sobre la importancia del bienestar laboral y su impacto en las organizaciones y la sociedad.",
      objetivos: [
        "Desarrollar campañas de concientización",
        "Organizar eventos y talleres de sensibilización",
        "Crear contenido educativo sobre bienestar laboral",
        "Promover buenas prácticas en el entorno laboral"
      ]
    },
    {
      nombre: "Certificación Internacional BIENESTAR CEBEL",
      descripcion: "Dedicada al desarrollo y gestión del programa de certificación internacional en bienestar laboral, estableciendo estándares de calidad.",
      objetivos: [
        "Desarrollar estándares de certificación",
        "Diseñar procesos de evaluación",
        "Gestionar el programa de certificación",
        "Mantener la calidad y prestigio de la certificación"
      ]
    },
    {
      nombre: "Formación",
      descripcion: "Enfocada en el desarrollo de programas educativos y de capacitación en temas relacionados con el bienestar laboral.",
      objetivos: [
        "Diseñar programas de formación especializados",
        "Coordinar actividades educativas",
        "Desarrollar materiales de aprendizaje",
        "Evaluar y mejorar la calidad de la formación"
      ]
    }
  ];

  return (
    <div className="subcomisiones-page">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>Subcomisiones</h1>
          <p className="subtitle">Equipos especializados trabajando por el bienestar laboral</p>
        </section>

        <section className="subcomisiones-grid">
          <div className="container">
            {subcomisiones.map((subcomision, index) => (
              <div key={index} className="subcomision-card">
                <h2>{subcomision.nombre}</h2>
                <p className="descripcion">{subcomision.descripcion}</p>
                <div className="objetivos">
                  <h3>Objetivos Principales:</h3>
                  <ul>
                    {subcomision.objetivos.map((objetivo, idx) => (
                      <li key={idx}>{objetivo}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="join-section">
          <div className="container">
            <h2>¿Te gustaría participar?</h2>
            <p>Únete a una de nuestras subcomisiones y contribuye al bienestar laboral global</p>
            <a 
              href="https://forms.google.com/tu-formulario" 
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Postular a una subcomisión
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SubcomisionesPage;