import miImagen7 from './assets/cardss.png';

function Contenedor() {
    return (
        <>
            <section className="cards-full">
                <div className="card">
                    <img src={miImagen7} alt="card1" />
                    <div className="card-texto">
                        <h3>Título 1</h3>
                        <p>Descripción corta de la card</p>
                        <p>aqui podemos ver una imagen de un gato de la ia aunque no es el mejor ejemplo para esto</p>
                    </div>
                </div>

                <div className="card">
                    <img src={miImagen7} alt="card2" />
                    <div className="card-texto">
                        <h3>Título 2</h3>
                        <p>Descripción corta de la card</p>
                        <p>aqui podemos ver una imagen de un gato de la ia aunque no es el mejor ejemplo para esto</p>
                    </div>
                </div>

                <div className="card">
                    <img src={miImagen7} alt="card3" />
                    <div className="card-texto">
                        <h3>Título 3</h3>
                        <p>Descripción corta de la card</p>
                        <p>aqui podemos ver una imagen de un gato de la ia aunque no es el mejor ejemplo para</p>

                    </div>
                </div>

                <div className="card">
                    <img src={miImagen7} alt="card4" />
                    <div className="card-texto">
                        <h3>Título 4</h3>
                        <p>Descripción corta de la card</p>
                        <p>aqui podemos ver una imagen de un gato de la ia aunque no es el mejor ejemplo para esto</p>
                    </div>
                </div>
            </section>

            <section className="contenedor-horizontal">
                <div className="texto-horizontal">
                    <h3>Mas datos </h3>
                    <p>
                     Ofrecemos paginas web, diseñadas para satisfacer las
                     necesidades de nuestros clientes aunque estos no esten
                      confores y por que no les jeneramos confianza.
                    </p>
                </div>
            </section>


            <section className="contenedor-doble">
                <div className="contenedor-izq"></div>
                <div className="contenedor-der"></div>
            </section>
        </>
    );
}

export default Contenedor;
