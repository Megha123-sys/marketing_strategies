'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function GeoPerformance() {
  const topRegions = [
    { region: 'Delhi NCR', impressions: '450K', clicks: '8.1K', roas: '3.8x', cpa: '₹720' },
    { region: 'Mumbai', impressions: '380K', clicks: '6.8K', roas: '3.5x', cpa: '₹780' },
    { region: 'Bangalore', impressions: '320K', clicks: '5.9K', roas: '3.2x', cpa: '₹820' },
    { region: 'Pune', impressions: '240K', clicks: '4.2K', roas: '2.9x', cpa: '₹890' },
  ]

  return (
    <div className="animate-fade-in max-w-7xl">
      {/* Header */}
      <div className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="font-headline text-4xl font-bold text-editorial-black mb-3">
          Geo Performance
        </h1>
        <p className="text-lg text-editorial-gray leading-relaxed max-w-3xl">
          Identify where your ads perform best and refine your audience targeting to maximize ROI.
        </p>
      </div>

      {/* Regional Performance Map */}
      <div className="bg-white border border-gray-200 p-8 mb-8">
        <h2 className="font-headline text-xl font-bold text-editorial-black mb-4">
          Regional Performance Map
        </h2>
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/latin-america.png"
            alt="Latin America regional performance map"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Top Regions Table */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <h2 className="font-headline text-xl font-bold text-editorial-black p-6 border-b border-gray-200">
          Top Performing Regions
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-editorial-bg border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left font-headline font-bold text-editorial-black">Region</th>
                <th className="px-6 py-4 text-left font-headline font-bold text-editorial-black">Impressions</th>
                <th className="px-6 py-4 text-left font-headline font-bold text-editorial-black">Clicks</th>
                <th className="px-6 py-4 text-left font-headline font-bold text-editorial-black">ROAS</th>
                <th className="px-6 py-4 text-left font-headline font-bold text-editorial-black">CPA</th>
              </tr>
            </thead>
            <tbody>
              {topRegions.map((region, index) => (
                <motion.tr
                  key={region.region}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-200 hover:bg-editorial-bg transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-editorial-black">{region.region}</td>
                  <td className="px-6 py-4 text-editorial-gray">{region.impressions}</td>
                  <td className="px-6 py-4 text-editorial-gray">{region.clicks}</td>
                  <td className="px-6 py-4 font-semibold text-green-600">{region.roas}</td>
                  <td className="px-6 py-4 text-editorial-gray">{region.cpa}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}