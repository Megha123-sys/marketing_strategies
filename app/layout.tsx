import type { Metadata } from 'next'
import { Inter, Merriweather, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif'
})
const playfair = Playfair_Display({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-headline'
})

export const metadata: Metadata = {
  title: 'StrategyFlow - Meta Ads Dashboard',
  description: 'Marketing control center for Meta ad campaigns',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}
