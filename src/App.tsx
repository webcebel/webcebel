import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// Importaciones CSS
import './styles/globals.css';
import './styles/components/header.css';
import './styles/components/hero.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;