'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, PauseCircle, TestTube } from 'lucide-react'

export default function Recommendations() {
  const recommendations = [
    {
      icon: TrendingUp,
      title: 'Increase Meta Budget by 10%',
      description: 'ROAS rising (3.1x) — capitalize on strong performance',
      priority: 'high',
      color: 'green'
    },
    {
      icon: PauseCircle,
      title: 'Pause Underperforming Ad Set in Delhi',
      description: 'CPA above threshold (₹1,200) — reallocate budget',
      priority: 'high',
      color: 'red'
    },
    {
      icon: TestTube,
      title: 'Test UGC Creatives for Better CTR',
      description: 'User-generated content shows 2.3x higher engagement',
      priority: 'medium',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Scale Winning Creative: Bold Headline Visual',
      description: 'CTR 1.9% and 4.2% conversion rate — ready to scale',
      priority: 'high',
      color: 'green'
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'border-green-500 bg-green-50'
      case 'red':
        return 'border-red-500 bg-red-50'
      case 'blue':
        return 'border-blue-500 bg-blue-50'
      default:
        return 'border-gray-300 bg-gray-50'
    }
  }

  return (
    <div className="animate-fade-in max-w-7xl">
      {/* Header */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="font-headline text-4xl font-bold text-editorial-black mb-3">
          Recommendations
        </h1>
        <p className="text-lg text-editorial-gray leading-relaxed max-w-3xl">
          Data-driven recommendations designed to increase efficiency and ROI.
        </p>
      </div>

      {/* Hero Banner Image */}
      <div className="mb-8 w-full">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/lightbulbs-ads.png"
            alt="Marketing recommendations and insights visualization"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Recommendation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => {
          const Icon = rec.icon
          return (
            <motion.div
              key={rec.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white border-l-4 ${getColorClasses(rec.color)} p-6 hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${
                  rec.color === 'green' ? 'bg-green-100' :
                  rec.color === 'red' ? 'bg-red-100' :
                  'bg-blue-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    rec.color === 'green' ? 'text-green-600' :
                    rec.color === 'red' ? 'text-red-600' :
                    'text-blue-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-lg font-bold text-editorial-black mb-2">
                    {rec.title}
                  </h3>
                  <p className="text-editorial-gray text-sm leading-relaxed">
                    {rec.description}
                  </p>
                  <span className={`inline-block mt-3 px-3 py-1 text-xs font-semibold rounded ${
                    rec.priority === 'high' ? 'bg-red-100 text-red-700' :
                    rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {rec.priority === 'high' ? 'High Priority' : rec.priority === 'medium' ? 'Medium Priority' : 'Low Priority'}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}