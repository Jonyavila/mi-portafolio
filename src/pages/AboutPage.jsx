import SkillBadge from '../components/SkillBadge'; // Ajusta la ruta según tu estructura

const AboutPage = () => {
  const proyectos = [
    {
      id: 1,
      nombre: "Sistema de Gestión de Incidentes",
      periodo: "En curso",
      descripcion:
        "Aplicación para registrar, administrar y realizar seguimiento de tickets e incidentes de soporte. Incluye autenticación, gestión de usuarios, reportes y administración del sistema.",
      tecnologias: [
        "React",
        ".NET",
        "SQL Server",
        "Tailwind CSS",
      ]
    }
  ];

  const educacion = [
    {
      id: 1,
      titulo: "Analista de Sistemas",
      institucion: "Institucion Cervantes",
      periodo: "En curso"
    }
  ];

  const habilidades = [
    "JavaScript",
    "React",
    "Angular",
    ".NET",
    "C#",
    "SQL Server",
    "Postman",
    "Git",
    "Bootstrap",
    "HTML",
    "CSS",
    "APIs REST",
    "Testing"
  ];

  return (
    <div className="container mt-4">
      {/* Sección Sobre mí */}
      <section className="mb-5">
        <h2>Sobre mí</h2>
        <p>Soy estudiante de Analista de Sistemas con interés en el desarrollo de software,
          la ciberseguridad y la inteligencia artificial. Me atrae especialmente el desarrollo backend,
          el diseño de APIs y el aprendizaje de nuevas tecnologías que permitan crear soluciones innovadoras.
        </p>
      </section>

      {/* Sección Proyectos */}
      <section className="mb-5">
        <h2>Proyectos</h2>
        <div className="row">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="col-md-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 className="card-title">{proyecto.nombre}</h5>
                    <span className="badge bg-secondary">{proyecto.periodo}</span>
                  </div>
                  <p className="card-text mt-2">{proyecto.descripcion}</p>
                  <div>
                    {proyecto.tecnologias.map((tech, index) => (
                      <span key={index} className="badge bg-info me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Educación */}
      <section className="mb-5">
        <h2>Educación</h2>
        <div className="row">
          {educacion.map((item) => (
            <div key={item.id} className="col-md-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title">{item.titulo}</h5>
                      <h6 className="card-subtitle text-muted">{item.institucion}</h6>
                    </div>
                    <span className="badge bg-secondary">{item.periodo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Habilidades con SkillBadge */}
      <section className="mb-5">
        <h2>Habilidades</h2>
        <div className="card">
          <div className="card-body">
            {habilidades.map((skill, index) => (
              <SkillBadge key={index} nombre={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Certificaciones */}
      <section className="mb-5">
        <h2>Certificaciones</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Data Analytics - Coursera</li>
              <li className="list-group-item">QA Manual - Santex</li>
              <li className="list-group-item">QA Automation - Santex</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;