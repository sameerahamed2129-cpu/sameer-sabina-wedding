import { useEffect, useState } from "react"
import { Hero } from "./components/Hero"
import { Invitation } from "./components/Invitation"
import { DateReveal } from "./components/DateReveal"
import { Functions } from "./components/Functions"
import { Countdown } from "./components/Countdown"
import { ThingsToKnow } from "./components/ThingsToKnow"
import { RSVP } from "./components/RSVP"
import { WishesWall } from "./components/WishesWall"
import { MusicPlayer } from "./components/MusicPlayer"
import { Footer } from "./components/Footer"
import { weddingData } from "./data/weddingData"

export default function App() {
  const [musicOpen, setMusicOpen] = useState(false)

  useEffect(() => {
    document.title = `${weddingData.heroTitle} | Wedding Invitation`
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-brown selection:bg-gold/25">
      <Hero />
      <main>
        <Invitation />
        <DateReveal />
        <Functions />
        <Countdown />
        <ThingsToKnow />
        <RSVP />
        <WishesWall />
      </main>
      <MusicPlayer open={musicOpen} onToggle={() => setMusicOpen((v) => !v)} />
      <Footer />
    </div>
  )
}
