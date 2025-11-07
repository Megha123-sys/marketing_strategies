'use client'

import { motion } from 'framer-motion'
import { articles } from '@/data/articles'
import Link from 'next/link'

interface MarketingSidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function MarketingSidebar({ isOpen, setIsOpen }: MarketingSidebarProps) {
  // Get top 5 trending articles (sorted by date, most recent first)
  const trendingArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : -320,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-editorial-bg border-r border-gray-200 z-40 lg:relative lg:translate-x-0 lg:top-0 lg:h-screen overflow-y-auto"
      >
        <div className="p-6">
          <h2 className="font-headline text-xl font-bold text-editorial-black mb-6 border-b-2 border-editorial-red pb-2">
            Trending Now
          </h2>

          <div className="space-y-6">
            {trendingArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/marketing/article/${article.slug || article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-start space-x-3"
                >
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-editorial-red">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Thumbnail */}
                    <div className="w-full h-24 bg-gradient-to-br from-gray-200 to-gray-300 mb-2 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-bold opacity-20">
                        {article.title.charAt(0)}
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="font-headline text-sm font-bold text-editorial-black leading-tight group-hover:underline decoration-editorial-red mb-1">
                      {article.title}
                    </h3>

                    {/* Category */}
                    <span className="text-xs text-editorial-red uppercase tracking-wide">
                      {article.category}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  )
}