import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  return (
    <div className="container py-20 space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">About Me</h1>
        <p className="text-zinc-400">Little Brief About Myself</p>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900" />

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">My mission is to make design easier.</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design,
            you can easily select a logo without hassle. Create custom landing logos with AARONN that converts more
            visitors than any website. With lots of revisions, you can easily build a logo without porbolem.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20Me-Vt11m7JE9IKqEMvljbMD8uOVtm7h1p.png"
              alt="Designer portrait 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20Me-Vt11m7JE9IKqEMvljbMD8uOVtm7h1p.png"
              alt="Designer portrait 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold">Follow me on:</h3>
        <div className="flex flex-wrap gap-12">
          <a href="#" className="text-zinc-400 hover:text-white text-lg">
            DRIBBBLE
          </a>
          <a href="#" className="text-zinc-400 hover:text-white text-lg">
            TWITTER
          </a>
          <a href="#" className="text-zinc-400 hover:text-white text-lg">
            FACEBOOK
          </a>
          <a href="#" className="text-zinc-400 hover:text-white text-lg">
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  )
}

