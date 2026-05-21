import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../data/proyectos.json';

const ProjectsPage = () => {
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setProyectos(proyectosData);
      setCargando(false);
    }, 300);
  }, []);

  if (cargando) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // Verificar si hay 
  const hayProyectos = proyectos && proyectos.length > 0 && proyectos[0].id !== undefined;

  return (
    <div style={{minHeight: '100vh', padding: '2rem 1rem' }}>
      <div className="container">
        <h2 className="mb-4 text-center" style={{
          fontSize: '2rem',
          color: '#000000',
          fontWeight: '600'
        }}>
          Mis Proyectos
          <div style={{
            width: '80px',
            height: '4px',
            background: '#3b82f6',
            margin: '0.5rem auto 0',
            borderRadius: '2px'
          }} />
        </h2>

        {hayProyectos ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {proyectos.map(proyecto => (
              <div className="col" key={proyecto.id}>
                <ProjectCard proyecto={proyecto} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh'
          }}>
            <div style={{
              textAlign: 'center',
              maxWidth: '450px',
              padding: '2rem'
            }}>
              <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🚧</div>
              <h3 style={{ fontSize: '1.5rem', color: '#000', marginBottom: '0.5rem' }}>
                Próximamente
              </h3>
              <p style={{ color: '#64748b' }}>
                Estoy trabajando en proyectos increíbles para mostrarte. 
                ¡Vuelve pronto!
              </p>
              <div style={{
                width: '100px',
                height: '4px',
                background: '#e2e8f0',
                margin: '1rem auto',
                borderRadius: '2px'
              }}>
                <div style={{
                  width: '60%',
                  height: '100%',
                  background: '#3b82f6',
                  borderRadius: '2px',
                  animation: 'progress 2s ease-in-out infinite'
                }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 30%; }
          50% { width: 80%; }
          100% { width: 30%; }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;