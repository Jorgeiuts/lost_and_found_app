import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LostItemRegisterPage, NotificationObjectPage, RecollectionObjectPage, ReportObjectPage, QRgenerator, InformacionQrs } from '../pages'
import { SideBar } from "../../ui";
import { useLostObjectStore } from "../../hooks";

export const LostObjectsRouter = () => {

  const { isObjectLost } = useLostObjectStore();
  const routeMap = {
    'lost': <NotificationObjectPage />,
    'recollection': <RecollectionObjectPage />,
    'checking': <HomePage />
  }

  return (
    <>
      <div className="container-fluid d-flex p-0 container-objects">
        <div>
          <SideBar />
        </div>
        
        <div className="flex-grow-1 p-1">
          <Routes>
              <Route path="*" element={<Navigate to="/home" />} />
              <Route path="home" element={routeMap[isObjectLost]} />
              <Route path="lostItem" element={<LostItemRegisterPage />} />
              <Route path="QRgenerator" element={<QRgenerator />} />
              <Route path="reportObject" element={<ReportObjectPage />} />
              <Route path="informacion" element={<InformacionQrs />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
