import { Route, Routes } from "react-router-dom"
import { HomePage, LostItemRegisterPage, NotificationObjectPage, RecollectionObjectPage, ReportObjectPage } from '../pages'

export const LostObjectsRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="lostItem" element={<LostItemRegisterPage />} />
            <Route path="notificationObject" element={<NotificationObjectPage />} />
            <Route path="recollectionObject" element={<RecollectionObjectPage />} />
            <Route path="reportObject" element={<ReportObjectPage />} />
        </Routes>
    </>
  )
}
