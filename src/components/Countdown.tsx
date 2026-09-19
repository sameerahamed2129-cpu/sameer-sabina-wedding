import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { weddingData } from "../data/weddingData"
import { SectionHeading } from "./SectionHeading"

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(): TimeLeft {
  const distance = Math.max(0, new Date(weddingData.weddingDateISO).getTime() - Date.now())
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor(distance / 3600000) % 24,
    minutes: Math.floor(distance / 60000) % 60,
    seconds: Math.floor(distance / 1000) % 60
  }
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft())
  useEffect(() => {
    const id = window.setInterval(() => setTime(getTimeLeft()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const values = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds]
  ]

  return (
    <section className="section-ivory px-6 py-24 md:py-32">
      <SectionHeading eyebrow="Until we say yes" title="Counting every moment" />
      <div className="mx-auto grid max-w-4xl grid-cols-2 border-y border-gold/35 md:grid-cols-4">
        {values.map(([label, value], index) => (
          <motion.div
            key={String(label)}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="border-gold/35 px-4 py-8 text-center md:border-r md:last:border-r-0"
          >
            <div className="font-display text-4xl text-maroon md:text-5xl">{String(value).padStart(2, "0")}</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-brown/55">{label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
