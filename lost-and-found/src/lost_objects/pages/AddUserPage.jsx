import { useState } from "react";
import { useForm, useLostObjectStore } from "../../hooks";
import Swal from 'sweetalert2';

const addUserForm = {
  userName: '',
  userLastName: '',
  userEmail: '',
  userPassword: '',
  userPasswordRepeat: ''
};

const addUserFormValidations = {
  userName: [ (value) => value.trim().length > 0, 'El nombre es obligatorio.' ],
  userLastName: [ (value) => value.trim().length > 0, 'Los apellidos son obligatorios.' ],
  userEmail: [ (value) => value.includes('@'), 'El correo electrónico no es válido.' ],
  userPassword: [ (value) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres.' ],
  userPasswordRepeat: [
    (value, form) => value === form.userPassword, 'Las contraseñas no coinciden.'
  ]
};

export const AddUserPage = () => {
  const { startRegisterUser } = useLostObjectStore();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { 
    userName, userLastName, userEmail, userPassword, userPasswordRepeat,
    onInputChange, onResetForm, isFormValid,
    userNameValid, userLastNameValid, userEmailValid, userPasswordValid, userPasswordRepeatValid
  } = useForm(addUserForm, addUserFormValidations);

  const registerUserSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete todos los campos correctamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    startRegisterUser({
      name: userName,
      surname: userLastName,
      email: userEmail,
      password: userPassword,
    });
    Swal.fire({
      title: '¡Usuario agregado!',
      text: 'El usuario ha sido registrado exitosamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

    onResetForm();
    setFormSubmitted(false);
  };

  return (
    <div className="container h-100 d-flex flex-column">
      <div className="row p-4 flex-grow-1">
        <div className="col">
          <div className="card shadow-lg rounded h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column flex-grow-1">
              <h1 className="primary-txt-custom text-start">Agregar nuevo usuario:</h1>
              <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                <p className="text-info-custom">Por favor, complete los campos con la información requerida:</p>
                <form className="w-100" onSubmit={registerUserSubmit}>
                  <div className="input-wrapper d-flex flex-column align-items-start p-3 bg-light rounded border gap-3">
                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_user.png" alt="" />
                      <input
                        type="text"
                        className={`hbox ${userNameValid && formSubmitted ? 'is-invalid' : ''}`}
                        placeholder="Nombre del usuario"
                        name="userName"
                        value={userName}
                        onChange={onInputChange}
                      />
                    </div>
                    {userNameValid && formSubmitted && <small className="invalid-feedback">{userNameValid}</small>}

                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_user.png" alt="" />
                      <input
                        type="text"
                        className={`hbox ${userLastNameValid && formSubmitted ? 'is-invalid' : ''}`}
                        placeholder="Apellidos del usuario"
                        name="userLastName"
                        value={userLastName}
                        onChange={onInputChange}
                      />
                    </div>
                    {userLastNameValid && formSubmitted && <small className="invalid-feedback">{userLastNameValid}</small>}

                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_user.png" alt="" />
                      <input
                        type="email"
                        className={`hbox ${userEmailValid && formSubmitted ? 'is-invalid' : ''}`}
                        placeholder="Correo electrónico del usuario"
                        name="userEmail"
                        value={userEmail}
                        onChange={onInputChange}
                      />
                    </div>
                    {userEmailValid && formSubmitted && <small className="invalid-feedback">{userEmailValid}</small>}

                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_password.png" alt="" />
                      <input
                        type="password"
                        className={`hbox ${userPasswordValid && formSubmitted ? 'is-invalid' : ''}`}
                        placeholder="Contraseña"
                        name="userPassword"
                        value={userPassword}
                        onChange={onInputChange}
                      />
                    </div>
                    {userPasswordValid && formSubmitted && <small className="invalid-feedback">{userPasswordValid}</small>}

                    <div className="d-flex align-items-center w-100">
                      <img className="icons me-2" src="/assets/icons/icon_password.png" alt="" />
                      <input
                        type="password"
                        className={`hbox ${userPasswordRepeatValid && formSubmitted ? 'is-invalid' : ''}`}
                        placeholder="Repetir contraseña"
                        name="userPasswordRepeat"
                        value={userPasswordRepeat}
                        onChange={onInputChange}
                      />
                    </div>
                    {userPasswordRepeatValid && formSubmitted && <small className="invalid-feedback">{userPasswordRepeatValid}</small>}
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
  );
};