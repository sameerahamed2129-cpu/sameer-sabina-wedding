import { motion } from "framer-motion"
import { CalendarDays, Clock3, MapPin } from "lucide-react"
import { weddingData } from "../data/weddingData"
import { SectionHeading } from "./SectionHeading"

export function Functions() {
  return (
    <section className="bg-wine px-6 py-24 md:py-32" aria-labelledby="functions-title">
      <SectionHeading eyebrow="Three moments, one celebration" title="The Celebrations" light />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        {weddingData.events.map((event, index) => (
          <motion.article
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="event-card"
          >
            <span className="font-display text-4xl text-gold/90">0{index + 1}</span>
            <h3 className="mt-5 font-display text-3xl text-ivory">{event.title}</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gold">{event.weekday}</p>
            <div className="my-6 h-px bg-gold/30" />
            <div className="space-y-3 text-sm leading-6 text-ivory/75">
              <p className="flex gap-3"><CalendarDays size={16} className="mt-1 shrink-0 text-gold" />{event.date}</p>
              <p className="flex gap-3"><Clock3 size={16} className="mt-1 shrink-0 text-gold" />{event.time}</p>
              <p className="flex gap-3"><MapPin size={16} className="mt-1 shrink-0 text-gold" />{event.venue}</p>
            </div>
            <p className="mt-7 border-t border-gold/20 pt-6 font-italic text-lg text-ivory/80">{event.note}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
