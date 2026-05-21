import PropTypes from 'prop-types';

const SkillBadge = ({ nombre }) => {
  const getBadgeColor = (skill) => {
    const categorias = {
      frontend: ["JavaScript", "React", "React Native", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
      backend: [".NET", "C#", "APIs REST", "Testing"],
      database: ["SQL Server"],
      tools: ["Postman", "Git"]
    };

    if (categorias.frontend.includes(skill)) return "bg-primary";
    if (categorias.backend.includes(skill)) return "bg-success";
    if (categorias.database.includes(skill)) return "bg-info";
    if (categorias.tools.includes(skill)) return "bg-warning";
    return "bg-secondary";
  };

  return (
    <span className={`badge ${getBadgeColor(nombre)} me-1 mb-1`}>
      {nombre}
    </span>
  );
};

SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default SkillBadge;