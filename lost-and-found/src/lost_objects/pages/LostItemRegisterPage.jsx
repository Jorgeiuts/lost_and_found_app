export const LostItemRegisterPage = () => {
  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-4 flex-grow-1">
        <div className="col">
          <div className="card shadow-lg rounded h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column flex-grow-1">
              <h1 className="primary-txt-custom text-start">Registro de nuevo objeto:</h1>
              <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                <p className="text-info-custom">Porfavor complete los campos con la informacion requerida:</p>
                <form className="w-100">
                  <div className="input-wrapper d-flex flex-column align-items-start p-3 bg-light rounded border gap-3">
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_docs.png" alt="" />
                      <input type="text" className="hbox" placeholder="Nombre del objeto" />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_docs.png" alt="" />
                      <input type="text" className="hbox" placeholder="Descripcion del objeto" />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_user.png" alt="" />
                      <input type="text" className="hbox" placeholder="Correo electronico" />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_qr.png" alt="" />
                      <input type="text" className="hbox" placeholder="Escanea aqui el QR" />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-4">
                    <button className="btn btn-primary">Aceptar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
