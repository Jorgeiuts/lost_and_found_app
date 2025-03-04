import { Route, Routes } from 'react-router-dom';
import { Login } from '../auth';
import { LostObjectsRouter } from '../lost_objects'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="lostObjects" element={<LostObjectsRouter />} />
        </Routes>
    </>
  )
}