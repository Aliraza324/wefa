import { Outlet } from 'react-router-dom'
import { Chat } from './Chat.jsx'
import { Navbar } from './Navbar.jsx'
import { Sidebar } from './Sidebar.jsx'

export const AppLayout = () => (
  <div className="min-h-screen bg-[#050705] text-zinc-100">
    <Navbar />

    <div className="grid min-h-[calc(100vh-4.5rem)] grid-cols-1 lg:grid-cols-[5rem_minmax(0,1fr)] xl:grid-cols-[5rem_minmax(0,1fr)_18rem]">
      <Sidebar />

      <div className="min-w-0">
        <main className="mx-auto w-full max-w-[70rem] px-4 py-5 md:px-5">
          <Outlet />
        </main>
      </div>

      <Chat />
    </div>
  </div>
)
