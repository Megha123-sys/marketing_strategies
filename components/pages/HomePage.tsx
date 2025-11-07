'use client'

import { motion } from 'framer-motion'
import { articles } from '@/data/articles'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ArticleCard from '@/components/common/ArticleCard'

export default function HomePage() {
  const featuredArticle = articles[0] // First article as hero
  const featuredArticles = articles.slice(1, 4) // Next 3 for featured grid
  const recentArticles = articles.slice(4, 10) // Remaining for recent section

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Banner Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Link href={`/marketing/article/${(featuredArticle as any).slug || featuredArticle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
          <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden group cursor-pointer">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-10">
              {featuredArticle.title.charAt(0)}
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <span className="inline-block bg-editorial-red text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4">
                  {featuredArticle.category}
                </span>
                <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 leading-tight group-hover:underline decoration-white">
                  {featuredArticle.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-4 line-clamp-2">
                  {featuredArticle.summary}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <span>{new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.section>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-12"></div>

      {/* Featured Articles Grid */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-editorial-black">
            Featured Stories
          </h2>
          <Link
            href="/marketing/strategy-hub"
            className="text-editorial-red hover:underline font-semibold flex items-center space-x-2 text-sm"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-12"></div>

      {/* Recent Articles Section */}
      <section className="mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-editorial-black mb-6">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-12"></div>
    </div>
  )
}