import { Command } from 'cmdk'
import { Search } from 'lucide-react'
import { useEffect } from 'react'
import { selectCommandOpen, setCommandOpen } from '../features/ui/uiSlice.js'
import { useAppDispatch, useAppSelector } from '../hooks/useStore.js'

const actions = ['Open dashboard', 'Sync realtime client', 'Review reports']

export const CommandMenu = () => {
  const dispatch = useAppDispatch()
  const open = useAppSelector(selectCommandOpen)

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        dispatch(setCommandOpen(!open))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [dispatch, open])

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-start bg-black/50 p-6 pt-24">
      <Command className="mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4">
          <Search size={18} />
          <Command.Input className="h-12 flex-1 bg-transparent outline-none" placeholder="Search commands" />
        </div>
        <Command.List className="p-2">
          <Command.Empty className="px-3 py-6 text-sm text-slate-400">No results found.</Command.Empty>
          {actions.map((action) => (
            <Command.Item
              className="cursor-pointer rounded-md px-3 py-2 text-sm aria-selected:bg-cyan-500/20"
              key={action}
              onSelect={() => dispatch(setCommandOpen(false))}
            >
              {action}
            </Command.Item>
          ))}
        </Command.List>
      </Command>
    </div>
  )
}
