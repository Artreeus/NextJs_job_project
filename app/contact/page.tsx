import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function Contact() {
  return (
    <div className="container py-20 space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">Contact Me</h1>
        <p className="text-zinc-400">For Any Project Knock Us</p>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900" />

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <h2 className="text-4xl font-bold">Get in Touch With Us</h2>
          <form className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium uppercase">
                NAME
              </label>
              <Input id="name" placeholder="Your name" className="bg-zinc-900 border-zinc-800 h-14" />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium uppercase">
                SUBJECT
              </label>
              <Input id="subject" placeholder="Subject" className="bg-zinc-900 border-zinc-800 h-14" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium uppercase">
                MESSAGE
              </label>
              <Textarea id="message" placeholder="Your message" className="bg-zinc-900 border-zinc-800 min-h-[150px]" />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 w-full h-14 text-lg">SEND</Button>
          </form>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Contact%20Me-598DgAvgBBPG56Z82oi03o7qvJ57mk.png"
            alt="Laptop in dark environment"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 pt-16">
        <div className="text-center">
          <p className="text-zinc-400 mb-2">Street Avenue 21, CA</p>
        </div>
        <div className="text-center">
          <p className="text-zinc-400 mb-2">+9 0283353</p>
        </div>
        <div className="text-center">
          <a href="mailto:info@aaronn.com" className="text-zinc-400 hover:text-white">
            info@aaronn.com
          </a>
        </div>
      </div>
    </div>
  )
}

