import { useReducer, useState } from 'react';

const contactFormReducer = (state, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return { ...state, [action.campo]: action.valor };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  nombre: '',
  email: '',
  mensaje: '',
};

const erroresIniciales = { nombre: '', email: '', mensaje: '' };

const ContactPage = () => {
  const [formulario, dispatch] = useReducer(contactFormReducer, initialState);
  const [errores, setErrores] = useState(erroresIniciales);
  const [enviado, setEnviado] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  const validar = () => {
    const nuevosErrores = {};
    if (!formulario.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!formulario.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nuevosErrores.email = 'Email inválido';
    if (formulario.mensaje.length < 10) nuevosErrores.mensaje = 'Mínimo 10 caracteres';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      console.log('Formulario enviado:', formulario);
      setEnviado(true);
      dispatch({ type: 'RESET' });
      setTimeout(() => setEnviado(false), 3000);
    }
  };

  const handleChange = (e) => {
    dispatch({ type: 'ACTUALIZAR_CAMPO', campo: e.target.name, valor: e.target.value });
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="mb-4 text-center" style={{
              fontSize: '2rem',
              fontWeight: '600'
            }}>
              Contacto
              <div style={{
                width: '80px',
                height: '4px',
                background: '#3b82f6',
                margin: '0.5rem auto 0',
                borderRadius: '2px'
              }} />
            </h2>

            {/* Botón para abrir modal de Calendly */}
            <div className="text-center mb-5">
              <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                📅 Agenda una reunión de 30 minutos
              </p>
              <button
                onClick={() => setModalAbierto(true)}
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  border: 'none',
                  padding: '0.75rem 2rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                📅 Agendar reunión
              </button>
            </div>

            {/* Modal de Calendly */}
            {modalAbierto && (
              <>
                <div style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.8)',
                  zIndex: 999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(5px)'
                }} onClick={() => setModalAbierto(false)}>
                  <div style={{
                    background: '#fff',
                    borderRadius: '20px',
                    width: '90%',
                    maxWidth: '1000px',
                    height: '85vh',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }} onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setModalAbierto(false)}
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '20px',
                        background: '#ef4444',
                        border: 'none',
                        color: '#fff',
                        fontSize: '20px',
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      ✕
                    </button>
                    <iframe
                      src="https://calendly.com/bravojony484/30min"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Calendly"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Divisor */}
            <div className="text-center mb-4">
              <span style={{ background: '#e2e8f0', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '0.8rem', color: '#64748b' }}>
                O envíame un mensaje
              </span>
            </div>

            {/* Mensaje de éxito */}
            {enviado && (
              <div className="alert alert-success text-center" role="alert">
                ¡Mensaje enviado correctamente! Te responderé a la brevedad.
              </div>
            )}

            {/* Formulario de contacto */}
            <form onSubmit={handleSubmit} style={{ 
              padding: '2rem', 
              border: '1px solid rgb(72 108 145)', 
              borderRadius: '16px', 
              boxShadow: '0 1px 3px rgba(255, 252, 252, 0.05)',
              
            }}>
              <div className="mb-3">
                <label className="form-label" htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                  onBlur={validar}
                  style={{borderRadius: '8px', border: '1px solid rgb(72 108 145)' }}
                />
                {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={handleChange}
                  onBlur={validar}
                  style={{ borderRadius: '8px', border: '1px solid rgb(72 108 145)' }}
                />
                {errores.email && <div className="invalid-feedback">{errores.email}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="mensaje">Mensaje</label>
                <textarea
                  className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  value={formulario.mensaje}
                  onChange={handleChange}
                  onBlur={validar}
                  style={{ borderRadius: '8px', border: '1px solid rgb(72 108 145)', resize: 'vertical' }}
                />
                {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary" style={{ borderRadius: '50px', padding: '0.5rem 1.5rem' }}>
                  Enviar mensaje
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => dispatch({ type: 'RESET' })}
                  style={{ borderRadius: '50px', padding: '0.5rem 1.5rem' }}
                >
                  Limpiar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;