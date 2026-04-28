import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const basePath = process.env.NODE_ENV === 'production' ? '/website' : ''

const photoProjects = [
    {
    title: "Particle, Pixel, Presence (2026)",
    description: "WIP. 16mm film and sound space instillation",
    image: "/photos/PPP/a.jpeg",
    link: "/photos/PPP"
  },
  {
    title: "Images as statements, identities as containers (2025)",
    // description: "Exhibited at Temporal Space, Brooklyn, NY in 2024.",
    image: "/photos/container/a.jpg",
    link: "/photos/container"
  },
  {
    title: "As We Left, and Walk into Memories (2023, 2024)",
    description: "Exhibited at Temporal Space, Brooklyn, NY in 2024.",
    image: "/photos/memory/a.jpeg",
    link: "/photos/memory"
  },
  {
    title: "Who's Been Found by the Water (2024)",
    // description: "Brief description of the second photography project",
    image: "/photos/corpse/k.jpeg",
    link: "/photos/corpse"
  },
  // {
  //   title: "Water (2024)",
  //   description: "The proximity to a vast water body has been a defining anchor in my life since childhood. I almost never photo humans, but I would like to be with water together this time.",
  //   image: "/photos/water/a.jpeg",
  //   link: "/photos/water"
  // },
  {
    title: "We Stare into the World and See Ourselves (2022)",
    // description: "Brief description of the fourth photography project",
    image: "/photos/world/a.jpeg",
    link: "/photos/world"
  }
]

export default function Photos() {
  return (
    <div className="min-h-screen bg-zinc-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-zinc-200 hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-zinc-300">Art Projects</h1>

        <div className="flex flex-col gap-12">
          {photoProjects.map((project, index) => (
            <Link href={project.link} key={index}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start cursor-pointer">
                <div className="relative w-full sm:w-72 h-52 sm:h-52 flex-shrink-0 overflow-hidden">
                  <Image
                    src={`${basePath}${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center sm:h-52">
                  <h2 className="text-base font-medium text-zinc-300 hover:text-zinc-500 leading-snug">{project.title}</h2>
                  {project.description && <p className="text-sm text-zinc-500 mt-1">{project.description}</p>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}