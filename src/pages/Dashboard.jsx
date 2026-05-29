import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import { BarChart3, Moon, Radio, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { fetchPosts } from '../api/client.js'
import { FeatureCarousel } from '../components/FeatureCarousel.jsx'
import { MediaPanel } from '../components/MediaPanel.jsx'
import { MetricsTable } from '../components/MetricsTable.jsx'
import { SignupForm } from '../components/SignupForm.jsx'
import { setCommandOpen } from '../features/ui/uiSlice.js'
import { useAppDispatch } from '../hooks/useStore.js'
import { realtimeClient } from '../service/realtime.js'
import { cn } from '../utils/cn.js'

const tableData = [
  { channel: 'Website', leads: 42, status: 'Active' },
  { channel: 'Referral', leads: 18, status: 'Review' },
  { channel: 'Outbound', leads: 27, status: 'Active' },
]

export const Dashboard = () => {
  const dispatch = useAppDispatch()
  const shouldReduceMotion = useReducedMotion()
  const { ref, inView } = useInView({ triggerOnce: true })
  const { resolvedTheme, setTheme } = useTheme()
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  const toggleRealtime = () => {
    if (realtimeClient.connected) {
      realtimeClient.disconnect()
      return
    }

    realtimeClient.connect()
  }

  return (
    <main className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="lg:col-span-2">
        <LazyMotion features={domAnimation}>
        <m.div
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-cyan-300">{dayjs().format('dddd, MMM D')}</p>
              <h1 className="mt-2 text-3xl font-bold">Wefa workspace</h1>
            </div>
            <div className="flex gap-2">
              <button className="icon-button" type="button" onClick={() => dispatch(setCommandOpen(true))} aria-label="Open command menu">
                <BarChart3 size={18} />
              </button>
              <button className="icon-button" type="button" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
                {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="icon-button" type="button" onClick={toggleRealtime} aria-label="Toggle realtime connection">
                <Radio size={18} />
              </button>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {tableData.map((item) => (
              <div className={cn('rounded-md border border-white/10 p-4', item.status === 'Active' && 'bg-emerald-400/10')} key={item.channel}>
                <p className="text-sm text-slate-400">{item.channel}</p>
                <strong className="mt-2 block text-2xl">
                  <CountUp end={item.leads} duration={inView ? 1.4 : 0} />
                </strong>
              </div>
            ))}
          </div>
        </m.div>
        </LazyMotion>
      </section>

      <section ref={ref} className="grid gap-6">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <h2 className="mb-3 text-base font-semibold">Lead table</h2>
          <MetricsTable data={tableData} />
        </div>
        <FeatureCarousel />
        <SignupForm />
      </section>

      <section className="grid gap-6">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <h2 className="mb-3 text-base font-semibold">API preview</h2>
          {isLoading ? (
            <Skeleton count={4} baseColor="#1e293b" highlightColor="#334155" />
          ) : (
            <ul className="grid gap-2 text-sm text-slate-300">
              {(data ?? []).slice(0, 4).map((post) => (
                <li className="rounded-md bg-slate-900 p-3" key={post.id}>
                  {post.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <MediaPanel />
      </section>
    </main>
  )
}
