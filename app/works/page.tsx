import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  { title: "blue", category: "Orvillebury ", image: "image.png"  },
  { title: "green", category: "West Lavada", image: "ii2.png" },
  { title: "aqua", category: "Rempelshire", image: "i1.png " },
  { title: "lime", category: "Delfinaland ", image: "i2.png" },
  { title: "fuchsia", category: "Buckridgeburgh ", image: "i3.png" },
  { title: "black", category: "Pfefferstad ", image: "i4.png" },
  { title: "purple", category: "South Adrienne ", image: "img.png" },
  { title: "maroon", category: "Lake Trevor ", image: "i5.png" },
  
]
export default function Works() {
  return (
    <div className="container py-20 space-y-16">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold">My Works</h1>
        <p className="text-zinc-400">Showcasing some of my best work</p>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900" />
      <div className="space-y-8">
        {/* First row - 3 images */}
        <div className="grid grid-cols-3 gap-8 text-center">
          {projects.slice(0, 3).map((project, index) => (
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
              <p className="text-zinc-400">{project.category}</p>
            </Link>
          ))}
        </div>

        {/* Second row - 2 images */}
        <div className="grid grid-cols-2  gap-8 text-center">
          {projects.slice(3, 5).map((project, index) => (
            <Link href={`/works/${index + 4}`} key={index} className="group">
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
              <p className="text-zinc-400">{project.category}</p>
            </Link>
          ))}
        </div>

        {/* Third row - 3 images */}
        <div className="grid grid-cols-3 gap-8 text-center">
          {projects.slice(5, 8).map((project, index) => (
            <Link href={`/works/${index + 6}`} key={index} className="group">
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
              <p className="text-zinc-400">{project.category}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant="outline" className="rounded-full  px-8 py-6 text-yellow-600 border-yellow-600 hover:bg-zinc-800">
          LOAD MORE
        </Button>
      </div>
    </div>
  )
}