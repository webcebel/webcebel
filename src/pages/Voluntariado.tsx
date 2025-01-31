import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/voluntariado.css';

const Voluntariado: FC = () => {
  return (
    <div className="voluntariado-page">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>Voluntariado</h1>
          <p className="subtitle">Únete a nuestra causa y marca la diferencia</p>
        </section>

        <section className="content-section">
          <div className="container">
            <div className="formulario-section">
              <h2>¿Quieres ser voluntario?</h2>
              <p>Redirigiendo al formulario de inscripción...</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Voluntariado;