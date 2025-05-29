import { useState } from "react";
import { useForm, useLostObjectStore } from "../../hooks";
import Swal from 'sweetalert2';

const registerObjectForm = {
  registerName:        '',
  registerDescription: '',
  registerEmail:       '',
  registerQrValue:     ''
}

const regiserObjectFormValidations = {
  registerName: [ (value) => value.length >= 1, 'El nombre del objeto es obligatorio' ],
  registerDescription: [ (value) => value.length >= 1, 'La descripcion del objeto es obligatoria' ],
  registerEmail: [ (value) => value.includes('@'), 'El correo electronico debe ser institucional' ],
  registerQrValue: [ (value) => value.length === 36, 'El QR es obligatorio o esta incompleto' ] 
}

export const LostItemRegisterPage = () => {

  const { startRegister } = useLostObjectStore();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { 
    registerName, registerDescription, registerEmail, 
    registerQrValue, onInputChange, onResetForm, 
    isFormValid, registerNameValid, registerDescriptionValid,
    registerEmailValid, registerQrValueValid
  } = useForm( registerObjectForm, regiserObjectFormValidations );

  const registerSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor complete todos los campos correctamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    startRegister({ 
      name: registerName, 
      description: registerDescription, 
      userEmail: registerEmail, 
      qrValue: registerQrValue 
    });
    Swal.fire({
      title: '¡Registro exitoso!',
      text: 'Registro de objeto generado con exito',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

    onResetForm();
    setFormSubmitted(false);
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
                          className={`hbox ${ registerNameValid && formSubmitted ? 'is-invalid' : '' }`}
                          placeholder="Nombre del objeto" 
                          name="registerName"
                          value={ registerName }
                          onChange={ onInputChange }
                        />
                        <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                      </div>
                      { registerNameValid && formSubmitted && <small className="invalid-feedback">{ registerNameValid }</small> }
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_docs.png" alt="" />
                      <input 
                        type="text" 
                        className={`hbox ${ registerDescriptionValid && formSubmitted ? 'is-invalid' : '' }`} 
                        placeholder="Descripcion del objeto" 
                        name="registerDescription"
                        value={ registerDescription }
                        onChange={ onInputChange }
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    { registerDescriptionValid && formSubmitted && <small className="invalid-feedback">{ registerDescriptionValid }</small> }
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_user.png" alt="" />
                      <input 
                        type="text" 
                        className={`hbox ${ registerEmailValid && formSubmitted ? 'is-invalid' : '' }`} 
                        placeholder="Correo electronico"
                        name="registerEmail"
                        value={ registerEmail }
                        onChange={ onInputChange }
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    { registerEmailValid && formSubmitted && <small className="invalid-feedback">{ registerEmailValid }</small> }
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_qr.png" alt="" />
                      <input 
                        type="text" 
                        className={`hbox ${ registerQrValueValid && formSubmitted ? 'is-invalid' : '' }`}  
                        placeholder="Escanea aqui el QR" 
                        name="registerQrValue"
                        value={ registerQrValue }
                        onChange={ onInputChange }
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    { registerQrValueValid && formSubmitted && <small className="invalid-feedback">{ registerQrValueValid }</small> }
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
