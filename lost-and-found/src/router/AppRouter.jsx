import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../auth';
import { LostObjectsRouter } from '../lost_objects';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';

export const AppRouter = () => {

  const { isAuthenticated, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if ( isAuthenticated === 'checking' ) {
    return (
      <div 
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: '#132D67' }}
      >
        <img 
          src="/assets/logos/logo_liceo_bco.png" 
          alt="Logo Liceo del Valle"
          className="img-fluid"
          style={{ width: '200px' }}  
        />
      </div>
    )
  }

  return (
      <Routes>
          {
            ( isAuthenticated === 'authenticated' )
            ? (
              <>
                <Route path="login" element={ <Login /> } />
                <Route path="*" element={ <Navigate to="/login"/> } />
              </>
            )
            : (
              <>
                <Route path="/*" element={ <LostObjectsRouter /> } />
              </>
            )
          }
      </Routes>
  )
} 