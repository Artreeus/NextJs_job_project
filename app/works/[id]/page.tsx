import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"




export default function ProjectDetail() {
  return (
    <div className="container py-20 space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Project Detail</h1>
        <p className="text-zinc-400">Details About The Project</p>
      </div>

      <div className="relative aspect-video rounded-2xl overflow-hidden">
        <Image
          src="/r1.png"
          alt="Project main image"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Project Story</h2>
        <p className="text-zinc-400 max-w-4xl leading-relaxed">
          The fact that photography has different meanings to different people is one of the many components of its
          appeal. Photography is such an important part of our life that it is now very difficult to imagine life
          without it. We cannot imagine a wedding without the opportunity to capture it on film. We would not be able to
          remember the growing up of childhood this honestly if we did not have pictures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image
            src="/r2.png"
            alt="Project detail image 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image
            src="/r3.png"
            alt="Project detail image 2"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Day One</h2>
        <p className="text-zinc-400 max-w-4xl leading-relaxed">
          Everywhere we are bombarded by photography in newspapers, magazines, advertisements on television on the
          Internet, but we still crave even more. And what helps to achieve a good picture? It is a combination of
          thought imagination, visual design, technical skills, and organizational skill.
        </p>
      </div>

      <div className="flex items-center justify-between pt-16 border-t border-zinc-800">
        <Button variant="ghost" className="text-zinc-400 hover:text-white">
          ← PREVIOUS WORK
        </Button>
        <Button variant="ghost" className="text-zinc-400 hover:text-white">
          NEXT WORK →
        </Button>
      </div>

      <section className="space-y-12 pt-16">
  <h2 className="text-3xl font-bold">Other Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <Link href="/works/1" className="group">
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
        <Image
          src="/r4.png"
          alt="Project 1"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
      </div>
      <h3 className="font-bold mb-1">Logo Project 1</h3>
      <p className="text-sm text-zinc-400">Branding</p>
    </Link>
    <Link href="/works/2" className="group">
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
        <Image
          src="/r5.png"
          alt="Project 2"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
      </div>
      <h3 className="font-bold mb-1">Logo Project 2</h3>
      <p className="text-sm text-zinc-400">Branding</p>
    </Link>
    <Link href="/works/3" className="group">
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
        <Image
          src="/r6.png"
          alt="Project 3"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
      </div>
      <h3 className="font-bold mb-1">Logo Project 3</h3>
      <p className="text-sm text-zinc-400">Branding</p>
    </Link>
  </div>
</section>
    </div>
  )
}

