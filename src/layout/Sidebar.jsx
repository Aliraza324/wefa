import {
  BadgeDollarSign,
  CircleDot,
  Club,
  Dices,
  Flag,
  Grid3X3,
  Landmark,
  Waves,
} from 'lucide-react'

const navItems = [
  { icon: CircleDot, label: 'Sports' },
  { icon: Club, label: 'Casino' },
  { icon: Landmark, label: 'Slots' },
  { icon: Dices, label: 'Lottery' },
  { icon: BadgeDollarSign, label: 'Card' },
  { icon: Flag, label: 'Racing' },
  { icon: Waves, label: 'Fishing' },
  { icon: Grid3X3, label: 'Bingo' },
]

export const Sidebar = () => (
  <aside className="hidden bg-black/90 px-4 py-5 lg:block">
    <nav className="grid gap-3">
      {navItems.map(({ icon: Icon, label }) => (
        <button
          aria-label={label}
          className="group grid justify-items-center gap-1 text-white"
          key={label}
          title={label}
          type="button"
        >
          <span className="grid size-11 place-items-center rounded-md bg-[#2a2a2a] text-zinc-300 transition group-hover:bg-lime-400 group-hover:text-black">
            <Icon size={23} />
          </span>
          <span className="text-[0.68rem] font-black">{label}</span>
        </button>
      ))}
    </nav>
  </aside>
)
