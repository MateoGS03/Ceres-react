import React from "react"

function Comp3() {
  
  return (
    <>
       <div className="container px-4 px-lg-5 ">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <h4>NOVEDADES</h4>
                    <p className="text-black-50 mb-3">!Nuevas actualizaciones!</p>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="../public/img/Foto1.png" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="../public/img/Foto2.png" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="../public/img/Foto3.png" className="d-block w-100" alt="..."/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                </div>
        </div>   
    </>
  )
}

export default Comp3