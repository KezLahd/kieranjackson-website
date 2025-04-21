import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#d4b483]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center text-[#8a9a5b] hover:text-[#b5c97a] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-2 text-[#d4b483]">Blog</h1>
        <p className="text-lg text-[#8a9a5b] mb-12">
          Coming soon: Insights, tutorials, and thoughts on web development and technology.
        </p>

        <div className="grid gap-8">
          {/* Sample Blog Post */}
          <article className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a] hover:border-[#8a9a5b] transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center">
                <span className="text-[#8a9a5b] text-sm">2024</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#d4b483]">Building Modern Web Applications</h2>
                <p className="text-sm text-[#8a9a5b]">March 15, 2024</p>
              </div>
            </div>
            <p className="text-[#d4b483] mb-4">
              A deep dive into modern web development practices and tools that can help you build better applications.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-[#2a2a2a] text-[#8a9a5b]">Web Development</span>
              <span className="px-3 py-1 text-sm rounded-full bg-[#2a2a2a] text-[#8a9a5b]">Next.js</span>
            </div>
          </article>

          {/* Placeholder for Future Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
                <div className="w-full h-40 bg-[#2a2a2a] rounded-lg mb-4 animate-pulse" />
                <div className="h-4 bg-[#2a2a2a] rounded w-3/4 mb-2 animate-pulse" />
                <div className="h-4 bg-[#2a2a2a] rounded w-1/2 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 