import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFilePdf, FaArrowRight } from 'react-icons/fa';
import '../styles/pages/revista.css';

interface Revista {
  id: number;
  titulo: string;
  edicion: string;
  portada: string;
  descripcion: string;
  pdfUrl: string;
  fecha: string;
}

const RevistaPage: FC = () => {
  const revistas: Revista[] = [
    {
      id: 1,
      titulo: "Construyendo las Bases del Bienestar Laboral",
      edicion: "Edición 1",
      portada: "/pdfs/revista/cebel1.png",
      descripcion: "Una exploración fundamental de los pilares que sostienen el bienestar en el trabajo, desde los vínculos laborales hasta la diversidad e inclusión, presentando la visión y misión de CEBEL como nueva organización dedicada a transformar los entornos laborales.",
      pdfUrl: "/pdfs/revista1.pdf",
      fecha: "Noviembre 2023"
    },
    {
      id: 2,
      titulo: "Innovación y Bienestar: Hacia una Nueva Cultura Organizacional",
      edicion: "Edición 2",
      portada: "/pdfs/revista/cebel1.png",
      descripcion: "Una mirada profunda a cómo la innovación, el bienestar físico y el pensamiento disruptivo pueden transformar la cultura organizacional, incluyendo entrevistas exclusivas y perspectivas expertas sobre la construcción de ambientes laborales más saludables y productivos.",
      pdfUrl: "/pdfs/revista2.pdf",
      fecha: "Enero 2024"
    }
  ];

  const handleOpenPdf = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="revista-page">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>Revista CEBEL</h1>
          <p className="subtitle">Conocimiento e investigación en bienestar laboral</p>
        </section>

        <section className="revista-content">
          <div className="container">
            <div className="revista-grid">
              {revistas.map((revista) => (
                <div key={revista.id} className="revista-card">
                  <div className="revista-cover">
                    <img src={revista.portada} alt={revista.titulo} />
                    <div className="revista-overlay">
                      <button
                        className="read-button"
                        onClick={() => handleOpenPdf(revista.pdfUrl)}
                      >
                        <FaFilePdf /> Leer PDF
                      </button>
                    </div>
                  </div>
                  <div className="revista-info">
                    <div className="revista-header">
                      <span className="edicion">{revista.edicion}</span>
                      <span className="fecha">{revista.fecha}</span>
                    </div>
                    <h3>{revista.titulo}</h3>
                    <p>{revista.descripcion}</p>
                    <button
                      className="read-more"
                      onClick={() => handleOpenPdf(revista.pdfUrl)}
                    >
                      Abrir revista <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RevistaPage;