import React, { useState } from 'react'
import { useForm, useLostObjectStore } from '../../hooks';

const reportForm = {
    nameWhoReceive: '',
}

const reportFormValidations = {
    nameWhoReceive: [ (value) => value.length >= 1, 'Porfavor ingresa un nombre' ],
}

export const ReportGeneratorPage = () => {
  const { lostObjects } = useLostObjectStore();
  const { startCancelScaan, startGenerateReport } = useLostObjectStore();
  const [formSubmitted, setformSubmitted] = useState(false);
  const { nameWhoReceive, onInputChange, onResetForm, isFormValid, nameWhoReceiveValid } = useForm( reportForm, reportFormValidations );

  const onSubmitReport = ( event ) => {
    event.preventDefault();
    setformSubmitted(true);

    if (!isFormValid) {
        Swal.fire({
        title: 'Error',
        text: 'Porfavor ingrese un nombre valido',
        icon: 'error',
        confirmButtonText: 'Aceptar'
        })
        return;
    }

    setformSubmitted(false);
    onResetForm();
    startGenerateReport({ qrValue: lostObjects.qrValue, name: nameWhoReceive, description: lostObjects.description });
  }

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-4 flex-grow-1">
        <div className="col">
          <div className="card shadow-lg rounded h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column flex-grow-1">
              <h1 className="primary-txt-custom text-start">Generar reporte de objeto entregado:</h1>
              <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                <p className="text-info-custom">Por favro validar los campos y llenar el nombre de quien recibe:</p>
                <form className="w-100 card-body" onSubmit={ onSubmitReport }>
                  <div className="input-wrapper d-flex flex-column align-items-start p-3 bg-light rounded border gap-3">
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_user.png" alt="" />
                      <input 
                        type="text" 
                        className={`hbox ${ nameWhoReceiveValid && formSubmitted ? 'is-invalid' : '' }`}
                        placeholder="Nombre de quien recibe el objeto"
                        name='nameWhoReceive'
                        value={ nameWhoReceive }
                        onChange={ onInputChange }
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    { nameWhoReceiveValid && formSubmitted && <small className='invalid-feedback'>{ nameWhoReceiveValid }</small> }
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_docs.png" alt="" />
                      <input 
                        type="text" 
                        className="hbox"
                        placeholder="Nombre del objeto"
                        value={ lostObjects?.name } 
                        name="objectName"
                        readOnly
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_docs.png" alt="" />
                      <input 
                        type="text" 
                        className="hbox"
                        placeholder="Descripcion del objeto"
                        value={ lostObjects?.description } 
                        name="objectDescription"
                        readOnly
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_user.png" alt="" />
                      <input 
                        type="text" 
                        className="hbox" 
                        placeholder="Correo del propietario"
                        value={ lostObjects?.email }
                        name="objectEmail"
                        readOnly 
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-4">
                    <button
                     className="btn btn-danger me-2"
                     type="button"
                     onClick={ startCancelScaan }>
                      Cancelar
                    </button>
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
