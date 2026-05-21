import React from 'react';

// PASO 1: Definir el reducer para el formulario de contacto
// const contactFormReducer = (state, action) => {
//   switch (action.type) {
//     case 'ACTUALIZAR_CAMPO':
//       return { ...state, [action.campo]: action.valor };
//     case 'RESET':
//       return initialState;
//     default:
//       return state;
//   }
// };

// PASO 2: Definir el estado inicial del formulario
// const initialState = {
//   nombre: '',
//   email: '',
//   mensaje: '',
// };

// PASO 3: Definir estado para errores de validación
// const erroresIniciales = { nombre: '', email: '', mensaje: '' };

const ContactPage = () => {
  // PASO 4: Usar useReducer para manejar el formulario
  // const [formulario, dispatch] = useReducer(contactFormReducer, initialState);

  // PASO 5: Usar useState para errores y estado de envío
  // const [errores, setErrores] = useState(erroresIniciales);
  // const [enviado, setEnviado] = useState(false);

  // PASO 6: Función de validación (como en FormulariosValidacionCompleta)
  // const validar = () => {
  //   const nuevosErrores = {};
  //   if (!formulario.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
  //   if (!formulario.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nuevosErrores.email = 'Email inválido';
  //   if (formulario.mensaje.length < 10) nuevosErrores.mensaje = 'Mínimo 10 caracteres';
  //   setErrores(nuevosErrores);
  //   return Object.keys(nuevosErrores).length === 0;
  // };

  // PASO 7: Handler del submit con validación
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validar()) {
  //     console.log('Formulario enviado:', formulario);
  //     setEnviado(true);
  //     dispatch({ type: 'RESET' });
  //     setTimeout(() => setEnviado(false), 3000);
  //   }
  // };

  // PASO 8: Handler onChange para dispatch
  // const handleChange = (e) => {
  //   dispatch({ type: 'ACTUALIZAR_CAMPO', campo: e.target.name, valor: e.target.value });
  // };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="mb-4">Contacto</h2>

        {/* PASO 9: Renderizado condicional del mensaje de éxito */}
        {/* {enviado && <div className="alert alert-success">¡Mensaje enviado!</div>} */}

        {/* PASO 10: Formulario con inputs controlados por useReducer */}
        <form /* onSubmit={handleSubmit} */>
          <div className="mb-3">
            <label className="form-label" htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control" // PASO: Agregar className dinámico con validación
              id="nombre"
              name="nombre"
              // value={formulario.nombre}
              // onChange={handleChange}
              // onBlur={validar}
            />
            {/* PASO: Mostrar error condicionalmente */}
            {/* {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>} */}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              // value={formulario.email}
              // onChange={handleChange}
              // onBlur={validar}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="mensaje">Mensaje</label>
            <textarea
              className="form-control"
              id="mensaje"
              name="mensaje"
              rows="4"
              // value={formulario.mensaje}
              // onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          {/* PASO: Botón de reset que dispatch RESET */}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;