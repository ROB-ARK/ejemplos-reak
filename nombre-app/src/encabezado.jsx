import miImagen from './assets/logotipo.jpg';
function Encabezado(){
    return (
        <div>
            <Logotipo/>
            <Menu/>
            <Menu/>
        </div>
    )

}
function Logotipo(){
    return(
        <div>
            <img src={miImagen} alt='Logotipo'/>
        </div>
    )
}
function Menu(){
    return(
        <div>
            <ul>
                <li>inicio</li>
                <li>Acerca de</li>
                <li>productos</li>
                <li>contacto</li>
                <li>Sucursales</li>
            </ul>
        </div>
    )
}

function Redes(){
    return(
        <div>
            <ul>
                <li>Facebook</li>
                <li>Whatsapp</li>
                <li>Instragram</li>
                <li>youtube</li>
                <li>linkedin</li>
            </ul>
        </div>
    )
}



export default Encabezado 
