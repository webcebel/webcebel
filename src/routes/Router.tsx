import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import QuienesSomos from '../pages/QuienesSomos';
import Equipo from '../pages/Equipo';
import RevistaPage from '../pages/Revista';
import MaterialEducativo from '../pages/MaterialEducativo';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/equipo" element={<Equipo />} />
      <Route path="/revista" element={<RevistaPage />} />
      <Route path="/material-educativo" element={<MaterialEducativo />} />
    </Routes>
  </BrowserRouter>
);

export default Router;