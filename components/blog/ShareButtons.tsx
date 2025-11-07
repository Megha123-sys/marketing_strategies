'use client'

import { Linkedin, Twitter } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const url = `${baseUrl}/blog/${slug}`
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareToLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    window.open(linkedInUrl, '_blank', 'width=600,height=400')
  }

  const shareToX = () => {
    const xUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
    window.open(xUrl, '_blank', 'width=600,height=400')
  }

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={shareToLinkedIn}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
        <span className="font-medium">LinkedIn</span>
      </button>
      
      <button
        onClick={shareToX}
        className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
        aria-label="Share on X (Twitter)"
      >
        <Twitter className="w-5 h-5" />
        <span className="font-medium">X</span>
      </button>
    </div>
  )
}
