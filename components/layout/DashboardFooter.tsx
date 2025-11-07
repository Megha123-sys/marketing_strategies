'use client'

import { Linkedin, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function DashboardFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left: Copyright & Credit */}
          <div className="text-center md:text-left">
            <p className="font-headline text-sm font-semibold text-editorial-black mb-1">
              StrategyFlow © 2025
            </p>
            <p className="text-xs text-editorial-gray italic">
              Concept & Marketing Strategy by <span className="font-semibold text-editorial-black">Megha Aggerwal</span>
            </p>
            <p className="text-xs text-editorial-gray mt-2">
              Performance Marketing | Brand Strategy | Growth Mindset
            </p>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/megha-aggerwal-ba563811b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-editorial-red text-white px-6 py-2 font-semibold hover:bg-[#0077B5] transition-all duration-300 hover:underline"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-white border-2 border-editorial-red text-editorial-red px-6 py-2 font-semibold hover:bg-editorial-red hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Portfolio</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
