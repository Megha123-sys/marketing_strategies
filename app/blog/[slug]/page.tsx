import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import blogsData from '@/data/blogs.json'
import { BlogPost } from '@/types/blog'
import ShareButtons from '@/components/blog/ShareButtons'
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const blogs = blogsData as BlogPost[]
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const blogs = blogsData as BlogPost[]
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-upgrad-dark-grey hover:text-upgrad-red transition-colors"
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
            <span className="inline-block px-3 py-1 bg-upgrad-red/10 text-upgrad-red text-sm font-semibold rounded-full">
              {blog.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-upgrad-dark-grey mb-4">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-upgrad-light-grey mb-6">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{blog.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(blog.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-upgrad-dark-grey text-sm rounded-full"
              >
                <Tag className="w-4 h-4" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <ShareButtons title={blog.title} slug={blog.slug} />
        </header>

        {/* Featured Image */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-upgrad-red to-upgrad-dark-red rounded-lg mb-8 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold opacity-20">
            {blog.title.charAt(0)}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Bottom Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-upgrad-dark-grey mb-2">
                Share this article
              </h3>
              <p className="text-upgrad-light-grey text-sm">
                Help others discover this content
              </p>
            </div>
            <ShareButtons title={blog.title} slug={blog.slug} />
          </div>
        </div>
      </article>
    </div>
  )
}
