 import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "blue",
    category: "Orvillebury         ",

    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
  {
    title: "green",
    category: "West Lavada",

    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
  {
    title: "aqua",
    category: "Rempelshire",

    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
  {
    title: "lime",
    category: "Delfinaland ",

    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
  {
    title: "fuchsia",
    category: "Buckridgeburgh ",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
  {
    title: "black",
    category: "Pfefferstad",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
]

export default function Works() {
  return (
    <div className="container py-20 space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">My Works</h1>
        <p className="text-zinc-400">Showcasing some of my best work</p>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link href={`/works/${index + 1}`} key={index} className="group">
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-zinc-400">
              {project.category} 
            </p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="rounded-full px-8 py-6 text-base border-zinc-700 hover:bg-zinc-800">
          LOAD MORE
        </Button>
      </div>
    </div>
  )
}

