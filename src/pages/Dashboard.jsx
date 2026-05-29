import {
  createColumnHelper,
} from '@tanstack/react-table'
import { Crown, Flame, Play, ShieldCheck, Star, Timer, Trophy } from 'lucide-react'
import { liftOnHover, surfaceMotion } from '../animations/animation.js'
import heroImage from '../assets/hero.png'

const categories = [
  { title: 'Casino', value: '1,248 games', color: 'from-cyan-500/30 to-sky-500/10' },
  { title: 'Sports', value: 'Live odds', color: 'from-violet-500/30 to-fuchsia-500/10' },
  { title: 'Wheel', value: 'Hot rounds', color: 'from-emerald-500/30 to-lime-500/10' },
  { title: 'Slots', value: 'New drops', color: 'from-lime-500/30 to-green-500/10' },
]

const stats = [
  { label: 'Wagered today', value: '$28,400' },
  { label: 'Active players', value: '8,921' },
  { label: 'Live events', value: '37' },
  { label: 'Bonus pool', value: '$12,800' },
]

const games = [
  'Treasure Cash',
  'Gates Legacy',
  'Queen Quest',
  'Dragon Run',
  'Serpent King',
  'Golden Ace',
  'Wild Fortune',
  'Lucky Burst',
  'Neon Dice',
  'Crystal Spin',
  'Royal Rush',
  'Pirate Coin',
]

const winners = [
  { player: 'mira***', prize: '$12,400', game: 'Lucky Burst' },
  { player: 'enzo***', prize: '$8,120', game: 'Gates Legacy' },
  { player: 'rafa***', prize: '$4,970', game: 'Neon Dice' },
]

const tournaments = ['Midnight Rush', 'Spin Masters', 'Daily High Roller']

const columnHelper = createColumnHelper()

const winnerColumns = [
  { id: columnHelper.accessor('player', {}).id, key: 'player', header: 'Player' },
  { id: columnHelper.accessor('game', {}).id, key: 'game', header: 'Game' },
  { id: columnHelper.accessor('prize', {}).id, key: 'prize', header: 'Prize' },
]

const WinnersTable = () => {
  return (
    <table className="w-full border-collapse text-left text-sm">
      <thead className="text-zinc-500">
        <tr>
          {winnerColumns.map((column) => (
            <th className="border-b border-white/10 px-3 py-2 font-medium" key={column.id}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {winners.map((winner) => (
          <tr key={winner.player}>
            {winnerColumns.map((column) => (
              <td className="border-b border-white/5 p-3 text-zinc-200" key={column.id}>
                {winner[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Dashboard = () => (
  <div className="grid gap-5">
    <section className="grid gap-4 lg:grid-cols-[1.35fr_0.9fr]">
      <div className="relative min-h-[22rem] overflow-hidden rounded-lg border border-lime-400/30 bg-[#0e230b] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(132,204,22,0.35),transparent_28%),linear-gradient(135deg,rgba(22,163,74,0.45),rgba(5,7,5,0.1))]" />
        <div className="relative z-10 grid h-full gap-5 md:grid-cols-[1fr_16rem]">
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-lime-400 px-3 py-1 text-xs font-black text-black">
                <Crown size={14} />
                Daily bonus
              </span>
              <h1 className="mt-5 max-w-md text-4xl font-black leading-tight text-white md:text-5xl">
                Claim your free daily cash
              </h1>
              <p className="mt-3 max-w-sm text-sm text-lime-100/80">
                Enter the lobby, collect rewards, and jump straight into the highest performing tables.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-md bg-lime-400 px-5 py-3 text-sm font-black text-black" type="button">
                Claim now
              </button>
              <button className="rounded-md border border-white/15 bg-black/30 px-5 py-3 text-sm font-semibold text-white" type="button">
                View rewards
              </button>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <img alt="Wefa reward stack" className="size-64 object-contain drop-shadow-[0_0_36px_rgba(132,204,22,0.35)]" src={heroImage} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <button
            className={`group rounded-lg border border-white/10 bg-gradient-to-br ${category.color} p-4 text-left transition hover:border-lime-400/50`}
            key={category.title}
            type="button"
          >
            <div className="mb-6 flex justify-end">
              <span className="grid size-9 place-items-center rounded-md bg-black/40 text-lime-300">
                <Play size={16} />
              </span>
            </div>
            <h2 className="text-lg font-black">{category.title}</h2>
            <p className="mt-1 text-sm text-zinc-400">{category.value}</p>
          </button>
        ))}
      </div>
    </section>

    <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article className="rounded-lg border border-white/10 bg-black/55 p-4" key={stat.label}>
          <p className="text-sm text-zinc-500">{stat.label}</p>
          <strong className="mt-2 block text-2xl text-lime-300">{stat.value}</strong>
        </article>
      ))}
    </section>

    <section className="rounded-lg border border-white/10 bg-black/55 p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Flame className="text-lime-300" size={18} />
          <h2 className="text-lg font-black">Top games</h2>
        </div>
        <button className="rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300" type="button">
          See all
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {games.map((game, index) => (
          <button className={`group overflow-hidden rounded-lg border border-white/10 bg-zinc-950 text-left ${surfaceMotion.className} ${liftOnHover}`} key={game} type="button">
            <div className="grid aspect-[4/3] place-items-center bg-[linear-gradient(135deg,rgba(132,204,22,0.24),rgba(14,165,233,0.14)),radial-gradient(circle_at_70%_20%,rgba(250,204,21,0.32),transparent_28%)]">
              <img alt="" className="size-16 object-contain opacity-85 transition group-hover:scale-105" src={heroImage} />
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-zinc-100">{game}</p>
              <p className="mt-1 text-xs text-zinc-500">RTP {(96 + (index % 4) * 0.3).toFixed(1)}%</p>
            </div>
          </button>
        ))}
      </div>
    </section>

    <section className="grid gap-5 xl:grid-cols-[1fr_1fr]">
      <div className="rounded-lg border border-white/10 bg-black/55 p-4">
        <div className="mb-4 flex items-center gap-2">
          <Star className="text-amber-300" size={18} />
          <h2 className="text-lg font-black">Live winners</h2>
        </div>
        <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
          <WinnersTable />
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-black/55 p-4">
        <div className="mb-4 flex items-center gap-2">
          <Trophy className="text-lime-300" size={18} />
          <h2 className="text-lg font-black">Tournaments</h2>
        </div>
        <div className="grid gap-3">
          {tournaments.map((tournament, index) => (
            <article className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3" key={tournament}>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md bg-lime-400/10 text-lime-300">
                  <Timer size={18} />
                </span>
                <div>
                  <p className="font-semibold">{tournament}</p>
                  <p className="text-sm text-zinc-500">Starts in {index + 2}h</p>
                </div>
              </div>
              <button className="rounded-md bg-lime-400 px-3 py-2 text-sm font-bold text-black" type="button">
                Join
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="rounded-lg border border-white/10 bg-black/55 p-4">
      <div className="mb-4 flex items-center gap-2">
        <ShieldCheck className="text-lime-300" size={18} />
        <h2 className="text-lg font-black">Featured by Wefa</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {['Secure wallet', 'Fast withdrawals', 'Responsible play'].map((item) => (
          <article className="rounded-md border border-white/10 bg-white/[0.04] p-4" key={item}>
            <h3 className="font-semibold text-zinc-100">{item}</h3>
            <p className="mt-2 text-sm text-zinc-500">Built into the lobby controls for quick access.</p>
          </article>
        ))}
      </div>
    </section>
  </div>
)

export default Dashboard
