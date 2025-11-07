'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TrendingUp, Eye, MousePointerClick, Users, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CampaignTracker() {
  const [activeFilter, setActiveFilter] = useState<'Meta' | 'Google' | 'LinkedIn'>('Meta')

  const metrics = [
    { label: 'Impressions', value: '2.4M', icon: Eye, change: '+12.5%', positive: true },
    { label: 'Clicks', value: '48.2K', icon: MousePointerClick, change: '+8.3%', positive: true },
    { label: 'Leads', value: '3,840', icon: Users, change: '+15.2%', positive: true },
    { label: 'ROI', value: '3.1x', icon: DollarSign, change: '+22.1%', positive: true },
  ]

  return (
    <div className="animate-fade-in max-w-7xl">
      {/* Hero Banner Image */}
      <div className="mb-5 w-full">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/campaign-tracker.png"
            alt="Campaign performance analytics dashboard"
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
          Campaign Tracker
        </h1>
        <p className="text-lg text-editorial-gray leading-relaxed max-w-3xl">
          Track and compare campaign performance across channels. Get granular metrics and optimization insights for smarter ad spend decisions.
        </p>
      </div>

      {/* Top Performer Alert */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 mb-8 rounded-r"
      >
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <p className="text-sm font-semibold text-green-900">
            Yesterday's Top Performer: <span className="font-bold">Meta Retargeting</span> — 3.1x ROAS 🚀
          </p>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-8 border-b border-gray-200">
        {(['Meta', 'Google', 'LinkedIn'] as const).map((platform) => (
          <button
            key={platform}
            onClick={() => setActiveFilter(platform)}
            className={`px-6 py-3 font-semibold text-sm transition-colors border-b-2 ${
              activeFilter === platform
                ? 'border-editorial-red text-editorial-red'
                : 'border-transparent text-editorial-gray hover:text-editorial-black'
            }`}
          >
            {platform}
          </button>
        ))}
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-5 h-5 text-editorial-red" />
                <span className={`text-xs font-semibold ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-editorial-black mb-1">{metric.value}</p>
              <p className="text-sm text-editorial-gray">{metric.label}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Performance Overview Section */}
      <div className="bg-white border border-gray-200 p-8 mb-8">
        <h2 className="font-headline text-xl font-bold text-editorial-black mb-6">
          Performance Overview
        </h2>
        <div className="w-full mt-5">
          <Image
            src="/images/perfomance-overview.png"
            alt="Performance Overview Metrics Visualization"
            width={1200}
            height={600}
            className="w-full h-auto rounded-xl shadow-lg"
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
            priority
          />
        </div>
      </div>
    </div>
  )
}