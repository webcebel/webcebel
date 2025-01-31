import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/material-educativo.css';

interface MaterialItem {
  titulo: string;
  descripcion: string;
  link: string;
  tipo?: string;
  duracion?: string;
}

interface CategoriaItem {
  categoria: string;
  items: MaterialItem[];
}

const MaterialEducativo: FC = () => {
  const materiales: CategoriaItem[] = [
    {
      categoria: "Guías y Manuales",
      items: [
        {
          titulo: "Manual de Bienestar Organizacional",
          descripcion: "Guía completa para implementar programas de bienestar en tu organización.",
          tipo: "PDF",
          link: "#"
        },
        {
          titulo: "Kit de Herramientas para Líderes",
          descripcion: "Recursos prácticos para gestionar equipos con enfoque en el bienestar.",
          tipo: "PDF",
          link: "#"
        }
      ]
    },
    {
      categoria: "Cursos Online",
      items: [
        {
          titulo: "Fundamentos del Bienestar Laboral",
          descripcion: "Curso introductorio a los conceptos clave del bienestar organizacional.",
          duracion: "4 horas",
          link: "#"
        },
        {
          titulo: "Certificación en Gestión del Bienestar",
          descripcion: "Programa avanzado para profesionales de RRHH y líderes.",
          duracion: "20 horas",
          link: "#"
        }
      ]
    },
    {
      categoria: "Recursos Multimedia",
      items: [
        {
          titulo: "Webinars Grabados",
          descripcion: "Colección de presentaciones y conferencias sobre temas actuales.",
          tipo: "Video",
          link: "#"
        },
        {
          titulo: "Podcast CEBEL",
          descripcion: "Conversaciones con expertos sobre bienestar laboral.",
          tipo: "Audio",
          link: "#"
        }
      ]
    }
  ];

  return (
    <div className="material-educativo-page">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>Material Educativo</h1>
          <p className="subtitle">Recursos para el desarrollo profesional y organizacional</p>
        </section>

        <section className="materiales-content">
          <div className="container">
            {materiales.map((categoria, index) => (
              <div key={index} className="categoria-section">
                <h2>{categoria.categoria}</h2>
                <div className="materiales-grid">
                  {categoria.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="material-card">
                      <div className="material-info">
                        <h3>{item.titulo}</h3>
                        <p>{item.descripcion}</p>
                        {item.tipo && (
                          <span className="material-type">{item.tipo}</span>
                        )}
                        {item.duracion && (
                          <span className="material-duration">{item.duracion}</span>
                        )}
                      </div>
                      <a href={item.link} className="download-button">
                        Acceder al material
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="solicitud-section">
              <h2>¿Necesitas material específico?</h2>
              <p>Contáctanos para solicitar recursos personalizados para tu organización.</p>
              <a href="mailto:contacto@cebelglobal.org" className="contact-button">
                Contactar
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MaterialEducativo;