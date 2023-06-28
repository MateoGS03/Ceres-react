import React from "react"

function Comp4() {

    return (
        <>
            <section className="projects-section bg-light" id="projects">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-0 mb-4 mb-lg-5 justify-content-center">
                        <div className="text-center">
                            <h4>ELEMENTOS DEL JUEGO</h4>
                            <p className="text-black-50 mb-3">Escenarios y más.</p>
                        </div>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="../public/img/Escenario1.png" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Escenario Exterior.</h5>
                                        <p>Gran parte de un bosque destruida por el Mal.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="../public/img/Escenario2.png" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Escenario Interior</h5>
                                        <p>Casas destruidas.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="../public/img/Personaje...png" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Lumban"Antagonista"</h5>
                                        <p>Culpable de toda la destrucción.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div className="col-lg-6 ">
                            <iframe height="100%" className="col-12" src="../public/Videos/VideoPag.mp4" allowfullscreen></iframe>
                            <img className="img-fluid" src="assets/img/demo-image-01.jpg" alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-white text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left" />
                                    <h4 className="text-black">Video PAG</h4>
                                    <p className="mb-0 text-black-50">En este video se cuenta de manera breve la historia de los sucesos del Juego.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6 ">
                        <iframe height="100%" className="col-12 bg-white" src="../public/Videos/Teaser Ceres.mp4" allowfullscreen></iframe>
                        <img className="img-fluid" src="../public/img/demo-image-02.jpg" alt="..." />
                    </div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-white text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-black">TEASER 1</h4>
                                    <p className="mb-0 text-black-50">Este es un abre bocas para ir viendo como sera el Juego. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>    
  )
}

export default Comp4