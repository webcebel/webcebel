import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/subcomisiones.css';

interface Subcomision {
  nombre: string;
  descripcion: string;
  objetivos: string[];
  coordinador: string;
}

const SubcomisionesPage: FC = () => {
  const subcomisiones: Subcomision[] = [
    {
      nombre: "Comité de Sensibilización",
      descripcion: "Encargada de promover la conciencia sobre la importancia del bienestar laboral y su impacto en las organizaciones.",
      objetivos: [
        "Desarrollar campañas de concientización",
        "Crear contenido educativo",
        "Organizar eventos de difusión"
      ],
      coordinador: "Nombre del Coordinador"
    },
    {
      nombre: "Subcomisión de Investigación",
      descripcion: "Dedicada a la investigación y análisis de tendencias en bienestar laboral a nivel global.",
      objetivos: [
        "Realizar estudios de campo",
        "Publicar informes periódicos",
        "Establecer métricas y estándares"
      ],
      coordinador: "Nombre del Coordinador"
    },
    {
      nombre: "Subcomisión de Comunicación",
      descripcion: "Responsable de la estrategia y ejecución de la comunicación interna y externa.",
      objetivos: [
        "Gestionar redes sociales",
        "Producir boletines informativos",
        "Coordinar comunicaciones oficiales"
      ],
      coordinador: "Nombre del Coordinador"
    },
    {
      nombre: "Subcomisión de Onboarding",
      descripcion: "Encargada de la integración y capacitación de nuevos miembros al equipo.",
      objetivos: [
        "Diseñar proceso de onboarding",
        "Crear material de capacitación",
        "Dar seguimiento a nuevos miembros"
      ],
      coordinador: "Nombre del Coordinador"
    }
  ];

  return (
    <div className="subcomisiones-page">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>Subcomisiones</h1>
          <p className="subtitle">Conoce nuestros equipos de trabajo especializados</p>
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
                <div className="coordinador">
                  <p>Coordinador: <span>{subcomision.coordinador}</span></p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="join-section">
          <div className="container">
            <h2>¿Te gustaría participar?</h2>
            <p>Únete a uno de nuestros equipos y contribuye al bienestar laboral global.</p>
            <a href="#" className="cta-button">Postular a una subcomisión</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SubcomisionesPage;