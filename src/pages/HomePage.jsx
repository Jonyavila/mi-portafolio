import avatar from "../assets/avatar2.jpeg";

const HomePage = () => {
  const logotipo = [
    { id: 1, nombre: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { id: 2, nombre: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { id: 3, nombre: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { id: 4, nombre: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { id: 5, nombre: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { id: 6, nombre: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { id: 7, nombre: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { id: 8, nombre: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { id: 9, nombre: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { id: 10, nombre: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    /*  { id: 11, nombre: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }, */
    { id: 12, nombre: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { id: 13, nombre: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }
  ];

  return (
    <div>
      <section className="text-center py-5">
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
          Hola, soy <span style={{ color: '#3b82f6' }}>Jonathan Avila</span></h1>
        <p className="lead">Desarrollador Full Stack</p>
        <img
          src={avatar}
          alt="Foto de perfil"
          className="rounded-circle"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            border: '4px solid #3b82f6',
            boxShadow: '0 0 30px rgba(59,130,246,0.3)',
            marginTop: '1rem'
          }}
        />
      </section>
      {/* Tecnologías destacadas en grid */}
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Tecnologías</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '1rem'
        }}>
          {logotipo.slice(0, 13).map(tech => (
            <div key={tech.id} style={{
              textAlign: 'center',
              padding: '1rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}>
              <img
                src={tech.logo}
                alt={tech.nombre}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'contain'
                }}
              />
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{tech.nombre}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5 text-center">
        <h2>Contacto</h2>
        <a href="#/contact" className="btn btn-primary">Contáctame</a>
      </section>
      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        marginTop: '3rem',
        color: '#94a3b8'
      }}>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <span>©</span> 2026 Jonathan Avila <span style={{ color: '#3b82f6' }}>|</span>
          <span>Full Stack Developer</span> <span style={{ color: '#3b82f6' }}>|</span>
          <span>Argentina</span>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;