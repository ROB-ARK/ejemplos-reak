import miImagen7 from './assets/cardss.png';

function ContenedorCards() {
  return (
    <>
      <section className="cards-full">
        <Targeta nombre='hector' descripcion="Un niño normal el mas comun y inicial" />
        <Targeta nombre='hector1' descripcion="Un niño normal un poco menos comun pero ahora es numero 2" />
        <Targeta nombre='hector2' descripcion="Un niño normal pero es casi improbable de verlo ahora es numero 3" />
        <Targeta nombre='hector3' descripcion="Un niño normal dicen que quienes lo ven nunca existieron ahora es numero 4" />
      </section>

    </>
  );
}

function Targeta(props) {
  return (
    <div className="card">
      <img src={miImagen7} alt="card" />
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <a href="#">Leer mas</a>
    </div>
  );
}


export default ContenedorCards;
