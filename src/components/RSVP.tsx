import { Check, Send, X } from "lucide-react"
import { FormEvent, useState } from "react"

type Response = "yes" | "no" | null

export function RSVP() {
  const [response, setResponse] = useState<Response>(null)
  const [name, setName] = useState("")
  const [guests, setGuests] = useState("1")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  function submit(event: FormEvent) {
    event.preventDefault()
    if (!response) return setError("Please select Yes or No.")
    if (name.trim().length < 2) return setError("Please enter your name.")
    setError("")
    const record = { name: name.trim(), guests: response === "yes" ? Number(guests) : 0, response, message: message.trim(), createdAt: new Date().toISOString() }
    localStorage.setItem("sameer-sabina-rsvp", JSON.stringify(record))
    setSubmitted(true)
  }

  return (
    <section className="bg-maroon px-6 py-24 text-ivory md:py-32" aria-labelledby="rsvp-title">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-gold">We would love to hear from you</p>
        <h2 id="rsvp-title" className="mt-3 font-display text-4xl md:text-5xl">RSVP</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-ivory/70">Let us know if you will be joining our celebrations.</p>

        {submitted ? (
          <div className="mt-10 border border-gold/40 bg-wine/60 p-10">
            <Check className="mx-auto text-gold" size={30} />
            <h3 className="mt-4 font-display text-3xl">Thank you, {name}.</h3>
            <p className="mt-3 text-sm text-ivory/70">Your response has been saved on this device.</p>
            <button type="button" onClick={() => setSubmitted(false)} className="mt-7 text-xs uppercase tracking-[0.25em] text-gold underline underline-offset-4">Edit response</button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-10 space-y-5 text-left">
            <fieldset>
              <legend className="mb-3 text-xs uppercase tracking-[0.22em] text-gold">Will you join us?</legend>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" aria-pressed={response === "yes"} onClick={() => setResponse("yes")} className={`rsvp-choice ${response === "yes" ? "is-selected" : ""}`}>
                  <Check size={17} /> Yes, with joy
                </button>
                <button type="button" aria-pressed={response === "no"} onClick={() => setResponse("no")} className={`rsvp-choice ${response === "no" ? "is-selected" : ""}`}>
                  <X size={17} /> Unable to attend
                </button>
              </div>
            </fieldset>
            <label className="block">
              <span className="sr-only">Your name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="form-input" />
            </label>
            {response === "yes" && (
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-ivory/55">Guests</span>
                <select value={guests} onChange={(e) => setGuests(e.target.value)} className="form-input">
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </label>
            )}
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="A note for the couple (optional)" rows={4} className="form-input resize-none" />
            </label>
            {error && <p role="alert" className="text-sm text-[#F1C7C7]">{error}</p>}
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 border border-gold bg-gold px-6 py-3 text-xs uppercase tracking-[0.25em] text-wine transition hover:bg-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory">
              Send RSVP <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
