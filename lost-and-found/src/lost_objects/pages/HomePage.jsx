import { useState } from 'react';
import { useAuthStore, useForm, useLostObjectStore } from '../../hooks';
import '/assets/css/home.css';
import Swal from 'sweetalert2';

const scaanQrCodeForm = {
  scaanQrValue: '',
}

const scaanQrCodeFormValidations = {
  scaanQrValue: [ (value) => value.length === 36, 'Por favor, ingresa un código QR válido.' ],
}

export const HomePage = () => {

  const { user } = useAuthStore();
  const { startScaanQr } = useLostObjectStore();
  const [formSubmitted, setformSubmitted] = useState(false);
  const { scaanQrValue, onInputChange, onResetForm, isFormValid, scaanQrValueValid } = useForm( scaanQrCodeForm, scaanQrCodeFormValidations );

  const scaanQrCodeSubmit = event => {
    event.preventDefault();
    setformSubmitted(true);

    if (!isFormValid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa un código QR válido.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
      return;
    }

    try {
      startScaanQr(scaanQrValue);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
    setformSubmitted(false);
    onResetForm();
  }

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-3">
        <div className="col">
          <div className="card shadow-lg rounded">
            <div className="card-body text-center">
              <h1 className="primary-txt-custom">¡Bienvenido{user?.name ? `, ${user.name}` : ''}!</h1>
              <p className="text-info-custom">Gestiona los objetos perdidos de forma rápida y eficiente.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-4 flex-grow-1">
        <div className="col">
          <div className="card shadow-lg rounded h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column">
              <h3 className="primary-txt-custom">Escanea el código QR:</h3>
              <p className="text-info-custom">Por favor, escanea el código QR en el siguiente espacio:</p>
              <form onSubmit={ scaanQrCodeSubmit } className="card-body">
                <div className="input-wrapper d-flex flex-column align-items-start p-3 bg-light rounded border gap-3">
                  <div className="d-flex align-items-center w-100">
                    <img className="icons" src="/assets/icons/icon_qr.png" alt="" />
                    <input 
                      type="text" 
                      className={`hbox ${ scaanQrValueValid && formSubmitted ? 'is-invalid' : '' }`}
                      placeholder="Escanea aquí el código QR" 
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