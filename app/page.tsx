'use client'

import { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import DashboardFooter from '@/components/layout/DashboardFooter'
import CampaignTracker from '@/components/dashboard/CampaignTracker'
import CreativeTesting from '@/components/dashboard/CreativeTesting'
import GeoPerformance from '@/components/dashboard/GeoPerformance'
import BudgetAllocator from '@/components/dashboard/BudgetAllocator'
import AdCopySuggestion from '@/components/dashboard/AdCopySuggestion'
import Recommendations from '@/components/dashboard/Recommendations'
import KnowledgeHub from '@/components/dashboard/KnowledgeHub'
import AboutMegha from '@/components/dashboard/AboutMegha'

export type TabType = 'overview' | 'creatives' | 'geo' | 'budget' | 'adcopy' | 'recommendations' | 'knowledge' | 'about'

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('about')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <CampaignTracker />
      case 'creatives':
        return <CreativeTesting />
      case 'geo':
        return <GeoPerformance />
      case 'budget':
        return <BudgetAllocator />
      case 'adcopy':
        return <AdCopySuggestion />
      case 'recommendations':
        return <Recommendations />
      case 'knowledge':
        return <KnowledgeHub />
      case 'about':
        return <AboutMegha />
      default:
        return <AboutMegha />
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-6 bg-editorial-bg">
          <div className="animate-fade-in">
            {renderTabContent()}
          </div>
        </main>
        <DashboardFooter />
      </div>
    </div>
  )
}
