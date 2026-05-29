import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../layout/AppLayout.jsx'
import Dashboard from '../pages/Dashboard.jsx'
export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
