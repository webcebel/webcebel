import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/equipo.css';

const Equipo: FC = () => {
  const equipoDirectivo = [
    {
      nombre: "Nombre Apellido",
      cargo: "Presidente",
      imagen: "/src/assets/images/team/presidente.jpg",
      descripcion: "Breve descripción del miembro del equipo."
    },
  ];

  return (
    <div className="equipo-page">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>Nuestro Equipo Directivo</h1>
          <p className="subtitle">Conoce a las personas que hacen posible nuestra misión</p>
        </section>

        <section className="team-grid">
          <div className="container">
            {equipoDirectivo.map((miembro, index) => (
              <div key={index} className="team-card">
                <img src={miembro.imagen} alt={miembro.nombre} />
                <h3>{miembro.nombre}</h3>
                <p className="cargo">{miembro.cargo}</p>
                <p className="descripcion">{miembro.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Equipo;