'use client'

import { motion } from 'framer-motion'
import { articles } from '@/data/articles'
import ArticleCard from '@/components/common/ArticleCard'

export default function StrategyHubPage() {
  const strategyArticles = articles.filter(article => article.category === 'Strategy')

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-editorial-black mb-4">
          Strategy Hub
        </h1>
        <p className="text-lg text-editorial-gray leading-relaxed">
          Comprehensive marketing strategies and frameworks to drive growth.
        </p>
      </motion.div>

      <div className="border-t border-gray-200 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategyArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </div>
  )
}