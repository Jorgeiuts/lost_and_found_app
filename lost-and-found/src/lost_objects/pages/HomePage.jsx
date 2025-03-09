import '/assets/css/home.css'

export const HomePage = () => {
  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-3">
        <div className="col">
          <div class="card shadow-lg rounded">
            <div class="card-body text-center">
              <h1 className="primary-txt-custom">¡Bienvenido!, Usuario</h1>
              <p className="text-info-custom">Gestiona los objetos perdidos de forma rápida y eficiente</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-4 flex-grow-1">
        <div className="col">
          <div class="card shadow-lg rounded h-100 d-flex flex-column">
            <div class="card-body d-flex flex-column">
              <h3 className="primary-txt-custom">Escanea el código QR:</h3>
              <p className="text-info-custom">Por favor escanea el código QR en el siguiente espacio:</p>
              <div class="input-wrapper d-flex align-items-center flex-grow-1 p-3 bg-light rounded border">
                  <img class="icons" src="/assets/icons/icon_qr.png" alt="" />
                  <input type="text" class="hbox" placeholder="Escanear aquí el código QR" />
                  <i className="bi bi-qr-code-scan fs-4 text-primary"></i>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button class="btn btn-primary">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-4">
        <div className="col">
          <div class="card">
            <div class="card-body">
            <p className="text-info-custom">Por favor digite la cantidad de QR que necesites generar:</p>
            <div class="input-wrapper d-flex align-items-center">
                        <img class="icons" src="/assets/icons/icon_qr.png" alt="" />
                        <input type="number" class="hbox" placeholder="Cantidad de códigos QR" />
                        <i class="bi bi-qr-code-scan"></i>
                    </div>
                    <button class="btn btn-primary mt-3">Generar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}