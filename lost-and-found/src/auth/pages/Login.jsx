import { useForm, useAuthStore } from '../../hooks';
import '/assets/css/styles.css';

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

export const Login = () => {

  const { startLogin, error } = useAuthStore();

  const { loginEmail, loginPassword, onInputChange } = useForm( loginFormFields );

  const loginSubmit = ( event ) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  }

  return (
    <div className="container-fluid d-flex p-0">
      <div className="col-md-5 left-panel">
        <img src="/assets/logos/logo_liceo_bco.png" alt="Logo Liceo del Valle"/>
      </div>
      <div className="col-md-7 right-panel">
        <h3 className="text-center fw-bold text-login">INICIAR SESIÓN</h3>
        <p className="text-center text-muted text-welcome">Bienvenido a Lost and Found</p>
        <form onSubmit={ loginSubmit }>
                <div className="mb-3 d-flex align-items-center">
                    <img className="icons" src="/assets/icons/icon_user.png" alt=""/>
                    <input 
                      type="email" 
                      className="hbox" 
                      placeholder="Correo electrónico" 
                      value={loginEmail} 
                      onChange={onInputChange} 
                      name="loginEmail"
                    />
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <img className="icons" src="/assets/icons/icon_password.png" alt=""/>
                    <input 
                    type="password" 
                    className="hbox" 
                    placeholder="Contraseña"
                    value={loginPassword}
                    onChange={onInputChange}
                    name="loginPassword"
                    />
                </div>
                <div className="container d-flex justify-content-end">
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      value="Login"
                    >Iniciar sesión</button>
                </div>
        </form>
      </div>
    </div>
  )
}