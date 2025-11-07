'use client'

import { motion } from 'framer-motion'
import { articles } from '@/data/articles'

export default function ToolsPage() {
  const toolsArticle = articles.find(article => article.category === 'Tools')

  const toolCategories = [
    {
      name: 'Analytics & Tracking',
      tools: ['Google Analytics 4', 'Mixpanel', 'Hotjar'],
      icon: '📊'
    },
    {
      name: 'Content Creation',
      tools: ['Canva', 'Grammarly', 'Loom'],
      icon: '✏️'
    },
    {
      name: 'Social Media',
      tools: ['Buffer', 'Hootsuite', 'Sprout Social'],
      icon: '📱'
    },
    {
      name: 'Email Marketing',
      tools: ['Mailchimp', 'ConvertKit', 'SendGrid'],
      icon: '📧'
    },
    {
      name: 'SEO Tools',
      tools: ['Ahrefs', 'SEMrush', 'Moz'],
      icon: '🔍'
    },
    {
      name: 'Project Management',
      tools: ['Trello', 'Asana', 'Notion'],
      icon: '📋'
    }
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-editorial-black mb-4">
          Marketing Tools
        </h1>
        <p className="text-lg text-editorial-gray leading-relaxed">
          Essential tools every marketer needs in their toolkit.
        </p>
      </motion.div>

      <div className="border-t border-gray-200 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {toolCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 p-6 hover:border-editorial-red transition-colors"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="font-headline text-xl font-bold text-editorial-black">{category.name}</h3>
            </div>
            <ul className="space-y-2">
              {category.tools.map((tool) => (
                <li key={tool} className="text-editorial-gray text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {toolsArticle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-editorial-bg border-l-4 border-editorial-red p-8"
        >
          <h2 className="font-headline text-2xl font-bold text-editorial-black mb-4">
            Complete Tools Guide
          </h2>
          <p className="text-editorial-gray mb-4 leading-relaxed">{toolsArticle.summary}</p>
          <a
            href={`/marketing/article/${toolsArticle.slug || toolsArticle.id}`}
            className="text-editorial-red hover:underline font-semibold"
          >
            Read Full Article →
          </a>
        </motion.div>
      )}
    </div>
  )
}