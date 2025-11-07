'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function AdCopySuggestion() {
  const [generated, setGenerated] = useState(false)

  const exampleOutput = {
    headline: "Unlock Your Potential with NIIT Courses",
    description: "Learn from India's top educators. Limited seats left!",
    cta: "Enroll Now"
  }

  return (
    <div className="animate-fade-in max-w-7xl">
      {/* Header */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="font-headline text-4xl font-bold text-editorial-black mb-3">
          Ad Copy AI
        </h1>
        <p className="text-lg text-editorial-gray leading-relaxed max-w-3xl">
          Leverage AI to craft conversion-ready ad copies for Meta, Google, and LinkedIn. Train StrategyFlow on your brand tone.
        </p>
      </div>

      {/* Hero Banner Image */}
      <div className="mb-8 w-full">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/adcopy.png"
            alt="AI-powered ad copy generation interface"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Example Output */}
      <div className="bg-white border border-gray-200 p-8">
        <div className="flex items-center space-x-2 mb-6">
          <Sparkles className="w-5 h-5 text-editorial-red" />
          <h2 className="font-headline text-xl font-bold text-editorial-black">
            Example AI-Generated Ad Copy
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-editorial-gray mb-2">Headline</label>
            <div className="bg-editorial-bg border border-gray-200 p-4 rounded">
              <p className="font-headline text-lg text-editorial-black">{exampleOutput.headline}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-editorial-gray mb-2">Description</label>
            <div className="bg-editorial-bg border border-gray-200 p-4 rounded">
              <p className="text-editorial-black leading-relaxed">{exampleOutput.description}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-editorial-gray mb-2">Call-to-Action</label>
            <div className="bg-editorial-bg border border-gray-200 p-4 rounded">
              <p className="font-semibold text-editorial-red">{exampleOutput.cta}</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setGenerated(!generated)}
            className="w-full bg-editorial-red text-white px-6 py-3 font-semibold hover:bg-editorial-red-dark transition-colors flex items-center justify-center space-x-2"
          >
            <Copy className="w-5 h-5" />
            <span>Generate New Ad Copy</span>
          </motion.button>
        </div>
      </div>
    </div>
  )
}