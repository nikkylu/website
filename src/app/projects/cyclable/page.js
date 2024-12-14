import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function Cyclable() {
  return (
    <div className="min-h-screen bg-beige">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <article className="prose prose-lg max-w-none  text-primary">
          <h1 className="text-4xl font-bold mb-6">Cyclable</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Story</h2>
            <div className="mb-8">
                <a 
                href="https://sea-lion-app-dcwdx.ondigitalocean.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:underline"
                >
                Try the Demo <ExternalLink size={16} className="ml-1 text-bold" />
                </a>
            </div>
            <div className="space-y-4 pl-8">
              <p>
                As a racing cyclist on the NYU cycling team, my perspective on urban cycling was transformed 
                during my summer experiences in Copenhagen and Stockholm. In Copenhagen, I witnessed a cycling 
                culture where even city guides would actively maintain clear bike lanes, ensuring smooth 
                passage for cyclists. Stockholm offered perhaps the most seamless cycling experience I've 
                ever encountered.
              </p>
              <p>
                Returning to NYC, the contrast was stark. Encountering numerous road blocks and construction 
                sites in the bike lanes, I envisioned developing a solution to help cyclists navigate around 
                these obstacles. My previous internship experience in a computer vision lab had exposed me to 
                technologies that could potentially assist in this process.
              </p>
              <p>
                This inspiration led to the creation of Cyclable, a project through which I not only addressed 
                a practical urban cycling challenge but also gained valuable experience in effective team 
                collaboration and project leadership.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}