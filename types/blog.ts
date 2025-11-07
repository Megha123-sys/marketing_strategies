export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  tags: string[]
  readTime: string
  image: string
  content: string
}

export type BlogCategory = 'All' | 'Strategy' | 'Creative' | 'Targeting' | 'Budget' | 'AI' | 'Integration'
