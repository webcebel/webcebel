import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFileAlt, FaYoutube, FaBook, FaUsers } from 'react-icons/fa';
import '../styles/pages/onboarding.css';

interface ResourceLink {
  title: string;
  description: string;
  url: string;
  icon: JSX.Element;
}

const OnboardingPage: FC = () => {
  const resources: ResourceLink[] = [
    {
      title: "Guía del Voluntario",
      description: "Documento completo con toda la información necesaria para comenzar.",
      url: "#",
      icon: <FaFileAlt className="resource-icon" />
    },
    {
      title: "Video de Bienvenida",
      description: "Conoce a nuestro equipo y aprende sobre nuestra misión.",
      url: "#",
      icon: <FaYoutube className="resource-icon" />
    },
    {
      title: "Manual de Procesos",
      description: "Guía detallada de nuestros procedimientos y metodologías.",
      url: "#",
      icon: <FaBook className="resource-icon" />
    },
    {
      title: "Grupos de Trabajo",
      description: "Información sobre nuestros diferentes equipos y sus proyectos.",
      url: "#",
      icon: <FaUsers className="resource-icon" />
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Bienvenida",
      description: "Revisa el material introductorio y conoce los aspectos fundamentales de CEBEL."
    },
    {
      number: "02",
      title: "Documentación",
      description: "Familiarízate con nuestros procesos, políticas y herramientas de trabajo."
    },
    {
      number: "03",
      title: "Integración",
      description: "Únete a tu equipo asignado y comienza a participar en los proyectos activos."
    },
    {
      number: "04",
      title: "Seguimiento",
      description: "Mantén comunicación regular con tu líder de equipo y participa en las reuniones semanales."
    }
  ];

  return (
    <div className="onboarding-page">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>Onboarding CEBEL</h1>
          <p className="subtitle">Todo lo que necesitas para comenzar tu viaje con nosotros</p>
        </section>

        <section className="welcome-section">
          <div className="container">
            <h2>Bienvenido al Equipo</h2>
            <p className="welcome-text">
              Estamos emocionados de tenerte con nosotros. Este espacio está diseñado para 
              ayudarte a integrarte de manera efectiva a nuestro equipo y comenzar a contribuir 
              con nuestra misión de transformar el bienestar laboral.
            </p>
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <h2>Proceso de Integración</h2>
            <div className="steps-grid">
              {steps.map((step) => (
                <div key={step.number} className="step-card">
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="resources-section">
          <div className="container">
            <h2>Recursos Disponibles</h2>
            <div className="resources-grid">
              {resources.map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.url} 
                  className="resource-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon-container">
                    {resource.icon}
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="support-section">
          <div className="container">
            <h2>¿Necesitas Ayuda?</h2>
            <p>
              Si tienes alguna duda o necesitas asistencia durante tu proceso de onboarding, 
              no dudes en contactar a nuestro equipo de soporte:
            </p>
            <div className="contact-info">
              <p>Email: comiteinternacionalcebel@gmail.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OnboardingPage;