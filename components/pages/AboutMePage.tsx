'use client'

import { motion } from 'framer-motion'
import { User, Mail, Linkedin, Twitter, Award, BookOpen, Target } from 'lucide-react'

export default function AboutMePage() {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Articles Published', value: '150+', icon: BookOpen },
    { label: 'Campaigns Managed', value: '500+', icon: Target }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
          <User className="w-16 h-16 text-editorial-gray" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-editorial-black mb-4">
          About Me
        </h1>
        <p className="text-xl text-editorial-gray">
          Marketing strategist, content creator, and growth enthusiast
        </p>
      </motion.div>

      <div className="border-t border-gray-200 mb-12"></div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-6 text-center"
            >
              <Icon className="w-8 h-8 text-editorial-red mx-auto mb-3" />
              <div className="font-headline text-3xl font-bold text-editorial-black mb-2">{stat.value}</div>
              <div className="text-editorial-gray text-sm">{stat.label}</div>
            </motion.div>
          )
        })}
      </div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white border border-gray-200 p-8 mb-8"
      >
        <h2 className="font-headline text-2xl font-bold text-editorial-black mb-4">My Story</h2>
        <p className="text-editorial-gray leading-relaxed mb-4">
          With over a decade of experience in marketing, I've helped countless brands 
          achieve their growth objectives through data-driven strategies and creative campaigns.
        </p>
        <p className="text-editorial-gray leading-relaxed mb-4">
          My expertise spans across content marketing, social media strategy, SEO, email marketing, 
          and marketing automation. I'm passionate about sharing knowledge and helping fellow 
          marketers succeed.
        </p>
        <p className="text-editorial-gray leading-relaxed">
          This hub is my way of giving back to the marketing community by providing actionable 
          insights, proven strategies, and practical tools that you can implement immediately.
        </p>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-editorial-bg border-l-4 border-editorial-red p-8"
      >
        <h2 className="font-headline text-2xl font-bold text-editorial-black mb-6">Let's Connect</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:hello@marketinghub.com"
            className="flex items-center space-x-2 bg-editorial-red text-white px-6 py-3 hover:bg-editorial-red-dark transition-colors text-sm font-semibold"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-editorial-red text-white px-6 py-3 hover:bg-editorial-red-dark transition-colors text-sm font-semibold"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-editorial-red text-white px-6 py-3 hover:bg-editorial-red-dark transition-colors text-sm font-semibold"
          >
            <Twitter className="w-4 h-4" />
            <span>Twitter</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}