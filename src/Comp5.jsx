import React from "react"

function Comp5(props) {

    return (
        <>
             <section className="contact-section bg-white" id="Nosotros">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <h3 className="text-center text-black mb-5">Sobre nosotros</h3>
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card py-4 h-100" style={{ backgroundColor: '#B7D5E5' }}>
              <div className="text-center">
                <img src="../public/img/Fotomiguel.png" className="imagesCard card-img-top" alt="..." style={{ width: '400px' }}></img> 
              </div>
              <div className="card-body text-center">
                <h4 className="text-uppercase m-0">{props.nombre}</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-70">Función: Diseñador, Programador, Animador 2D</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card py-4 h-100 p-3" style={{ backgroundColor: '#B7D5E5' }}>
              <div className="text-center">
                <img src="../public/img/Mateofoto.png" className="imagesCard card-img-top" alt="..." style={{ width: '400px' }}></img>
              </div>
              <div className="card-body text-center">
                <h4 className="text-uppercase m-0">Mateo García Sánchez</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-70">Función: Diseñador, Programador, Animador 2D</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  

        </>    
  )
}

export default Comp5