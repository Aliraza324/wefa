import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = ['Lead routing', 'Revenue analytics', 'Client playback']

export const FeatureCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold">Workflow carousel</h2>
        <div className="flex gap-2">
          <button className="icon-button" onClick={scrollPrev} type="button" aria-label="Previous slide">
            <ChevronLeft size={18} />
          </button>
          <button className="icon-button" onClick={scrollNext} type="button" aria-label="Next slide">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3">
          {slides.map((slide) => (
            <div className="min-w-0 flex-[0_0_80%] rounded-md bg-cyan-400/10 p-5" key={slide}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
