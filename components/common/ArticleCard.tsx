'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

interface ArticleCardProps {
  article: {
    id: string | number
    title: string
    summary: string
    category: string
    date: string
    readTime: string
    slug?: string
  }
  index?: number
  featured?: boolean
}

export default function ArticleCard({ article, index = 0, featured = false }: ArticleCardProps) {
  // Create slug from title if not provided
  const slug = article.slug || article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const href = `/marketing/article/${slug}`

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link href={href}>
        <div className="relative overflow-hidden bg-white">
          {/* Category Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-editorial-red text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {article.category}
            </span>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-4xl font-bold opacity-20">
              {article.title.charAt(0)}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-headline text-xl md:text-2xl font-bold text-editorial-black mb-3 leading-tight group-hover:underline decoration-editorial-red decoration-2 transition-all">
              {article.title}
            </h3>
            <p className="text-editorial-gray text-sm md:text-base mb-4 line-clamp-2 leading-relaxed">
              {article.summary}
            </p>
            <div className="flex items-center space-x-4 text-xs text-editorial-gray border-t border-gray-200 pt-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
