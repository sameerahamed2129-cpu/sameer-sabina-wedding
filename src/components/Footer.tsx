import { ArrowUp, Heart } from "lucide-react"
import { weddingData } from "../data/weddingData"

export function Footer() {
  return (
    <footer className="section-ivory border-t border-gold/25 px-6 py-20 text-center">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold text-maroon transition hover:bg-maroon hover:text-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>
      <p className="mt-8 font-italic text-4xl text-maroon">{weddingData.groom} &amp; {weddingData.bride}</p>
      <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-brown/45">14–16 October 2026 · Nellore</p>
      <p className="mt-8 flex items-center justify-center gap-2 text-xs text-brown/45">Made with <Heart size={12} className="fill-gold text-gold" /> for a beautiful beginning</p>
    </footer>
  )
}
