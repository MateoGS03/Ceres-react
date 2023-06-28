import React from "react"

function Comp6() {
  
  return (
    <>
      <section className="contact-section bg-white" id="Redes">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <h3 className="text-center mb-5">Redes sociales</h3>
          <div className="col-md-3 mb-3 mb-md-0 p-4">
            <a href="https://youtube.com/?lang=es">
              <div className="card py-2 h-100" style={{ backgroundColor: '#B7D5E5' }}>
                <div className="card-body text-center">
                  <i className="fa-brands fa-youtube text-black mb-2"></i>
                  <h4 className="text-black m-0">Youtube</h4>
                  <hr className="my-2 mx-auto" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 mb-3 mb-md-0 p-4">
            <a href="https://twitter.com/?lang=es">
              <div className="card py-2 h-100 " style={{ backgroundColor: '#B7D5E5' }}>
                <div className="card-body text-center">
                  <i className="fa-brands fa-twitter text-black mb-2"></i>
                  <h4 className="text-black m-0">Twitter</h4>
                  <hr className="my-2 mx-auto" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 mb-3 mb-md-0 p-4">
            <a href="https://facebook.com/?lang=es">
              <div className="card py-2 h-100" style={{ backgroundColor: '#B7D5E5' }}>
                <div className="card-body text-center">
                  <i className="fa-brands fa-facebook-f text-black mb-2"></i>
                  <h4 className="text-black m-0">Facebook</h4>
                  <hr className="my-2 mx-auto" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-3 mb-3 mb-md-0 p-4">
            <a href="https://instagram.com/?lang=es">
              <div className="card py-2 h-100" style={{ backgroundColor: '#B7D5E5' }}>
                <div className="card-body text-center">
                  <i className="fa-brands fa-instagram text-black mb-2"></i>
                  <h4 className="text-black m-0">Instagram</h4>
                  <hr className="my-2 mx-auto"/>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Comp6