import { Outlet } from 'react-router-dom'
import { CommandMenu } from '../components/CommandMenu.jsx'

export const AppLayout = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <Outlet />
    <CommandMenu />
  </div>
)
