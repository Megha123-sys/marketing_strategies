'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function CreativeTesting() {
  const testResults = [
    { name: 'Bold Headline Visual', ctr: '1.9%', cpc: '₹9.20', conversionRate: '4.2%', winner: true },
    { name: 'Lifestyle Visual', ctr: '1.4%', cpc: '₹10.80', conversionRate: '3.1%', winner: false },
    { name: 'Testimonial Carousel', ctr: '1.7%', cpc: '₹9.80', conversionRate: '3.8%', winner: false },
    { name: 'Product Showcase', ctr: '1.2%', cpc: '₹11.50', conversionRate: '2.9%', winner: false },
  ]

  return (
    <div className="animate-fade-in max-w-7xl">
      {/* Header */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="font-headline text-4xl font-bold text-editorial-black mb-3">
          Creative Testing
        </h1>
        <p className="text-lg text-editorial-gray leading-relaxed max-w-3xl">
          Run structured creative experiments to identify winning combinations of visuals and copy that drive conversions.
        </p>
      </div>

      {/* Mockup Image */}
      <div className="mb-8 w-full">
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/mockup.png"
            alt="Creative testing mockup and visual"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-editorial-bg border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left font-headline font-bold text-editorial-black">Creative Name</th>
                <th className="px-6 py-4 text-left font-headline font-bold text-editorial-black">CTR</th>
                <th className="px-6 py-4 text-left font-headline font-bold text-editorial-black">CPC</th>
                <th className="px-6 py-4 text-left font-headline font-bold text-editorial-black">Conversion Rate</th>
                <th className="px-6 py-4 text-left font-headline font-bold text-editorial-black">Winner</th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((result, index) => (
                <motion.tr
                  key={result.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-200 hover:bg-editorial-bg transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-editorial-black">{result.name}</td>
                  <td className="px-6 py-4 text-editorial-gray">{result.ctr}</td>
                  <td className="px-6 py-4 text-editorial-gray">{result.cpc}</td>
                  <td className="px-6 py-4 text-editorial-gray">{result.conversionRate}</td>
                  <td className="px-6 py-4">
                    {result.winner && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}