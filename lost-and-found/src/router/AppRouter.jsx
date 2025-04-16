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

  return (
      <Routes>
          {
            ( isAuthenticated === 'not-authenticated' )
            ? (
              <>
                <Route path="/login" element={ <Login /> } />
                <Route path="/*" element={ <Navigate to="/login"/> } />
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