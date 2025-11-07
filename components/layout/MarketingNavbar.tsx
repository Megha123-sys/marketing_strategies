'use client'

import { useState } from 'react'
import { Search, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MarketingNavbarProps {
  onMenuClick: () => void
  onSearch: (query: string) => void
}

const navLinks = [
  { label: 'Home', path: '/marketing' },
  { label: 'Strategy Hub', path: '/marketing/strategy-hub' },
  { label: 'Case Studies', path: '/marketing/case-studies' },
  { label: 'Tools', path: '/marketing/tools' },
  { label: 'Insights', path: '/marketing/insights' },
  { label: 'About', path: '/marketing/about' },
]

export default function MarketingNavbar({ onMenuClick, onSearch }: MarketingNavbarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/marketing" className="flex-shrink-0">
            <h1 className="font-headline text-2xl font-bold text-editorial-black">
              Marketing Strategies Hub
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-editorial-red border-b-2 border-editorial-red pb-1'
                    : 'text-editorial-black hover:text-editorial-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side: Search & Subscribe */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-editorial-gray" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-editorial-red w-48"
                />
              </div>
            </form>

            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-editorial-black" />
            </button>

            {/* Subscribe Button */}
            <button className="hidden md:block bg-editorial-red text-white px-6 py-2 text-sm font-semibold hover:bg-editorial-red-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}