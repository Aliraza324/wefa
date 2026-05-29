import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

export const Navbar = () => (
  <header className="sticky top-0 z-30 border-b border-white/5 bg-[#050805]/95 px-5 py-3 backdrop-blur">
    <div className="flex h-12 items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-4">
        <button
          aria-label="Open menu"
          className="grid size-9 shrink-0 place-items-center rounded-md bg-zinc-800 text-zinc-300 transition hover:bg-zinc-700 hover:text-white"
          type="button"
        >
          <Menu size={22} strokeWidth={3} />
        </button>

        <Link aria-label="Wefa Life home" className="flex min-w-0 items-center gap-2" to="/">
          <span className="relative grid h-9 w-14 shrink-0 grid-cols-2 gap-1">
            <span className="h-9 w-4 rotate-[-35deg] rounded-full bg-[#5cf13f]" />
            <span className="h-9 w-4 rotate-[-35deg] rounded-full bg-[#5cf13f]" />
            <span className="absolute left-10 top-0 size-3 rotate-45 rounded-[0.18rem] bg-white" />
          </span>
          <span className="leading-none">
            <span className="block text-3xl font-black tracking-normal text-white">efa</span>
            <span className="block pl-1 text-[0.58rem] font-black uppercase tracking-[0.52em] text-white/80">Life</span>
          </span>
        </Link>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button
          aria-label="Change language"
          className="hidden size-8 place-items-center rounded-full border border-white/15 bg-[#101418] text-xs font-black text-white sm:grid"
          type="button"
        >
          UK
        </button>
        <button
          className="hidden h-9 rounded-md bg-white px-7 text-sm font-black text-black transition hover:bg-zinc-200 sm:inline-flex sm:items-center"
          type="button"
        >
          Log In
        </button>
        <button
          className="h-9 rounded-md border border-lime-300/70 bg-[#56e338] px-6 text-sm font-black text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] transition hover:bg-[#65f044]"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </div>
  </header>
)
