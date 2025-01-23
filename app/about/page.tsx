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
        
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden h-[900px] w-full ">
            <Image
              src="/Text.png"
              alt="Designer portrait 1"
              fill
              className=""
            />
         
      </div>

      <div className="space-y-8">
        <h3 className="text-3xl font-bold ">Follow me on:</h3>
        <div className="flex justify-around font-extrabold">
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

