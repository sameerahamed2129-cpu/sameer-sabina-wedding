import { AnimatePresence, motion } from "framer-motion"
import { CalendarDays, Sparkles } from "lucide-react"
import { useState } from "react"
import { weddingData } from "../data/weddingData"

export function DateReveal() {
  const [revealed, setRevealed] = useState(false)
  return (
    <section className="px-6 py-24 md:py-32" aria-labelledby="date-reveal-title">
      <div className="ornate-rule mx-auto mb-10 max-w-5xl" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-maroon/65">Mark the moment</p>
        <h2 id="date-reveal-title" className="mt-3 font-display text-4xl text-maroon md:text-5xl">Reveal the date</h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-brown/65">
          A small interactive reveal for the day our families come together.
        </p>
        <button
          type="button"
          onClick={() => setRevealed(true)}
          aria-expanded={revealed}
          className="mt-9 inline-flex min-h-12 items-center gap-3 border border-gold bg-transparent px-7 py-3 text-xs uppercase tracking-[0.24em] text-maroon transition hover:bg-maroon hover:text-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <CalendarDays size={16} />
          {revealed ? "The day is revealed" : "Open the invitation"}
        </button>

        <AnimatePresence mode="wait">
          {revealed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="mx-auto mt-10 max-w-xl border border-gold/45 bg-ivory px-8 py-10 shadow-[0_18px_60px_rgba(41,28,26,.08)]"
            >
              <Sparkles className="mx-auto text-gold" size={20} />
              <p className="mt-4 font-display text-5xl text-maroon md:text-6xl">15</p>
              <p className="mt-2 uppercase tracking-[0.35em] text-brown/60">October 2026 · Thursday</p>
              <p className="mt-5 font-italic text-2xl text-brown">Nikah at 12:30 PM</p>
              <p className="mt-2 text-sm text-brown/60">SB Babu Function Hall · Kothur, Nellore</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
