'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, ExternalLink, BookOpen, Award, Briefcase, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function AboutMegha() {
  const highlights = [
    {
      icon: Briefcase,
      title: 'Deputy Manager - Digital Marketing',
      company: 'Drishti IAS',
      color: 'blue'
    },
    {
      icon: Briefcase,
      title: 'Former Digital Marketer',
      company: 'GRMI',
      color: 'purple'
    },
    {
      icon: Award,
      title: 'Certified in Meta Ads & Generative AI',
      company: 'Microsoft, upGrad',
      color: 'green'
    },
    {
      icon: Sparkles,
      title: 'Specializes in',
      company: 'Meta, Google Ads, and Brand Strategy',
      color: 'red'
    },
  ]

  return (
    <div className="animate-fade-in max-w-7xl">
      {/* Header */}
      <div className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-editorial-black mb-4">
          About Megha Aggerwal
        </h1>
        <p className="font-headline text-xl md:text-2xl text-editorial-gray italic">
          Marketing Strategist | Growth Thinker | Digital Storyteller
        </p>
      </div>

      {/* Main Content - Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Left: Text Content */}
        <div className="space-y-8">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-editorial-black leading-relaxed">
              Hi, I'm <span className="font-semibold">Megha Aggerwal</span> — a marketing professional passionate about performance-driven storytelling and digital growth.
            </p>
            <p className="text-lg text-editorial-gray leading-relaxed">
              With a background in analytics, psychology, and branding, I specialize in building marketing ecosystems that balance creativity and strategy.
            </p>
            <p className="text-lg text-editorial-gray leading-relaxed">
              I've worked across edtech, fashion, and lifestyle brands, leading campaigns that blend data, intuition, and emotion to deliver impact.
            </p>
            <p className="text-lg text-editorial-black leading-relaxed">
              <span className="font-semibold">StrategyFlow</span> is my personal initiative — a space where I share insights, real campaign data, and stories that inspire smarter marketing decisions.
            </p>
          </motion.div>

          {/* Personal Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-editorial-bg border-l-4 border-editorial-red p-6 italic"
          >
            <p className="text-editorial-gray leading-relaxed mb-3">
              "Beyond metrics and dashboards, I believe in truth, persistence, and the courage to build a life on my own terms."
            </p>
            <p className="text-editorial-gray leading-relaxed">
              "I write, travel, and explore new creative paths that keep me connected to my purpose."
            </p>
          </motion.div>
        </div>

        {/* Right: Professional Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-[300px] mx-auto">
            <Image
              src="/images/megha-aggerwal.png"
              alt="Megha Aggerwal - Marketing Strategist"
              width={300}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Professional Highlights */}
      <div className="mb-12">
        <h2 className="font-headline text-3xl font-bold text-editorial-black mb-6 border-b border-gray-200 pb-3">
          Professional Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            const colorClasses = {
              blue: 'border-blue-500 bg-blue-50',
              purple: 'border-purple-500 bg-purple-50',
              green: 'border-green-500 bg-green-50',
              red: 'border-editorial-red bg-red-50'
            }
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white border-l-4 ${colorClasses[highlight.color as keyof typeof colorClasses]} p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    highlight.color === 'blue' ? 'bg-blue-100' :
                    highlight.color === 'purple' ? 'bg-purple-100' :
                    highlight.color === 'green' ? 'bg-green-100' :
                    'bg-red-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      highlight.color === 'blue' ? 'text-blue-600' :
                      highlight.color === 'purple' ? 'text-purple-600' :
                      highlight.color === 'green' ? 'text-green-600' :
                      'text-editorial-red'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline text-lg font-bold text-editorial-black mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-editorial-gray text-sm">
                      {highlight.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-12"></div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <motion.a
          href="https://www.linkedin.com/in/megha-aggerwal-ba563811b/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-editorial-red text-white px-8 py-4 font-semibold hover:bg-[#0077B5] transition-all duration-300 shadow-md hover:underline"
        >
          <Linkedin className="w-5 h-5" />
          <span>Connect on LinkedIn</span>
        </motion.a>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-white border-2 border-editorial-red text-editorial-red px-8 py-4 font-semibold hover:bg-editorial-red hover:text-white transition-colors shadow-md"
        >
          <ExternalLink className="w-5 h-5" />
          <span>View Portfolio</span>
        </motion.a>

        <motion.a
          href="/marketing/strategy-hub"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-white border-2 border-editorial-red text-editorial-red px-8 py-4 font-semibold hover:bg-editorial-red hover:text-white transition-colors shadow-md"
        >
          <BookOpen className="w-5 h-5" />
          <span>Read My Latest Blogs</span>
        </motion.a>
      </div>
    </div>
  )
}
