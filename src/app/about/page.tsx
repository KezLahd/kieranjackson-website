export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a1a] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#e0e0e0] mb-8">About Me</h1>
        
        <div className="prose prose-lg max-w-none prose-invert">
          <div className="p-6 rounded-xl border border-[#1C2C27] bg-[#0A1512]/10 mb-12">
            <p className="text-lg text-[#a0a0a0] mb-6">
              I&apos;m a software developer with a passion for creating elegant solutions to complex problems.
            </p>
            <p className="text-lg text-[#a0a0a0] mb-6">
              When I&apos;m not coding, you can find me exploring new technologies and contributing to open-source projects.
            </p>
            <p className="text-lg text-[#a0a0a0]">
              I believe that great software isn&apos;t just about writing code; it&apos;s about understanding user needs and delivering solutions that make a difference.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#1C2C27] bg-[#0A1512]/10 mb-12">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mt-0 mb-4">Professional Background</h2>
            <p className="text-[#a0a0a0] mb-0">
              I have several years of experience in software development, working with various technologies
              and frameworks. My journey in tech has allowed me to work on diverse projects, from enterprise
              applications to consumer-facing products.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#1C2C27] bg-[#0A1512]/10 mb-12">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mt-0 mb-4">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#e0e0e0] mb-4">Frontend</h3>
                <ul className="space-y-2">
                  <li className="text-[#a0a0a0]">React & Next.js</li>
                  <li className="text-[#a0a0a0]">TypeScript</li>
                  <li className="text-[#a0a0a0]">Tailwind CSS</li>
                  <li className="text-[#a0a0a0]">Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#e0e0e0] mb-4">Backend</h3>
                <ul className="space-y-2">
                  <li className="text-[#a0a0a0]">Node.js</li>
                  <li className="text-[#a0a0a0]">C# & .NET</li>
                  <li className="text-[#a0a0a0]">RESTful APIs</li>
                  <li className="text-[#a0a0a0]">Database Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[#1C2C27] bg-[#0A1512]/10">
            <h2 className="text-2xl font-bold text-[#e0e0e0] mt-0 mb-4">Personal Interests</h2>
            <p className="text-[#a0a0a0] mb-0">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through blog posts and tutorials. I&apos;m also passionate about
              photography, hiking, and playing the guitar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 