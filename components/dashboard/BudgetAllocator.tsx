'use client'

import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

export default function BudgetAllocator() {
  const budgetData = [
    { name: 'Meta Ads', value: 45, color: '#1e40af' },
    { name: 'Google Ads', value: 35, color: '#3b82f6' },
    { name: 'LinkedIn Ads', value: 20, color: '#60a5fa' },
  ]

  const recommendations = [
    { platform: 'Meta Ads', action: 'Increase by 10%', reason: 'ROAS rising (3.1x)', priority: 'high' },
    { platform: 'Google Ads', action: 'Maintain current', reason: 'Stable performance', priority: 'medium' },
    { platform: 'LinkedIn Ads', action: 'Reduce by 5%', reason: 'Lower conversion rate', priority: 'low' },
  ]

  return (
    <div className="animate-fade-in max-w-7xl">
      {/* Header */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="font-headline text-4xl font-bold text-editorial-black mb-3">
          Budget Allocator
        </h1>
        <p className="text-lg text-editorial-gray leading-relaxed max-w-3xl">
          Reallocate ad spend intelligently based on campaign performance. StrategyFlow uses trend data to recommend optimal investments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Chart */}
        <div className="bg-white border border-gray-200 p-8">
          <h2 className="font-headline text-xl font-bold text-editorial-black mb-6">
            Current Budget Distribution
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-editorial-gray">Image: budget_chart.png</p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white border border-gray-200 p-8">
          <h2 className="font-headline text-xl font-bold text-editorial-black mb-6">
            Allocation Recommendations
          </h2>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 border-l-4 ${
                  rec.priority === 'high' ? 'border-green-500 bg-green-50' :
                  rec.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                  'border-gray-300 bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-editorial-black">{rec.platform}</p>
                    <p className="text-sm text-editorial-gray mt-1">{rec.action}</p>
                    <p className="text-xs text-editorial-gray mt-1 italic">{rec.reason}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}