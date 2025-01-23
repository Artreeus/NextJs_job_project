import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Brand Journey Improvements",
    category: "Branding",
    subCategory: "Logo Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
  {
    title: "Brand Grouping",
    category: "Branding",
    subCategory: "UX Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
  {
    title: "NFT Glimps",
    category: "Portfolio",
    subCategory: "NFT Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
  {
    title: "Brand Suggestions",
    category: "13",
    subCategory: "NFT Logo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
  {
    title: "Logo Project 5",
    category: "Branding",
    subCategory: "Logo Design",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
  },
  {
    title: "UX Project 6",
    category: "UX/UI",
    subCategory: "Web Design",
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
              {project.category} • {project.subCategory}
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

