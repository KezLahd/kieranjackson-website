import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kieran Jackson",
  description: "Personal website and portfolio of Kieran Jackson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-b from-black to-[#1a1a1a] text-[#e0e0e0]`}>
        <nav className="fixed top-0 w-full bg-[#0A1512]/95 backdrop-blur-sm z-50 border-b border-[#1C2C27]">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-white">Kieran Jackson</a>
              </div>
              <div className="flex items-center space-x-8">
                <a href="/" className="text-[#e0e0e0] hover:text-white transition-colors">Home</a>
                <a href="/projects" className="text-[#e0e0e0] hover:text-white transition-colors font-medium">Projects</a>
                <a href="/about" className="text-[#e0e0e0] hover:text-white transition-colors">About</a>
                <a href="/contact" className="text-[#e0e0e0] hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="bg-[#0A1512]/95 border-t border-[#1C2C27]">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center">
              <p className="text-[#e0e0e0]">© {new Date().getFullYear()} Kieran Jackson</p>
              <div className="flex space-x-4">
                <a href="https://github.com/KezLahd" className="text-[#e0e0e0] hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/kieran-jackson-182329267/" className="text-[#e0e0e0] hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
