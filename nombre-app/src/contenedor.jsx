import miImagen7 from './assets/cardss.png';
import PropTypes from 'prop-types';

function ContenedorCards({ vista }) {
  const vistas = {
    inicio: <Inicio />,
    AcercaDe: <AcercaDe />,
    Productos: <Productos />,
    Galeria: <Galeria />,
    Contacto: <Contacto />
  };

  return (
    <div className="contenedor-principal">
      {vistas[vista] || <Inicio />}
    </div>
  );
}

function Inicio() {
  return (
    <section className="cards-full">
      <Targeta nombre="Héctor" descripcion="Un niño normal el más común e inicial" />
      <Targeta nombre="Héctor 2" descripcion="Un niño normal un poco menos común" />
      <Targeta nombre="Héctor 3" descripcion="Un niño normal casi imposible de ver" />
      <Targeta nombre="Héctor 4" descripcion="Dicen que quien lo ve nunca existió" />
    </section>
  );
}

function AcercaDe() {
  return (
    <section className="seccion">
      <h2>Acerca de nosotros</h2>
      <p>
        Somos un equipo dedicado al desarrollo de soluciones web modernas,
        funcionales y adaptadas a las necesidades de cada cliente.
      </p>
      <p>
        Trabajamos con tecnologías actuales como React para garantizar
        rendimiento, escalabilidad y una buena experiencia de usuario.
      </p>
      <ul>
        <li>Diseño web moderno</li>
        <li>Aplicaciones web</li>
        <li>Optimización de sitios</li>
        <li>Soporte técnico</li>
      </ul>
    </section>
  );
}

function Productos() {
  return (
    <section className="seccion">
      <h2>Nuestros productos</h2>

      <div className="productos">
        <div className="producto">
          <h3>Páginas informativas</h3>
          <p>Ideales para negocios, proyectos escolares o personales.</p>
        </div>

        <div className="producto">
          <h3>Tiendas en línea</h3>
          <p>Sistemas de venta con catálogos y contacto directo.</p>
        </div>

        <div className="producto">
          <h3>Aplicaciones web</h3>
          <p>Soluciones personalizadas según las necesidades del cliente.</p>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  return (
    <section className="seccion">
      <h2>Nuestra galería</h2>
      <p>Algunos ejemplos de trabajos y proyectos realizados.</p>

      <div className="galeria">
        <div className="galeria-item proyecto1"></div>
        <div className="galeria-item proyecto2"></div>
        <div className="galeria-item proyecto3"></div>
        <div className="galeria-item proyecto4"></div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section className="seccion">
      <h2>Nuestros contactos</h2>
      <p>Puedes comunicarte con nosotros a través de los siguientes medios:</p>

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


function Targeta({ nombre, descripcion }) {
  return (
    <div className="card">
      <img src={miImagen7} alt="card" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <a href="#">Leer más</a>
    </div>
  );
}

Targeta.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired
};

ContenedorCards.propTypes = {
  vista: PropTypes.string.isRequired
};

export default ContenedorCards;
