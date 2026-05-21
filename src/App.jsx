import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import useLocalStorage from './hooks/useLocalStorage';
import { useEffect } from 'react';
const App = () => {
 // PASO 1
  const [tema, setTema] =
    useLocalStorage('tema', 'light');

  const toggleTema = () => {

    setTema(
      tema === 'light'
        ? 'dark'
        : 'light'
    );
  };

  // PASO 2
  useEffect(() => {

    document.body.className =

      tema === 'light'
        ? 'bg-light text-dark'
        : 'bg-dark text-light';

  }, [tema]);

  // PASO 3
  return (

    <div
      className={`

      min-vh-100

      ${
        tema === 'light'
          ? 'bg-light text-dark'
          : 'bg-dark text-light'
      }

      `}
    >

      <Navbar
        tema={tema}
        toggleTema={toggleTema}
      />

      <div className="container mt-4">

        <Routes>

          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/projects"
            element={<ProjectsPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

        </Routes>

      </div>

    </div>

  );
};

export default App;