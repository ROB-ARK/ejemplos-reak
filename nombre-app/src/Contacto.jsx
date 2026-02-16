function Contacto() {
  return (
    <section className="seccion">
      <h2>Contactanos :D</h2>
      <p>Puedes comunicarte con nosotros a través de los siguientes medios:</p>

      <form className="formulario-contacto">
        <div className="campo">
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />
        </div>

        <div className="campo">
          <label>Email</label>
          <input type="email" placeholder="tu@email.com" />
        </div>

        <div className="campo">
          <label>Asunto</label>
          <input type="text" placeholder="Motivo del mensaje" />
        </div>

        <button type="submit">Enviar</button>
      </form>
        <h2>Nuestros contactos</h2>
      <table className="tabla-contacto">
        <thead>
          <tr>
            <th>Área</th>
            <th>Responsable</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soporte</td>
            <td>Hector Morales Soto</td>
            <td>soporte@pagina.com</td>
          </tr>
          <tr>
            <td>Ventas</td>
            <td>Totis Lopez de Cortez</td>
            <td>ventas@pagina.com</td>
          </tr>
          <tr>
            <td>Administración</td>
            <td>Cristian Nicolas Topala</td>
            <td>admin@pagina.com</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Contacto;
