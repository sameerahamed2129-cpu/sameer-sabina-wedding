import { Music2, Volume2, VolumeX } from "lucide-react"
import { useEffect, useRef } from "react"
import { weddingData } from "../data/weddingData"

export function MusicPlayer({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!audioRef.current || !weddingData.musicUrl) return
    audioRef.current.src = weddingData.musicUrl
    if (open) audioRef.current.play().catch(() => undefined)
    else audioRef.current.pause()
  }, [open])

  return (
    <>
      {weddingData.musicUrl && <audio ref={audioRef} loop preload="none" aria-label="Wedding music" />}
      <button
        type="button"
        onClick={onToggle}
        aria-label={open ? "Pause wedding music" : "Play wedding music"}
        title={weddingData.musicUrl ? "Wedding music" : "Add a music URL in weddingData.ts"}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-ivory text-maroon shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        {open ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span className="sr-only"><Music2 size={1} /> Wedding music</span>
      </button>
    </>
  )
}
