import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold text-editorial-black mb-4">
          Article Not Found
        </h1>
        <p className="text-editorial-gray mb-8">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-editorial-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-editorial-red-dark transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </Link>
      </div>
    </div>
  )
}
