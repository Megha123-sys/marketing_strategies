import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
import { articles } from '@/data/articles'
import ShareButtons from '@/components/blog/ShareButtons'
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug || article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  }))
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = articles.find((a) => 
    a.slug === slug || 
    a.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  )

  if (!article) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const isROASArticle = article.id === 9 || article.slug === 'how-to-improve-roas-in-meta-ads-2025-edition'
  const isGoogleSearchArticle = article.id === 10 || article.slug === 'best-practices-for-google-search-campaigns-2025-edition'
  const isEdTechArticle = article.id === 11 || article.slug === 'scaling-edtech-ads-case-study-megha-aggerwal'

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-editorial-black hover:text-editorial-red transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Dashboard</span>
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-editorial-red text-white text-sm font-semibold rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-editorial-black mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-editorial-gray mb-6">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-medium">Megha Aggerwal</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <ShareButtons title={article.title} slug={slug} />
        </header>

        {/* Featured Image for ROAS Article */}
        {isROASArticle && (
          <div className="w-full mb-8 relative">
            <Image
              src="/images/meta-ai-ads-revolution.png"
              alt="Meta AI Ads Revolution - Boost Your ROAS"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        )}

        {/* Featured Image for Google Search Campaigns Article */}
        {isGoogleSearchArticle && (
          <div className="w-full mb-6 relative">
            <Image
              src="/images/google-search-campaign.png"
              alt="Best practices for Google Search Campaigns 2025 — by Megha Aggerwal"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
            <p className="text-sm text-editorial-gray italic mt-2 text-center">
              Image: Google Search campaign optimization trends — 2025 edition.
            </p>
          </div>
        )}

        {/* Featured Image for EdTech Case Study Article */}
        {isEdTechArticle && (
          <div className="w-full mb-6 relative">
            <Image
              src="/images/edtech-case-study.png"
              alt="Scaling EdTech Ads Case Study — by Megha Aggerwal"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
            <p className="text-sm text-editorial-gray italic mt-2 text-center">
              Image: EdTech advertising case study — scaling education campaigns.
            </p>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Bottom Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-headline text-lg font-bold text-editorial-black mb-2">
                Share this article
              </h3>
              <p className="text-editorial-gray text-sm">
                Help others discover this content
              </p>
            </div>
            <ShareButtons title={article.title} slug={slug} />
          </div>
        </div>
      </article>
    </div>
  )
}
