import Swal from "sweetalert2";
import { useLostObjectStore } from "../../hooks";

export const RecollectionObjectPage = () => {

  const { lostObjects } = useLostObjectStore();
  const { startCancelScaan, startDeliverObject } = useLostObjectStore();
  let isOwnerRetrieved = false;
  
  const onDeliverObject = ( event ) => {
    event.preventDefault();
    Swal.fire({
      title: '¿Confirmar entrega?',
      text: '¿La persona que vino a recoger el objeto es el dueño?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        isOwnerRetrieved = true;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        isOwnerRetrieved = false;
      }
      startDeliverObject( lostObjects.qrValue, isOwnerRetrieved );
    });
  }

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-4 flex-grow-1">
        <div className="col">
          <div className="card shadow-lg rounded h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column flex-grow-1">
              <h1 className="primary-txt-custom text-start">Entrega de objeto perdido:</h1>
              <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                <p className="text-info-custom">Por favor validar los campos:</p>
                <form className="w-100" onSubmit={ onDeliverObject }>
                  <div className="input-wrapper d-flex flex-column align-items-start p-3 bg-light rounded border gap-3">
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_qr.png" alt="" />
                      <input 
                        type="text" 
                        className="hbox"
                        placeholder="QR del objeto"
                        value={ lostObjects?.qrValue } 
                        name="objectQr"
                        readOnly
                      />
                      <i className="bi bi-qr-code-scan fs-4 text-primary ms-2"></i>
                    </div>
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
