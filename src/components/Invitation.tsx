import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { weddingData } from "../data/weddingData"
import { SectionHeading } from "./SectionHeading"

export function Invitation() {
  return (
    <section className="section-ivory px-6 py-24 md:py-32" aria-labelledby="invitation-title">
      <SectionHeading eyebrow="With the blessings of our families" title="A beautiful beginning" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="mx-auto mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-gold/70">
          <div className="relative h-10 w-10">
            <div className="absolute left-1 top-0 h-9 w-9 rounded-full bg-maroon" />
            <div className="absolute left-5 top-[-2px] h-9 w-9 rounded-full bg-cream" />
            <Star className="absolute right-[-2px] top-[-3px] fill-gold text-gold" size={10} />
          </div>
        </div>
        <p className="font-display text-xl leading-relaxed text-brown/75 md:text-2xl">
          Together with our beloved families, we invite you to share in the joy of our wedding celebrations.
        </p>
        <p className="mt-10 text-xs uppercase tracking-[0.35em] text-maroon/60">You are cordially invited</p>
        <h3 id="invitation-title" className="mt-6 font-italic text-5xl text-maroon md:text-7xl">
          {weddingData.groom} <span className="text-gold">&amp;</span> {weddingData.bride}
        </h3>
        <div className="mt-10 grid gap-6 border-y border-gold/35 py-7 text-xs leading-relaxed text-brown/65 md:grid-cols-2">
          <p><span className="font-semibold uppercase tracking-[0.18em] text-maroon/75">Groom's family</span><br />{weddingData.parents.groom}</p>
          <p><span className="font-semibold uppercase tracking-[0.18em] text-maroon/75">Bride's family</span><br />{weddingData.parents.bride}</p>
        </div>
      </motion.div>
    </section>
  )
}
