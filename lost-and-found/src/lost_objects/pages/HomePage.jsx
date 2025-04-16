import '/assets/css/home.css';

export const HomePage = () => {
  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-3">
        <div className="col">
          <div className="card shadow-lg rounded">
            <div className="card-body text-center">
              <h1 className="primary-txt-custom">¡Bienvenido!, Usuario</h1>
              <p className="text-info-custom">Gestiona los objetos perdidos de forma rápida y eficiente</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-4 flex-grow-1">
        <div className="col">
          <div className="card shadow-lg rounded h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column">
              <h3 className="primary-txt-custom">Escanea el código QR:</h3>
              <p className="text-info-custom">Por favor escanea el código QR en el siguiente espacio:</p>
              <div className="input-wrapper d-flex align-items-center flex-grow-1 p-3 bg-light rounded border">
                  <img className="icons" src="/assets/icons/icon_qr.png" alt="" />
                  <input type="text" className="hbox" placeholder="Escanear aquí el código QR" />
                  <i className="bi bi-qr-code-scan fs-4 text-primary"></i>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-primary">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}