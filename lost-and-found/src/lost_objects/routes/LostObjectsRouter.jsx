import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LostItemRegisterPage, NotificationObjectPage, RecollectionObjectPage, ReportObjectPage } from '../pages'
import { SideBar } from "../../ui";

export const LostObjectsRouter = () => {
  return (
    <>
      <div className="container-fluid d-flex p-0 container-objects">
        <div>
          <SideBar />
        </div>
        
        <div className="flex-grow-1 p-1">
          <Routes>
              <Route path="/" element={<Navigate to="/home" /> } replace />
              <Route path="home" element={<HomePage />} />
              <Route path="lostItem" element={<LostItemRegisterPage />} />
              <Route path="notificationObject" element={<NotificationObjectPage />} />
              <Route path="recollectionObject" element={<RecollectionObjectPage />} />
              <Route path="reportObject" element={<ReportObjectPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
