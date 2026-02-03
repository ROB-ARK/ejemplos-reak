function ContHorizo(props) {
  let user = props
  console.info(user)
  if(user.name!=""){
      return (
        <div className="contenedor-horizontal">
          <h3>Más datos</h3>
          <p>
            Ofrecemos páginas web diseñadas para satisfacer las
            necesidades de nuestros clientes y generar confianza.
          </p>
        </div>
        
  )
  }
  return(
    <div className="contenedor-horizontal">
      <h3>no hay datos</h3>
    </div>
  )

}


export default ContHorizo;
