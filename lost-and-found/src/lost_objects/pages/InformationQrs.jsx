import { useState } from "react";
import { useForm, useLostObjectStore } from "../../hooks"

const qrForm = {
  scaanQrValue: '',
}

const scaanQrCodeFormValidations = {
  scaanQrValue: [ (value) => value.length === 36, 'Porfavor ingresa un codigo qr valido' ],
}

export const InformationQrs = () => {
  const { scaanQrValue, onInputChange, onResetForm, isFormValid, scaanQrValueValid } = useForm( qrForm, scaanQrCodeFormValidations );
  const [formSubmitted, setformSubmitted] = useState(false);
  const { startGetObjectInfo } = useLostObjectStore();
  const [objectData, setObjectData] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setformSubmitted(true);

    if (!isFormValid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor ingrese un codigo QR valido',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
      return;
    }

    const data = await startGetObjectInfo(scaanQrValue);
    if (data) {
      setObjectData(data);
    } else {
      setObjectData(null);
    }

    setformSubmitted(false);
    onResetForm();
  };

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-3">
        <div className="col">
          <div className="card shadow-lg rounded">
            <form className="card-body" onSubmit={onSubmit}>
            <h3 className="primary-txt-custom">Informacion de objeto</h3>
            <p className="text-info-custom">Por favor escanea el código QR en el siguiente espacio:</p>
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
      <div className="row p-4 flex-grow-1">
        <div className="col">
          <div className="card shadow-lg rounded h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column">
              {objectData ? (
                <div>
                  <h4 className="primary-txt-custom">Información del Objeto</h4>
                  <div className="mb-3">
                    <strong className="text-info-custom">QR:</strong> <span className="text-info-custom">{objectData.qrValue}</span>
                  </div>
                  <div className="mb-3">
                    <strong className="text-info-custom">Correo del propietario:</strong> <span className="text-info-custom">{objectData.userEmail}</span>
                  </div>
                  <div className="mb-3">
                    <strong className="text-info-custom">Objeto:</strong> <span className="text-info-custom">{objectData.name}</span>
                  </div>
                  <div className="mb-3">
                    <strong className="text-info-custom">Descripción del objeto:</strong> <span className="text-info-custom">{objectData.description}</span>
                  </div>
                </div>
              ) : (
                <p className="text-muted text-info-custom">No hay información del objeto para mostrar.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}