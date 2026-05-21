import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import useLocalStorage from './hooks/useLocalStorage';
import { useEffect } from 'react';

const App = () => {
  const [tema, setTema] = useLocalStorage('tema', 'light');

  const toggleTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // 🔥 CAMBIO IMPORTANTE: Usar data-bs-theme en lugar de body.className
    document.documentElement.setAttribute('data-bs-theme', tema);
    
    // Opcional: también puedes mantener el body className para fondo adicional
    document.body.className = tema === 'light' ? 'bg-light' : 'bg-dark';
  }, [tema]);

  return (
    // 🔥 Simplificar: ya no necesitas las clases condicionales aquí
    <div className="min-vh-100">
      <Navbar tema={tema} toggleTema={toggleTema} />
      
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;