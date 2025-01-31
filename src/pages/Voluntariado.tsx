import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/voluntariado.css';

const Voluntariado = () => {
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
            <h2>¿Por qué ser voluntario?</h2>
            <p>
              [Descripción de los beneficios y el impacto del voluntariado]
            </p>

            <div className="areas-voluntariado">
              <h2>Áreas de Voluntariado</h2>
              <div className="areas-grid">
                <div className="area-card">
                  <h3>Área 1</h3>
                  <p>[Descripción del área]</p>
                </div>
                <div className="area-card">
                  <h3>Área 2</h3>
                  <p>[Descripción del área]</p>
                </div>
                <div className="area-card">
                  <h3>Área 3</h3>
                  <p>[Descripción del área]</p>
                </div>
              </div>
            </div>

            <div className="formulario-section">
              <h2>¿Quieres ser voluntario?</h2>
              <form className="formulario-voluntario">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" />
                </div>

                <div className="form-group">
                  <label htmlFor="area">Área de interés</label>
                  <select id="area" name="area" required>
                    <option value="">Selecciona un área</option>
                    <option value="area1">Área 1</option>
                    <option value="area2">Área 2</option>
                    <option value="area3">Área 3</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">¿Por qué quieres ser voluntario?</label>
                  <textarea id="mensaje" name="mensaje" rows={4} required></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Enviar solicitud
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Voluntariado;