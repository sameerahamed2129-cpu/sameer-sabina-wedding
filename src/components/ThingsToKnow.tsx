import { motion } from "framer-motion"
import { BellRing, MapPinned, Phone } from "lucide-react"
import { SectionHeading } from "./SectionHeading"

const things = [
  {
    icon: MapPinned,
    title: "Venue",
    text: "Nikah & Walima: SB Babu Function Hall, YSR Nagar, Kothur, Nellore."
  },
  {
    icon: Phone,
    title: "Contact",
    text: "For directions, timings or family coordination, please connect with the hosts directly."
  },
  {
    icon: BellRing,
    title: "A gentle reminder",
    text: "Please arrive a little early so every celebration can begin with ease and blessings."
  }
]

export function ThingsToKnow() {
  return (
    <section className="bg-[#F3E8D7] px-6 py-24 md:py-32" aria-labelledby="know-title">
      <SectionHeading eyebrow="Before you join us" title="Things to Know" />
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        {things.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border border-gold/30 bg-cream p-7"
            >
              <Icon className="text-maroon" size={22} strokeWidth={1.4} />
              <h3 className="mt-5 font-display text-2xl text-maroon">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brown/65">{item.text}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
