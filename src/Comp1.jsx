import React from "react"

function Comp1() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#0071BC' }} id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          <img src="../public/img/logo ceres.png" alt="" height="80" />
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-light" href="#about">Proyecto</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#Novedades">Novedades</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#Nosotros">Nosotros</a></li>
            <li className="nav-item"><a className="nav-link text-light" href="#Redes">Redes sociales</a></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Comp1