import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function GoalInterpretation() {
  return (
    <div className="min-h-screen bg-beige">
      <div className="max-w-4xl mx-auto px-4 py-8  text-primary">
        <Link href="/" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">Optimizing Environments Through Goal Interpretation</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Mentor: Guy Davidson, PI: Brenden Lake
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="pl-8">
              This research investigates how varying levels of goal abstraction impact human understanding and creativity 
              in environment design. We combine behavioral experiments with computational modeling to understand how humans 
              interpret and optimize environments based on different goal specifications.
            </p>
            <p className="pl-8">• Example abstract goal:</p>
                <p className="pl-12">"Launch the metal ball and score in the black bin."</p>
                {/* <div className="space-y-2"> */}
                <p className="pl-8">• Example concrete goal:</p>
                <p className="pl-12">"Launch the metal ball onto one of the conveyor belt to make as many golf balls fall into the black bin as possible."</p>
                {/* </div> */}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Research Components</h2>
            <ul className="list-disc pl-12 space-y-2 mb-4">
              <li>Behavioral experiments on environment design</li>
              <li>Computational models of goal interpretation</li>
              <li>Analysis of creativity in design optimization</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">Intuition</h2>
                <ul className="list-disc pl-12 space-y-2">
                    Imagine a child coming home from basketball practice, feeling sad about leaving the court yet still excited from the game. The child finds a large bin, places it on a shelf, and starts shooting their basketball toward it. I am interested in the reasoning behind such goal-directed environment-building mechanisms, and this research is dedicated to understanding that purpose.
                </ul>
          </section>

            {/* <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Methodology</h2>
            <p className="pl-8 mb-4">
                We have four sets of objects, and four total goals, two concrete and two abstract, and participants see each set of objects once with a randomly assigned goal:
            </p>
            <div className="pl-12 space-y-4">
                <p>• Four different sets of objects</p>
                <p>• Four total goals, two concrete and two abstract</p>
                <div className="space-y-2">
                <p>• Example abstract goal:</p>
                <p className="pl-4">"Launch the metal ball and score in the black bin."</p>
                </div>
                <div className="space-y-2">
                <p>• Example concrete goal:</p>
                <p className="pl-4">"Launch the metal ball onto one of the conveyor belt to make as many golf balls fall into the black bin as possible."</p>
                </div>
                <p>• Participants create a level for each goal from a different set of objects</p>
            </div>
            </section> */}

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Interface Demo</h2>
            <section className="mb-8">
            <div className="pl-8">
                <div className="relative w-full aspect-video">
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://drive.google.com/file/d/1sFUzxAdM_Sso5Z1SuBgZPQklB8pB6kRs/view?usp=sharing" 
                    title="Research demonstration"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
            </section>
            {/* <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
                <div className="pl-8 space-y-6">
                <ul className="list-disc pl-4 space-y-4">
                    <li>
                    Assess how goal abstraction impacts participants' creativity and adaptive learning when utilizing objects to achieve efficient configurations
                    </li>
                    <li>
                    Keep track of the objects positions, ball launching parameters, different attempts being made
                    </li>
                    <li>
                    Analyze how individuals translate abstract versus concrete goals into actionable steps within an unfamiliar environment
                    </li>
                </ul>
                </div>
                </section>
                <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Future Work</h2>
                <div className="pl-8 space-y-4">
                <p>
                    We will collect, analyze, and model the data being collected. And extract insights from the design process.
                </p>
                <p>
                    This research might also inspire a model that emulates human strategies by learning from participants' experimentation, creativity, and adjustment behaviors, contributing to an optimized environment creation process with human-like behaviors.
                </p>
                </div>
                </section> */}
          </section>
        </article>
      </div>
    </div>
  )
}