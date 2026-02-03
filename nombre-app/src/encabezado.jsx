import miImagen from './assets/logotipo.png';
import miImagen1 from './assets/face.jpg';
import miImagen2 from './assets/igs.jpg';
import miImagen3 from './assets/linke.jpg';
import miImagen4 from './assets/tui.jpg';
import miImagen5 from './assets/watsp.jpg';
import miImagen6 from './assets/youtu.jpg';


function Encabezado(){
    return ( 
        <header className="encabezado">
            <Logotipo />
            <Menu />
            <Redes />
        </header>
    );
}

function Logotipo(){
    return(
        <div className="logo">
            <img src={miImagen} alt="Logotipo"/>
        </div>
    );
}

function Menu(){
    return(
        <nav className="menu">
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Galeria</li>
                <li>Videos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    );
}

function Redes(){
    return(
        <div className="redes">
            
                <img src={miImagen1} alt="face"/>
                <img src={miImagen2} alt="igs"/>
                <img src={miImagen3} alt="linke"/>
                <img src={miImagen5} alt="watsp"/>
                <img src={miImagen6} alt="youtu"/>
                <img src={miImagen4} alt="tui"/>
            
        </div>
    );
}


export default Encabezado 
