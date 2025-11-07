'use client'

import { Menu, Bell, Settings, Download } from 'lucide-react'

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu className="w-6 h-6 text-editorial-black" />
        </button>
        <div>
          <h2 className="font-headline text-2xl font-bold text-editorial-black">
            Marketing Control Center
          </h2>
          <p className="text-xs text-editorial-gray italic">
            Turning Ad Data into Actionable Growth Stories
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
          <Bell className="w-6 h-6 text-editorial-black" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-editorial-red rounded-full"></span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Settings className="w-6 h-6 text-editorial-black" />
        </button>
        <button className="bg-editorial-red text-white px-6 py-2 font-semibold hover:bg-editorial-red-dark transition-colors flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>
    </header>
  )
}