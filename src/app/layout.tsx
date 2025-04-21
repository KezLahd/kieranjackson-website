'use client'

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-b from-black to-[#1a1a1a] text-[#e0e0e0]`}>
        <nav className="fixed top-0 w-full bg-[#0A1512]/95 backdrop-blur-sm z-50 border-b border-[#1C2C27]">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-lg sm:text-xl font-bold text-white hover:text-[#a0a0a0] transition-colors">
                  Kieran Jackson
                </Link>
              </div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-sm sm:text-base text-[#e0e0e0] hover:text-white transition-colors">Home</Link>
                <Link href="/projects" className="text-sm sm:text-base text-[#e0e0e0] hover:text-white transition-colors">Projects</Link>
                <Link href="/about" className="text-sm sm:text-base text-[#e0e0e0] hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="text-sm sm:text-base text-[#e0e0e0] hover:text-white transition-colors">Contact</Link>
              </div>
              {/* Mobile Menu Button */}
              <div className="flex md:hidden items-center relative z-[60]">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white p-2 rounded-lg hover:bg-[#1C2C27]/20 transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-y-0 right-0 w-44 bg-black shadow-xl border-l border-[#1C2C27] md:hidden z-50"
              >
                <div className="flex flex-col pt-16 p-4 space-y-4 bg-black">
                  <Link
                    href="/"
                    className="text-lg text-[#e0e0e0] hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-[#1C2C27]/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/projects"
                    className="text-lg text-[#e0e0e0] hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-[#1C2C27]/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg text-[#e0e0e0] hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-[#1C2C27]/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg text-[#e0e0e0] hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-[#1C2C27]/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="bg-[#0A1512]/95 border-t border-[#1C2C27]">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center">
              <p className="text-sm sm:text-base text-[#e0e0e0]">© {new Date().getFullYear()} Kieran Jackson</p>
              <div className="flex space-x-4">
                <a href="https://github.com/KezLahd" className="text-sm sm:text-base text-[#e0e0e0] hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/kieran-jackson-182329267/" className="text-sm sm:text-base text-[#e0e0e0] hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
