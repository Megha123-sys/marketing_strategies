'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  Image, 
  Globe, 
  DollarSign, 
  FileText, 
  Lightbulb,
  TrendingUp,
  BookOpen,
  User
} from 'lucide-react'
import { TabType } from '@/app/page'

interface SidebarProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
  isOpen: boolean
}

const menuItems = [
  { id: 'about' as TabType, label: 'About Me', icon: User, description: 'Learn about the creator behind StrategyFlow' },
  { id: 'overview' as TabType, label: 'Campaign Tracker', icon: LayoutDashboard, description: 'Monitor campaign health across Meta, Google, and LinkedIn Ads' },
  { id: 'creatives' as TabType, label: 'Creative Testing', icon: Image, description: 'Compare creative performance with A/B testing' },
  { id: 'geo' as TabType, label: 'Geo Performance', icon: Globe, description: 'Analyze performance by region or city' },
  { id: 'budget' as TabType, label: 'Budget Allocator', icon: DollarSign, description: 'Optimize spend based on ROAS trends' },
  { id: 'adcopy' as TabType, label: 'Ad Copy AI', icon: FileText, description: 'AI-powered ad copy generator' },
  { id: 'recommendations' as TabType, label: 'Recommendations', icon: Lightbulb, description: 'Actionable insights and optimizations' },
  { id: 'knowledge' as TabType, label: 'Knowledge Hub', icon: BookOpen, description: 'Blog and insights section' },
]

export default function Sidebar({ activeTab, setActiveTab, isOpen }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 280, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-900 border-r border-slate-800 flex flex-col shadow-xl"
        >
          <div className="p-6 border-b border-slate-800">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-strategy-blue rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-headline text-xl font-bold text-white">StrategyFlow</h1>
              </div>
            </div>
            <p className="text-sm text-slate-400 italic mt-2">
              Turning Ad Data into Actionable Growth Stories.
            </p>
          </div>
          
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-start space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-strategy-blue text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <div className="flex-1 min-w-0">
                    <span className="font-medium block">{item.label}</span>
                    <span className={`text-xs mt-0.5 block ${isActive ? 'text-slate-200' : 'text-slate-500'}`}>
                      {item.description}
                    </span>
                  </div>
                </motion.button>
              )
            })}
          </nav>

          <div className="p-4 border-t border-slate-800">
            <div className="bg-gradient-to-r from-strategy-blue to-strategy-blue-dark rounded-lg p-4 text-white">
              <p className="text-sm font-medium">Total Budget</p>
              <p className="text-2xl font-bold mt-1">₹1.0 Cr</p>
              <p className="text-xs opacity-90 mt-1">Meta Ads Campaign</p>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}