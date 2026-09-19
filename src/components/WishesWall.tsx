import { Heart, Plus, Trash2 } from "lucide-react"
import { FormEvent, useEffect, useState } from "react"
import { SectionHeading } from "./SectionHeading"

type Wish = { id: string; name: string; text: string }

export function WishesWall() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [name, setName] = useState("")
  const [text, setText] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("sameer-sabina-wishes")
    if (saved) setWishes(JSON.parse(saved))
  }, [])

  function addWish(e: FormEvent) {
    e.preventDefault()
    if (name.trim().length < 2 || text.trim().length < 2) return
    const next = [{ id: crypto.randomUUID(), name: name.trim(), text: text.trim() }, ...wishes].slice(0, 20)
    setWishes(next)
    localStorage.setItem("sameer-sabina-wishes", JSON.stringify(next))
    setName("")
    setText("")
  }

  function clearWishes() {
    setWishes([])
    localStorage.removeItem("sameer-sabina-wishes")
  }

  return (
    <section className="section-ivory px-6 py-24 md:py-32" aria-labelledby="wishes-title">
      <SectionHeading eyebrow="Leave a little love" title="Wishes Wall" />
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[.8fr_1.2fr]">
        <form onSubmit={addWish} className="border border-gold/35 bg-[#F3E8D7] p-7">
          <Heart className="text-maroon" size={20} />
          <h3 className="mt-4 font-display text-2xl text-maroon">Write a wish</h3>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="light-input mt-6" />
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Your blessing or message" rows={5} className="light-input mt-3 resize-none" />
          <button type="submit" className="mt-4 inline-flex items-center gap-2 border border-maroon bg-maroon px-5 py-3 text-xs uppercase tracking-[0.2em] text-ivory transition hover:bg-wine focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
            <Plus size={15} /> Add wish
          </button>
        </form>

        <div>
          {wishes.length === 0 ? (
            <div className="border-y border-gold/30 py-12 text-center">
              <p className="font-italic text-2xl text-brown/60">Your wishes will appear here.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {wishes.map((wish) => (
                <article key={wish.id} className="border-b border-gold/25 pb-5 pt-2">
                  <p className="font-display text-xl text-maroon">{wish.name}</p>
                  <p className="mt-1 text-sm leading-7 text-brown/65">{wish.text}</p>
                </article>
              ))}
              <button type="button" onClick={clearWishes} className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brown/45 hover:text-maroon">
                <Trash2 size={13} /> Clear local wishes
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
