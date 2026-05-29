import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export const MediaPanel = () => (
  <section className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
    <h2 className="mb-3 text-base font-semibold">Media review</h2>
    <div className="overflow-hidden rounded-md bg-slate-950">
      <ReactPlayer
        controls
        height="220px"
        light
        src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="100%"
      />
    </div>
    <Swiper className="mt-4" spaceBetween={12} slidesPerView={2}>
      {['Brief', 'Demo', 'Follow-up'].map((item) => (
        <SwiperSlide className="rounded-md bg-slate-800 p-3 text-sm" key={item}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)
