// src/pages/Equipo.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import '../styles/pages/equipo.css';

const Equipo = () => {
  const equipoDirectivo = [
    {
      nombre: "Nombre Apellido",
      cargo: "Presidente",
      imagen: "/src/assets/images/team/presidente.jpg",
      descripcion: "Breve descripción del miembro del equipo."
    },
    // Añadir más miembros según sea necesario
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
              <TeamCard
                key={index}
                nombre={miembro.nombre}
                cargo={miembro.cargo}
                imagen={miembro.imagen}
                descripcion={miembro.descripcion}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Equipo;