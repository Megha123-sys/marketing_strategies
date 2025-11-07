'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search, Calendar, Clock } from 'lucide-react'
import { articles } from '@/data/articles'

const sampleArticles = [
  {
    id: 'roas-meta-2025',
    title: 'How to Improve ROAS in Meta Ads (2025 Edition)',
    category: 'Strategy',
    summary: 'Discover proven tactics to boost your Return on Ad Spend with Meta advertising campaigns.',
    date: '2025-01-15',
    readTime: '12 min read',
    author: 'Megha Aggerwal',
    slug: 'how-to-improve-roas-in-meta-ads-2025-edition'
  },
  {
    id: 'google-search-best-practices',
    title: 'Best Practices for Google Search Campaigns (2025 Edition)',
    category: 'Strategy',
    summary: 'Learn the essential strategies for running high-performing Google Search ad campaigns.',
    date: '2025-01-10',
    readTime: '11 min read',
    author: 'Megha Aggerwal',
    slug: 'best-practices-for-google-search-campaigns-2025-edition'
  },
  {
    id: 'edtech-scaling-case-study',
    title: 'Scaling EdTech Ads: A Case Study by Megha Aggerwal',
    category: 'Case Study',
    summary: 'Real-world insights from scaling education technology advertising campaigns to ₹1 crore budget.',
    date: '2025-01-05',
    readTime: '12 min read',
    author: 'Megha Aggerwal',
    slug: 'scaling-edtech-ads-case-study-megha-aggerwal'
  },
]

export default function KnowledgeHub() {
  const [searchQuery, setSearchQuery] = useState('')
  
  // Get the ROAS 2025, Google Search, and EdTech articles from articles.js and merge with sample articles
  const roasArticle = articles.find(a => a.id === 9 || a.slug === 'how-to-improve-roas-in-meta-ads-2025-edition')
  const googleSearchArticle = articles.find(a => a.id === 10 || a.slug === 'best-practices-for-google-search-campaigns-2025-edition')
  const edtechArticle = articles.find(a => a.id === 11 || a.slug === 'scaling-edtech-ads-case-study-megha-aggerwal')
  const otherSampleArticles = sampleArticles.filter(a => a.id !== 'roas-meta-2025' && a.id !== 'google-search-best-practices' && a.id !== 'edtech-scaling-case-study')
  const featuredArticles = [roasArticle, googleSearchArticle, edtechArticle].filter((a): a is typeof roasArticle => a !== undefined)
  const allArticles = featuredArticles.length > 0
    ? [...featuredArticles, ...otherSampleArticles, ...articles.slice(0, 3).filter(a => a.id !== 9 && a.id !== 10 && a.id !== 11)]
    : [...sampleArticles, ...articles.slice(0, 3)]
  
  const filteredArticles = useMemo(() => {
    return allArticles.filter((article): article is NonNullable<typeof article> => {
      if (!article) return false
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesSearch
    })
  }, [searchQuery, allArticles])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="animate-fade-in max-w-7xl">
      {/* Hero Banner Image */}
      <div className="mb-8 w-full">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/knowledge-hub.png"
            alt="Knowledge Hub - Marketing Insights and Strategies"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Header */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="font-headline text-4xl font-bold text-editorial-black mb-3">
          Knowledge Hub
        </h1>
        <p className="text-lg text-editorial-gray leading-relaxed max-w-3xl">
          Stay ahead of the marketing curve with actionable insights and real case studies. Written and curated by <span className="font-semibold text-editorial-black">Megha Aggerwal</span>.
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-editorial-gray" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-editorial-red focus:border-transparent"
          />
        </div>
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 hover:shadow-lg transition-shadow group"
          >
            <Link href={`/marketing/article/${article.slug || article.id}`}>
              {/* Featured Image for ROAS Meta 2025 article */}
              {(article.id === 'roas-meta-2025' || article.id === 9 || article.slug === 'how-to-improve-roas-in-meta-ads-2025-edition') ? (
                <div className="relative w-full h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-editorial-red text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      {article.category}
                    </span>
                  </div>
                  <Image
                    src="/images/meta-ai-ads-revolution.png"
                    alt="Meta AI Ads Revolution - Boost Your ROAS"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                  />
                </div>
              ) : (article.id === 'google-search-best-practices' || article.id === 10 || article.slug === 'best-practices-for-google-search-campaigns-2025-edition') ? (
                /* Featured Image for Google Search Campaigns article */
                <div className="relative w-full h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-editorial-red text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      {article.category}
                    </span>
                  </div>
                  <Image
                    src="/images/google-search-campaign.png"
                    alt="Best practices for Google Search Campaigns 2025 — by Megha Aggerwal"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                  />
                </div>
              ) : (article.id === 'edtech-scaling-case-study' || article.id === 11 || article.slug === 'scaling-edtech-ads-case-study-megha-aggerwal') ? (
                /* Featured Image for EdTech Case Study article */
                <div className="relative w-full h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-editorial-red text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      {article.category}
                    </span>
                  </div>
                  <Image
                    src="/images/edtech-case-study.png"
                    alt="Scaling EdTech Ads Case Study — by Megha Aggerwal"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                  />
                </div>
              ) : (
                /* Image Placeholder for other articles */
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-editorial-red text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-4xl font-bold opacity-20">
                    {article.title.charAt(0)}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="font-headline text-xl font-bold text-editorial-black mb-2 leading-tight group-hover:underline decoration-editorial-red">
                  {article.title}
                </h3>
                <p className="text-editorial-gray text-sm mb-4 line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between text-xs text-editorial-gray border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                {('author' in article && article.author) && (
                  <p className="text-xs text-editorial-gray mt-2 italic">
                    By {article.author}
                  </p>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}