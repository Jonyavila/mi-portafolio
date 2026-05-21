import React from 'react';

const HomePage = () => {
  // PASO 1: Crear estado con useState para el tema de la página
  // PASO 2: Definir arrays con tus datos personales, skills, etc.

  return (
    <div>
      {/* PASO 3: Sección hero con nombre, título y foto */}
      <section className="text-center py-5">
        <h1>{/* Tu nombre */}</h1>
        <p className="lead">{/* Tu título/profesión */}</p>
        {/* PASO OPCIONAL: Foto de perfil */}
      </section>

      {/* PASO 4: Sección de habilidades corta (las completas en AboutPage) */}
      <section className="mb-5">
        <h2>Habilidades principales</h2>
        {/* PASO: Mapear un array de skills con .map() usando SkillBadge */}
      </section>

      {/* PASO 5: Sección de contacto rápido con Links */}
      <section className="mb-5">
        <h2>Contacto</h2>
        {/* PASO: Link a /contact */}
      </section>
    </div>
  );
};

export default HomePage;