import Link from 'next/link'

const ScreenSplitLogo = () => (
  <div className="flex flex-col items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
      <path d="M3 9h18"></path>
      <path d="M9 21V9"></path>
    </svg>
    <span className="text-4xl font-bold tracking-tight text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Screen Split</span>
    <span className={`px-3 py-1 text-sm bg-gradient-to-r from-[#3b82f6]/10 via-[#3b82f6]/5 to-[#3b82f6]/10 text-[#3b82f6] rounded-full font-medium`}>
      Python
    </span>
  </div>
)

const projects = [
  {
    slug: 'screen-split',
    title: 'Screen Split',
    description: 'The perfect tool for streamers, educators, and presenters who want to show both their screen and face in one clean window.',
    technologies: ['Python'],
    website: 'https://screensplit.kieranjackson.com',
    features: [
      'Side-by-Side Display',
      'Multi-Monitor Support',
      'High-quality Output',
      'Adjustable Layout',
      'Professional Interface'
    ],
    colorScheme: {
      primary: 'from-[#1a1f2e] to-[#0d1117]',
      accent: 'text-[#3b82f6]',
      secondary: 'from-[#3b82f6]/10 via-[#3b82f6]/5 to-[#3b82f6]/10',
      text: 'text-[#3b82f6]',
      hover: 'hover:text-[#60a5fa]',
      border: 'border-[#1d2432]'
    }
  },
  // Add more projects here
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a1a] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#e0e0e0] mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.website}
              className={`block bg-gradient-to-br ${project.colorScheme.primary} rounded-2xl border ${project.colorScheme.border} overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <div className={`h-64 w-full md:w-64 flex items-center justify-center p-6 ${project.colorScheme.accent}`}>
                    {project.slug === 'screen-split' ? (
                      <ScreenSplitLogo />
                    ) : (
                      <div className="text-white text-center">
                        <svg className="w-16 h-16 mx-auto mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4H10V10H4V4Z" fill="currentColor" />
                          <path d="M14 4H20V10H14V4Z" fill="currentColor" />
                          <path d="M4 14H10V20H4V14Z" fill="currentColor" />
                          <path d="M14 14H20V20H14V14Z" fill="currentColor" />
                        </svg>
                        <span className="text-xl font-bold">{project.title}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[#a0a0a0] mb-6">{project.description}</p>
                  
                  <div className="mb-2">
                    <h3 className="text-lg font-medium text-[#e0e0e0] mb-2">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-[#a0a0a0]">
                          <svg className={`w-5 h-5 mr-2 ${project.colorScheme.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 