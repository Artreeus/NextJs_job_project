import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-32">
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="text-center w-full">
          {" "}
          {/* Add w-full here */}
          <div className="space-y-8 w-full">
            {" "}
            {/* Ensure inner div can expand */}
            <h1 className="text-3xl md:text-7xl font-bold w-full">
              {" "}
              {/* Add w-full here */}
              Adaptive Logo Design <br /> for Your Brand
            </h1>
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 rounded-full px-8 py-6 text-base"
            >
              <Link href="/contact">EXPLORE MORE</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's get know about me closer
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              A skilled designer with extensive experience in branding and
              visual identity, her portfolio showcases her wide range of work,
              spanning books, posters and web design.
            </p>
            <Button className="rounded-full px-8 py-6 text-white border-yellow-700 hover:bg-zinc-800">
              EXPLORE MORE ABOUT ME
            </Button>
          </div>
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/m1.png"
                alt="Designer portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-orange-500" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex items-center text-center justify-between">
          <div className="space-y-8 mx-auto">
            <h2 className="text-6xl font-bold spacy-y-5 text-center">
              My Projects Highlight
            </h2>
            <Button
              variant="outline"
              className="rounded-full px-6 py-5 text-yellow-700 border-yellow-700 hover:bg-zinc-800"
            >
              EXPLORE MORE
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <img src="p1.png" alt="" className="w-full h-auto object-cover" />
          <img src="p2.png" alt="" className="w-full h-auto object-cover" />
          <img src="p4.png" alt="" className="w-full h-auto object-cover" />
          <img src="p4.png" alt="" className="w-full h-auto object-cover" />
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold">Testimonial</h2>
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-full border-2 border-orange-500 rotate-12" />
            <div className="w-12 h-12 rounded-full border-2 border-orange-500 -rotate-12" />
          </div>
        </div>
        <div className="bg-zinc-900/50 backdrop-blur-sm p-12 rounded-2xl max-w-4xl">
          <p className="text-zinc-400 text-lg leading-relaxed italic">
            "Aaronn was fantastic to work with! Right from the start, we were
            looking for a simple, clean yet logo and professional brand identity
            for a new client offering. I knew right away he was the right fit
            for our project. His communication was great, and he was able to
            take our ideas and create exactly what we were looking for. I can't
            thank Aaronn enough for his effort and professionalism. I would
            recommend him to anyone looking for a logo."
          </p>
          <p className="mt-6 font-bold">-Martin lee</p>
        </div>
      </section>
    </div>
  );
}
