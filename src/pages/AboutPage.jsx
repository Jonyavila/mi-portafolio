import React from 'react';

const AboutPage = () => {
  // PASO 1: Definir arrays con tus datos: experiencia, educación, habilidades

  return (
    <div>
      {/* PASO 2: Sección "Sobre mí" con descripción personal */}
      <section className="mb-5">
        <h2>Sobre mí</h2>
        <p>{/* Descripción personal */}</p>
      </section>

      {/* PASO 3: Sección "Experiencia" - mapear array con .map() */}
      <section className="mb-5">
        <h2>Experiencia</h2>
        {/* PASO: Recorrer un array de experiencia y mostrar cada item */}
        {/* Usar .map() con key prop */}
      </section>

      {/* PASO 4: Sección "Educación" - mapear array con .map() */}
      <section className="mb-5">
        <h2>Educación</h2>
        {/* PASO: Recorrer un array de educación */}
      </section>

      {/* PASO 5: Sección "Habilidades" con SkillBadge */}
      <section className="mb-5">
        <h2>Habilidades</h2>
        {/* PASO: Mapear array de strings de skills con SkillBadge */}
        {/* PASO OPCIONAL: Usar className dinámico para categorías (front/back/etc) */}
      </section>
    </div>
  );
};

export default AboutPage;