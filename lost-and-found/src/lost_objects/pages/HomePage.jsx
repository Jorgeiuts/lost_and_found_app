import { useState } from 'react';
import { useAuthStore, useForm } from '../../hooks';
import '/assets/css/home.css';
import Swal from 'sweetalert2';

const scaanQrCodeForm = {
  scaanQrValue: '',
}

const scaanQrCodeFormValidations = {
  scaanQrValue: [ (value) => value.length === 36, 'Porfavor ingresa un codigo qr valido' ],
}

export const HomePage = () => {

  const { user } = useAuthStore();
  const [formSubmitted, setformSubmitted] = useState(false);
  const { scaanQrValue, onInputChange, onResetForm, ifFormValid, scaanQrValueValid } = useForm( scaanQrCodeForm, scaanQrCodeFormValidations );

  const scaanQrCodeSubmit = event => {
    event.preventDefault();
    setformSubmitted(true);

    if (!ifFormValid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingrese un codigo QR valido',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
      return;
    }


  }

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-3">
        <div className="col">
          <div className="card shadow-lg rounded">
            <div className="card-body text-center">
              <h1 className="primary-txt-custom">¡Bienvenido!, { user?.email || 'Usuario' }</h1>
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
              <form onSubmit={ scaanQrCodeSubmit } className="card-body">
                <div className="input-wrapper d-flex flex-column align-items-start p-3 bg-light rounded border gap-3">
                  <div className="d-flex align-items-center w-100">
                    <img className="icons" src="/assets/icons/icon_qr.png" alt="" />
                    <input 
                      type="text" 
                      className={`hbox ${ scaanQrValueValid && formSubmitted ? 'is-invalid' : '' }`}
                      placeholder="Escanear aquí el código QR" 
                      name="scaanQrValue"
                      value={ scaanQrValue }
                      onChange={ onInputChange }
                    />
                    <i className="bi bi-qr-code-scan fs-4 text-primary"></i>
                  </div>
                  { scaanQrValueValid && formSubmitted && <small className='invalid-feedback'>{ scaanQrValueValid }</small> }
                </div>
                <div className="d-flex justify-content-center mt-4">
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
  )
}