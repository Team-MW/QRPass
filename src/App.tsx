import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import UseCases from './pages/UseCases';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fonctionnement" element={<Features />} />
            <Route path="secteurs" element={<UseCases />} />
            <Route path="tarifs" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="legal" element={<Legal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
