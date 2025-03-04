import '/assets/css/login.css'

export const Login = () => {
  return (
    <div className="container-fluid row">
      <div className="col-md-5 left-panel">
        <img src="/assets/logos/logo_liceo_bco.png" alt="Logo Liceo del Valle"/>
      </div>
      <div className="col-md-7 right-panel">
        <h3 className="text-center fw-bold text-login">INICIAR SESIÓN</h3>
        <p className="text-center text-muted text-welcome">Bienvenido a Lost and Found</p>
        <form>
                <div className="mb-3 d-flex align-items-center">
                    <img className="icons" src="/assets/icons/icon_user.png" alt=""/>
                    <input type="email" className="hbox" placeholder="Correo electrónico"/>
                </div>
                <div className="mb-3 d-flex align-items-center">
                    <img className="icons" src="/assets/icons/icon_password.png" alt=""/>
                    <input type="password" className="hbox" placeholder="Contraseña"/>
                </div>
                <div className="container d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                </div>
        </form>
      </div>
    </div>
  )
}