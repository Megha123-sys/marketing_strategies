'use client'

import { useState } from 'react'
import MarketingSidebar from '@/components/layout/MarketingSidebar'
import MarketingNavbar from '@/components/layout/MarketingNavbar'
import Footer from '@/components/layout/Footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSearch = (query: string) => {
    // Handle search functionality
    console.log('Search:', query)
  }

  return (
    <div className="min-h-screen bg-white">
      <MarketingNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} onSearch={handleSearch} />
      <div className="flex pt-16">
        {/* Main Content */}
        <div className="flex-1 max-w-5xl mx-auto px-6 py-8">
          {children}
        </div>

        {/* Sidebar - Desktop Only */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <MarketingSidebar isOpen={true} setIsOpen={() => {}} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MarketingSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <Footer />
    </div>
  )
}
