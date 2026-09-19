import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useRef } from "react"
import { weddingData } from "../data/weddingData"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const scale = useTransform(scrollYProgress, [0, 0.75], [1, reduced ? 1 : 1.35])
  const leftX = useTransform(scrollYProgress, [0.22, 0.78], ["0%", reduced ? "0%" : "-54%"])
  const rightX = useTransform(scrollYProgress, [0.22, 0.78], ["0%", reduced ? "0%" : "54%"])
  const opacity = useTransform(scrollYProgress, [0.68, 1], [1, 0])
  const glowOpacity = useTransform(scrollYProgress, [0.18, 0.75], [0, reduced ? 0 : 0.95])
  const copyY = useTransform(scrollYProgress, [0, 0.6], ["0px", reduced ? "0px" : "-55px"])

  return (
    <section ref={ref} className="relative h-[120vh] min-h-[760px] overflow-hidden bg-[#8fc9ef]">
      <div className="absolute inset-0 hero-sky" aria-hidden="true">
        <div className="cloud cloud-a" />
        <div className="cloud cloud-b" />
        <div className="cloud cloud-c" />
      </div>

      <motion.div style={{ opacity }} className="absolute inset-x-0 bottom-0 h-[72%]">
        <motion.div style={{ scale }} className="absolute inset-0">
          <motion.div style={{ x: leftX }} className="portal-panel portal-left">
            <img src="/tajmahal.png" alt="" loading="eager" />
          </motion.div>
          <motion.div style={{ x: rightX }} className="portal-panel portal-right">
            <img src="/tajmahal.png" alt="" loading="eager" />
          </motion.div>
          <motion.div style={{ opacity: glowOpacity }} className="portal-glow" aria-hidden="true" />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: copyY }} className="relative z-20 mx-auto flex h-full max-w-5xl flex-col items-center px-6 pt-[15vh] text-center text-white">
        <p className="eyebrow text-white/85">{weddingData.heroKicker}</p>
        <h1 className="mt-5 max-w-4xl font-italic text-5xl leading-[0.95] tracking-[-0.035em] drop-shadow-[0_3px_16px_rgba(50,60,70,.2)] sm:text-6xl md:text-8xl">
          {weddingData.heroTitle}
        </h1>
        <p className="mt-6 text-sm uppercase tracking-[0.32em] text-white/90">{weddingData.displayDate}</p>
        <div className="mt-10 h-px w-20 bg-white/65" />
        <p className="mt-5 text-[10px] uppercase tracking-[0.38em] text-white/80">Scroll to explore</p>
        <ChevronDown className="mt-3 animate-bounce" size={18} strokeWidth={1.2} aria-hidden="true" />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-28 bg-gradient-to-t from-[#F8F0E3] to-transparent" />
    </section>
  )
}
