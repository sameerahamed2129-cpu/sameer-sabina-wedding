import { motion } from "framer-motion"

export function SectionHeading({
  eyebrow,
  title,
  light = false
}: {
  eyebrow: string
  title: string
  light?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <p className={`eyebrow ${light ? "text-gold" : "text-maroon/70"}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl leading-tight md:text-5xl ${light ? "text-ivory" : "text-maroon"}`}>
        {title}
      </h2>
      <div className={`mx-auto mt-5 h-px w-16 ${light ? "bg-gold" : "bg-gold"}`} />
    </motion.div>
  )
}
