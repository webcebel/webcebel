import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import QuienesSomos from '../pages/QuienesSomos';
import RevistaPage from '../pages/Revista';
import SubcomisionesPage from '../pages/Subcomisiones';
import OnboardingPage from '../pages/Onboarding';
import MaterialEducativoPage from '../pages/MaterialEducativo';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/revista" element={<RevistaPage />} />
      <Route path="/subcomisiones" element={<SubcomisionesPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/material-educativo" element={<MaterialEducativoPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;