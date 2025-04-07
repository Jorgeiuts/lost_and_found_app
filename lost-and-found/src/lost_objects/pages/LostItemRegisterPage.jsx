import { useForm, useLostObjectStore } from "../../hooks"
import Swal from 'sweetalert2';

const registerObjectForm = {
  registerName:        '',
  registerDescription: '',
  registerUserId:      '',
  registerQrId:        ''
}

export const LostItemRegisterPage = () => {

  const { registerName, registerDescription, registerUserId, registerQrId, onInputChange, onResetForm } = useForm( registerObjectForm );
  const { startRegister } = useLostObjectStore();

  const registerSubmit = ( event ) => {
    event.preventDefault();
    startRegister({ name: registerName, description: registerDescription, userId: registerUserId, qrId: registerQrId });
    Swal.fire({
      title: '¡Registro exitoso!',
      text: 'Registro de objeto generado con exito',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    onResetForm();
  }

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-4 flex-grow-1">
        <div className="col">
          <div className="card shadow-lg rounded h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column flex-grow-1">
              <h1 className="primary-txt-custom text-start">Registro de nuevo objeto:</h1>
              <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                <p className="text-info-custom">Porfavor complete los campos con la informacion requerida:</p>
                <form className="w-100" onSubmit={ registerSubmit }>
                  <div className="input-wrapper d-flex flex-column align-items-start p-3 bg-light rounded border gap-3">
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_docs.png" alt="" />
                      <input 
                        type="text" 
                        className="hbox" 
                        placeholder="Nombre del objeto" 
                        name="registerName"
                        value={ registerName }
                        onChange={ onInputChange }
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_docs.png" alt="" />
                      <input 
                        type="text" 
                        className="hbox" 
                        placeholder="Descripcion del objeto" 
                        name="registerDescription"
                        value={ registerDescription }
                        onChange={ onInputChange }
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_user.png" alt="" />
                      <input 
                        type="text" 
                        className="hbox" 
                        placeholder="Correo electronico"
                        name="registerUserId"
                        value={ registerUserId }
                        onChange={ onInputChange }
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_qr.png" alt="" />
                      <input 
                        type="text" 
                        className="hbox" 
                        placeholder="Escanea aqui el QR" 
                        name="registerQrId"
                        value={ registerQrId }
                        onChange={ onInputChange }
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-4">
                    <button 
                      className="btn btn-primary"
                      type="submit"
                    >Aceptar</button>
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
