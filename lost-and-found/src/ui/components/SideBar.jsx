import { NavLink } from "react-router-dom"
import '/assets/css/styles.css'
import { useAuthStore } from "../../hooks"

export const SideBar = () => {

    const { startLogout } = useAuthStore();

    const onLogout = () => {
        startLogout();
    }

  return (
    <div className="sidebar d-flex flex-column p-4 h-100">
        <img src="/assets/logos/logo_lnf.png" alt="" />
        <nav className="mt-4 nav nav-pills nav-fill">
            <NavLink to="/home" className="nav-link mt-3">
                <img src="/assets/icons/icon_home.png" alt="Panel principal" className="icon-img" />
                Panel principal
            </NavLink>
            <NavLink to="/lostItem" className="nav-link mt-3">
                <img src="/assets/icons/icon_plus_light.png" alt="Registrar objeto" className="icon-img" />
                Registrar objeto
            </NavLink>
            <NavLink to="/reportObject" className="nav-link mt-3">
                <img src="/assets/icons/icon_search.png" alt="Reporte de entrega" className="icon-img" />
                Reporte de entrega
            </NavLink>
            <NavLink to="/information" className="nav-link mt-3">
                <img src="/assets/icons/icon_search.png" alt="Buscador de QR" className="icon-img" />
                Informacion QRs
            </NavLink>
            <NavLink to="/QRgenerator" className="nav-link mt-3">
                <img src="/assets/icons/icon_qr.png" alt="Generador de QR" className="icon-img" />
                Generador de QRs
            </NavLink>
        </nav>
        <button 
            onClick={onLogout}
            className="logout mt-auto" 
        >
            <img src="/assets/icons/icon_logout.png" alt="Logout" className="icon-img" /> 
            Cerrar sesión
        </button>
    </div>
  )
}
