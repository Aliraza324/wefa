import { Gift, MessageCircle } from 'lucide-react'

export const Chat = () => (
  <aside className="hidden bg-[#070807] px-5 py-5 xl:block">
    <div className="mb-4 rounded-lg bg-black p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-2xl font-black uppercase text-lime-300">Jackpot</p>
        <Gift className="text-amber-300" size={36} />
      </div>
      <div className="rounded-md bg-[#1b1b1b] px-4 py-3 text-center">
        <strong className="text-base font-black text-white">INR 100,000,000.00</strong>
      </div>
    </div>

    <section className="min-h-[19rem] rounded-lg bg-black">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <MessageCircle className="text-sky-300" size={20} />
          <h2 className="text-lg font-black">Chat</h2>
        </div>
      </div>
      <div className="grid min-h-[14rem] place-items-center px-5 text-center">
        <div>
          <p className="text-sm font-black text-white">Please log in to proceed chat</p>
          <button className="mt-5 rounded-md bg-lime-400 px-8 py-3 text-sm font-black text-black" type="button">
            Log In
          </button>
        </div>
      </div>
    </section>
  </aside>
)
