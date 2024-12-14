import Image from 'next/image'
import Link from 'next/link'
import { Github, Twitter, Mail, Linkedin, ExternalLink } from 'lucide-react'

const news = [
  {
    date: "Upcoming",
    content: "'Does Talent Exist?' Discussion panel at NYU Philosophy Forum"
  },
  {
    date: "Nov 22, 2024, 5:30 - 6:30pm",
    content: "Moderating Talk 'The Wrong of Wrongful Manipulation' with Professor Sophie Gibert at NYU Philosophy Forum"
  },
  {
    date: "Oct 25, 2024, 5:30 - 6:30pm",
    content: "Co-hosting Death Cafe Event at NYU Philosophy Forum on life, death, and mortality"
  },
  {
    date: "Oct 4, 2024, 5pm",
    content: "Co-leading film screening event 'Examined Life' featuring Judith Butler and Slavoj Zizek"
  }
]

const research = {
  publications: [
      {
      id: "goal-interpretation",
      title: "Optimizing Environments Through Goal Interpretation",
      description: "Studying how varying levels of goal abstraction impact human understanding and creativity through behavioral experiments and computational models.",
      lab: "Mentor: Guy Davidson, PI: Brenden Lake",
      link: "/research/goal-interpretation"
    },
    {
      id: "vector-grounding",
      title: "Thesis: The Vector Grounding Problem",
      description: "Whether language models can establish intrinsic meaning in their representations beyond mere ascriptions by external interpreters.",
      advisors: "Advisors: Prof Matthew Mandelkern and Prof David Chalmers",
    }
  ],
  projects: [
    {
      id: "cyclable",
      title: "Cyclable",
      description: "Cyclable is a route planning web application designed to enhance the cycling experience in New York City by integrating real-time user reports on road constructions and bike lane blockages.",
      link: "/projects/cyclable"
    },
 {
      id: "llm-intelligence",
      title: "Are LLMs Intelligent? (Nov 2023)",
      description: "Philosophy paper illustrating the distinction between accomplishing intelligent tasks and accomplishing tasks intelligently.",
    },
    {
      id: "intelligence-explosion",
      title: "If (LLM AI) then AI+ ? (Nov 2023)",
      description: "Philosophy paper examining why LLM AI, despite its capabilities, will not lead to an intelligence explosion.",
    }
  ]
}

export default function Home() {
  return (
    <div className="min-h-screen bg-beige">
      <div className="max-w-4xl mx-auto px-4">
        <header className="py-8">
          <h1 className="text-4xl font-bold text-primary">Nikky Lu</h1>
         <span className="text-dan text-lg font-normal">(she/they)</span>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left column */}
          <div className="md:w-1/3 space-y-8">
            <div className="w-full aspect-square relative">
              <Image
                src="/profile.jpg"
                alt="Profile picture"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>

            <nav className="space-y-2 text-accent font-bold">
              <Link href="/photos" className="block hover:underline">Photography</Link>
              <Link href="/travel" className="block hover:underline">Travel Log</Link>
              <a 
                href="https://drive.google.com/file/d/1R3oGjNyKQ1AKQ5x8avMtou_ZKsxLyf-s/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:underline flex items-center gap-1"
              >
                CV <ExternalLink size={16} />
              </a>
            </nav>

            {/* <div className="flex flex-wrap gap-4 text-primary">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:zhiyi.lu@nyu.edu">
                <Mail size={24} />
              </a>
            </div> */}

            <div className="text-primary">
              <p className="font-mono text-sm">zhiyi.lu@nyu.edu</p>
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-2/3 space-y-8 text-primary">
            <div className="prose prose-lg space-y-6">
              <p className="pl-8">
                Hey! This is Nikky. I am a researcher with an interdisciplinary background in computer science, philosophy, and cognitive science. 
                My work is deeply motivated by philosophical inquiries to innovatively use computational methods in exploring human 
                learning, understanding, and creativity. In turn, I aim to develop innovative AI systems and ways of interaction 
                inspired by these insights. 
              </p>
              <p className="pl-8">
                Currently, I am a researcher at Human and Machine Learning Lab. 
              </p>



              {/* <p className="pl-8">
                Currently, I am conducting computational research in Prof Brenden Lake's Human and Machine Learning Lab, studying 
                how varying levels of goal abstraction impact human understanding and creativity in environment design.
              </p>

              <p className="pl-8">
                Additionally, I am working on my thesis in philosophy of mind and language under the guidance of 
                Prof Matthew Mandelkern and Prof David Chalmers, exploring whether language models can establish 
                intrinsic meaning in their representations.
              </p> */}

              <p className="pl-8">
                Outside of research, I'm an artist who loves hiking, climbing, and cycling. So far, I've solo-backpacked to more than 20 destinations!
              </p>

              <p className="pl-8">
                I also like collecting different beanies and have a duolingo streak of 2 years +.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-l">Research Interests</h2>
              <p className="text-sm pl-8 mb-1">Broadly: Cognitive AI, HCI, Computational CogSci, Computer Vision</p>
              <h2 className="font-bold text-l">Learning</h2>
              <p className="text-sm pl-8">Reinforcement Learning, Behavioral Machine Learning, Symmetries in ML</p>
            </div>

            {/* News Section */}
            <section>
              <h2 className="font-bold text-xl mb-4">Recent Events</h2>
              <ul className="space-y-4">
                {news.map((item, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-semibold">{item.date}</span>
                    <span className="mt-1">{item.content}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Replace the Research Section in your page.js */}
            {/* Research Section */}
            <section className="space-y-6">
              <h2 className="font-bold text-xl mb-4">Research</h2>
              
              <div className="space-y-3">
                <h3 className="font-bold">Current Research</h3>
                <div className="space-y-3">
                  {research.publications.map((pub, index) => (
                  pub.link ? (
                    <Link href={pub.link} key={index}>
                      <div className="space-y-2 p-4 rounded-lg hover:bg-white/50 transition-colors cursor-pointer border border-transparent hover:border-accent/20">
                        <p className="font-medium hover:text-accent underline">
                          {pub.title} 
                        </p>
                        <p className="text-sm">{pub.description}</p>
                        <p className="text-sm italic">{pub.advisors || pub.lab}</p>
                      </div>
                    </Link>
                  ) : (
                    <div key={index} className="space-y-2 p-4 rounded-lg">
                      <p className="font-medium">
                        {pub.title}
                      </p>
                      <p className="text-sm">{pub.description}</p>
                      <p className="text-sm italic">{pub.advisors || pub.lab}</p>
                    </div>
                  )
                ))}
                </div>
              </div>

              <div className="space-y-6">
              <h3 className="font-bold">Other Projects</h3>
              <div className="space-y-4">  {/* Reduced space between projects */}
                {research.projects.map((project, index) => (
                  project.link ? (
                    <Link href={project.link} key={index}>
                      <div className="p-2">  {/* Reduced padding */}
                        <p className="font-medium hover:text-accent underline">
                          {project.title}
                        </p>
                        <p className="text-sm">{project.description}</p>
                      </div>
                    </Link>
                  ) : (
                    <div key={index} className="p-2">  {/* Reduced padding */}
                      <div className="mb-1">  {/* Added small margin bottom */}
                        <p className="font-medium inline-block">
                          {project.title}
                        </p>
                        {project.date && <span className="text-sm text-gray-600 ml-2">({project.date})</span>}
                      </div>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}