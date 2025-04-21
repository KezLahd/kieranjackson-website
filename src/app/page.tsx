'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Project configurations
const projects = [
  {
    id: 'screen-split',
    title: 'Screen Split',
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M9 21V9"></path>
      </svg>
    ),
    tech: 'Python',
    description: 'The perfect tool for streamers, educators, and presenters who want to show both their screen and face in one clean window.',
    features: [
      'Side-by-Side Display',
      'Multi-Monitor Support',
      'High-quality Output',
      'Professional Interface'
    ],
    colors: {
      icon: 'text-[#3b82f6]',
      tech: {
        bg: 'from-[#3b82f6]/10 via-[#3b82f6]/5 to-[#3b82f6]/10',
        text: 'text-[#3b82f6]'
      },
      button: {
        bg: 'from-[#3b82f6]/20 via-[#3b82f6]/30 to-[#3b82f6]/20',
        text: 'text-[#3b82f6]'
      }
    },
    link: 'https://screensplit.kieranjackson.com'
  }
  // Add new projects here following the same structure
  // Example:
  // {
  //   id: 'project-name',
  //   title: 'Project Title',
  //   logo: (your-svg-or-component),
  //   tech: 'Technology',
  //   description: 'Project description',
  //   features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  //   colors: {
  //     icon: 'text-[#your-color]',
  //     tech: {
  //       bg: 'from-[#your-color]/10 via-[#your-color]/5 to-[#your-color]/10',
  //       text: 'text-[#your-color]'
  //     },
  //     button: {
  //       bg: 'from-[#your-color]/20 via-[#your-color]/30 to-[#your-color]/20',
  //       text: 'text-[#your-color]'
  //     }
  //   },
  //   link: 'https://your-project-url.com'
  // }
]

const TypewriterText = ({ text, startTyping }: { text: string; startTyping: boolean }) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    if (!startTyping) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [text, startTyping])

  return <span className="inline-block">{displayText}</span>
}

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showIntro, setShowIntro] = useState(false)
  const [startTyping, setStartTyping] = useState(false)
  const [startMainAnimation, setStartMainAnimation] = useState(false)
  const [startResize, setStartResize] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Only show animation if this is the first page load
    const isFirstVisit = !sessionStorage.getItem('hasVisited')
    if (isFirstVisit) {
      setShowIntro(true)
      sessionStorage.setItem('hasVisited', 'true')
    }
  }, [])

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth)
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4700)

    return () => clearTimeout(timer)
  }, [])

  // Start resize animation after initial pause
  useEffect(() => {
    const resizeTimer = setTimeout(() => {
      setStartResize(true)
    }, 800)

    return () => clearTimeout(resizeTimer)
  }, [])

  // Start main animation after resize
  useEffect(() => {
    const mainAnimationTimer = setTimeout(() => {
      setStartMainAnimation(true)
    }, 900)

    return () => clearTimeout(mainAnimationTimer)
  }, [])

  // Start typing after K and J reach their positions
  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setStartTyping(true)
    }, 1800)

    return () => clearTimeout(typingTimer)
  }, [])

  // Calculate responsive text size based on window width
  const textSize = windowWidth < 640 ? 'text-4xl sm:text-6xl' : 'text-6xl'
  const finalTextSize = 'text-5xl sm:text-7xl'

  // Calculate movement distances based on window width
  const leftMovement = windowWidth < 640 ? 0 : 
                      windowWidth < 1024 ? -(windowWidth * 0.15) : 
                      -(windowWidth * 0.25)
  const rightMovement = windowWidth < 640 ? 0 : 
                       windowWidth < 1024 ? windowWidth * 0.15 : 
                       windowWidth * 0.25

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a1a]">
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            ref={containerRef}
            className="fixed inset-0 flex items-center justify-center bg-black z-50 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`flex items-center justify-center w-full ${startResize ? 'gap-8' : 'gap-24'}`}>
              <motion.div 
                className="flex items-center"
                initial={{ scale: 3, x: 0 }}
                animate={startResize ? { scale: 1 } : { scale: 3 }}
                transition={{ 
                  duration: 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <motion.div
                  className="flex items-center"
                  animate={startMainAnimation ? { 
                    x: [0, leftMovement, leftMovement, 0],
                    y: [0, 0, 0, -50],
                    scale: [1, 1, 1, 1]
                  } : { x: 0, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 4,
                    times: [0, 0.15, 0.85, 1],
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <span className={`${startMainAnimation ? finalTextSize : textSize} font-bold text-white`} style={{ fontFamily: 'Inter, sans-serif' }}>K</span>
                  <div className={`${startMainAnimation ? finalTextSize : textSize} font-bold text-white`} style={{ fontFamily: 'Inter, sans-serif' }}>
                    <TypewriterText text="ieran" startTyping={startTyping} />
                  </div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex items-center"
                initial={{ scale: 3, x: 0 }}
                animate={startResize ? { scale: 1 } : { scale: 3 }}
                transition={{ 
                  duration: 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <motion.div
                  className="flex items-center"
                  animate={startMainAnimation ? { 
                    x: [0, rightMovement, rightMovement, 0],
                    y: [0, 0, 0, -50],
                    scale: [1, 1, 1, 1]
                  } : { x: 0, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 4,
                    times: [0, 0.15, 0.85, 1],
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <span className={`${startMainAnimation ? finalTextSize : textSize} font-bold text-white`} style={{ fontFamily: 'Inter, sans-serif' }}>J</span>
                  <div className={`${startMainAnimation ? finalTextSize : textSize} font-bold text-white`} style={{ fontFamily: 'Inter, sans-serif' }}>
                    <TypewriterText text="ackson" startTyping={startTyping} />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: showIntro ? 2.5 : 0, duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="min-h-[85vh] flex items-center justify-center border-b border-[#1C2C27] bg-gradient-to-b from-black via-[#0A1512] to-[#1C2C27]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: showIntro ? 2.5 : 0, duration: 0.8, ease: "easeOut" }}
            >
              <span className="block text-xl sm:text-3xl text-[#a0a0a0] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Hi, I&apos;m
              </span>
              <span className="block text-5xl sm:text-7xl font-bold text-[#e0e0e0]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Kieran Jackson
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-2xl text-[#a0a0a0] max-w-2xl mx-auto mb-12" 
              style={{ fontFamily: 'Roboto, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: showIntro ? 2.7 : 0, duration: 0.8, ease: "easeOut" }}
            >
              Software developer, creator, and technology enthusiast. Building digital experiences that make a difference.
            </motion.p>
            <motion.div 
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: showIntro ? 2.9 : 0, duration: 0.8, ease: "easeOut" }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-[#1C4C2C] via-[#2C6C3C] to-[#1C4C2C] rounded-xl hover:opacity-90 transition-all duration-300 border border-[#1C4C2C]/50 shadow-xl hover:shadow-2xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View Projects
              </motion.button>
              <Link 
                href="/contact"
                className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium text-white border-2 border-[#1C4C2C] rounded-xl hover:bg-[#1C4C2C]/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Get in Touch
              </Link>
            </motion.div>
        </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-24 border-b border-[#1C2C27]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-[#e0e0e0] mb-12 text-center" 
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 gap-12">
              {projects.map((project) => (
                <motion.div 
                  key={project.id}
                  className={`bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] rounded-2xl border border-[#1d2432] overflow-hidden transition-all duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.02]
                    ${expandedId === project.id ? 'md:max-w-5xl' : 'md:max-w-[280px] mx-auto'}`}
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className={`${expandedId === project.id ? 'md:flex' : ''}`}>
                    <div className={`${expandedId === project.id ? 'md:flex-shrink-0 bg-gradient-to-br from-[#1a1f2e] to-[#0d1117]' : ''}`}>
                      <div className={`${expandedId === project.id ? 'h-full md:w-64' : 'h-[280px] w-[280px]'} bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] flex items-center justify-center p-6`}>
                        <div className="flex flex-col items-center">
                          <div className={project.colors.icon}>
                            {project.logo}
                          </div>
                          <span className="text-3xl font-bold tracking-tight text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{project.title}</span>
                          <span className={`px-3 py-1 text-sm bg-gradient-to-r ${project.colors.tech.bg} ${project.colors.tech.text} rounded-full font-medium`}>
                            {project.tech}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`${expandedId === project.id ? 'p-8 flex-1' : 'hidden'}`}>
                      <p className="text-[#a0a0a0] mb-6">
                        {project.description}
                      </p>
                      <div className="mb-2">
                        <h3 className="text-lg font-medium text-[#e0e0e0] mb-2">Key Features</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-[#a0a0a0]">
                              <svg className={`w-5 h-5 mr-2 ${project.colors.tech.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link 
                        href={project.link}
                        className={`inline-block w-full text-center bg-gradient-to-r ${project.colors.button.bg} ${project.colors.button.text} px-6 py-3 rounded-xl hover:opacity-90 transition-opacity font-medium mt-4`}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
