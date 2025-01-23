export interface Project {
    id: number
    title: string
    category: string
    subCategory: string
    description: string
    image: string
    detailImages: string[]
  }
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Brand Journey Improvements",
      category: "Branding",
      subCategory: "Logo Design",
      description:
        "A comprehensive brand refresh for a tech startup, focusing on modernizing their visual identity while maintaining brand recognition.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project%20Detail-tDIhWU72sKKHblODGyvT4ZoljX2vJP.png",
      detailImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project%20Detail-tDIhWU72sKKHblODGyvT4ZoljX2vJP.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project%20Detail-tDIhWU72sKKHblODGyvT4ZoljX2vJP.png",
      ],
    },
    {
      id: 2,
      title: "Brand Grouping",
      category: "Branding",
      subCategory: "UX Design",
      description:
        "A strategic brand architecture project for a multinational corporation, organizing and structuring their diverse portfolio of brands.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
      detailImages: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page-ofWXHTeyiPdS1vSbYn5ohMCqrGXLTF.png",
      ],
    },
    // Add more projects as needed
  ]
  
  export function getProjects(): Project[] {
    return projects
  }
  
  export function getProject(id: number): Project | undefined {
    return projects.find((p) => p.id === id)
  }
  
  