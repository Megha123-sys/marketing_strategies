import { CampaignMetrics, Creative, GeoPerformance, Recommendation } from '@/types'

// Generate mock campaign metrics for last 30 days
export const generateMockMetrics = (): CampaignMetrics[] => {
  const metrics: CampaignMetrics[] = []
  const today = new Date()
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    
    const baseImpressions = 50000 + Math.random() * 30000
    const baseClicks = baseImpressions * (0.015 + Math.random() * 0.01)
    const baseSpend = 30000 + Math.random() * 20000
    const baseLeads = baseClicks * (0.08 + Math.random() * 0.05)
    
    metrics.push({
      date: date.toISOString().split('T')[0],
      impressions: Math.round(baseImpressions),
      clicks: Math.round(baseClicks),
      spend: Math.round(baseSpend),
      leads: Math.round(baseLeads),
      ctr: (baseClicks / baseImpressions) * 100,
      cpa: baseSpend / baseLeads,
      roas: (baseLeads * 50000) / baseSpend, // Assuming ₹50k value per lead
    })
  }
  
  return metrics
}

export const mockCreatives: Creative[] = [
  {
    id: '1',
    name: 'Hero Student Success Story',
    imageUrl: '/api/placeholder/600/400',
    uploadDate: '2024-01-15',
    metrics: {
      impressions: 245000,
      clicks: 4200,
      ctr: 1.71,
      costPerLead: 850,
      leads: 320,
    },
  },
  {
    id: '2',
    name: 'University Campus Tour',
    imageUrl: '/api/placeholder/600/400',
    uploadDate: '2024-01-18',
    metrics: {
      impressions: 189000,
      clicks: 3780,
      ctr: 2.00,
      costPerLead: 720,
      leads: 265,
    },
  },
  {
    id: '3',
    name: 'Career Growth Infographic',
    imageUrl: '/api/placeholder/600/400',
    uploadDate: '2024-01-20',
    metrics: {
      impressions: 156000,
      clicks: 2340,
      ctr: 1.50,
      costPerLead: 980,
      leads: 158,
    },
  },
  {
    id: '4',
    name: 'Testimonial Video Thumbnail',
    imageUrl: '/api/placeholder/600/400',
    uploadDate: '2024-01-22',
    metrics: {
      impressions: 312000,
      clicks: 6240,
      ctr: 2.00,
      costPerLead: 650,
      leads: 480,
    },
  },
  {
    id: '5',
    name: 'Scholarship Announcement',
    imageUrl: '/api/placeholder/600/400',
    uploadDate: '2024-01-25',
    metrics: {
      impressions: 278000,
      clicks: 4170,
      ctr: 1.50,
      costPerLead: 890,
      leads: 234,
    },
  },
]

export const mockGeoPerformance: GeoPerformance[] = [
  {
    region: 'LATAM',
    country: 'Brazil',
    impressions: 450000,
    clicks: 8100,
    spend: 540000,
    leads: 648,
    ctr: 1.80,
    cpa: 833,
    roas: 3.8,
  },
  {
    region: 'LATAM',
    country: 'Mexico',
    impressions: 380000,
    clicks: 6840,
    spend: 456000,
    leads: 547,
    ctr: 1.80,
    cpa: 833,
    roas: 4.2,
  },
  {
    region: 'SEA',
    country: 'Singapore',
    impressions: 320000,
    clicks: 6400,
    spend: 384000,
    leads: 512,
    ctr: 2.00,
    cpa: 750,
    roas: 4.5,
  },
  {
    region: 'SEA',
    country: 'Thailand',
    impressions: 290000,
    clicks: 5220,
    spend: 348000,
    leads: 418,
    ctr: 1.80,
    cpa: 833,
    roas: 3.9,
  },
  {
    region: 'Europe',
    country: 'Germany',
    impressions: 410000,
    clicks: 6970,
    spend: 492000,
    leads: 558,
    ctr: 1.70,
    cpa: 882,
    roas: 3.6,
  },
  {
    region: 'Europe',
    country: 'UK',
    impressions: 360000,
    clicks: 7200,
    spend: 432000,
    leads: 576,
    ctr: 2.00,
    cpa: 750,
    roas: 4.3,
  },
  {
    region: 'MENA',
    country: 'UAE',
    impressions: 340000,
    clicks: 6120,
    spend: 408000,
    leads: 490,
    ctr: 1.80,
    cpa: 833,
    roas: 4.0,
  },
]

export const mockRecommendations: Recommendation[] = [
  {
    id: '1',
    type: 'creative',
    priority: 'high',
    title: 'Creative #4 Performing Exceptionally',
    description: 'Testimonial Video Thumbnail has 2.0% CTR and ₹650 CPL. Recommend scaling budget by 20%.',
    action: 'Scale Creative #4',
    timestamp: new Date().toISOString(),
  },
  {
    id: '2',
    type: 'geo',
    priority: 'high',
    title: 'Mexico Campaign Underperforming',
    description: 'Mexico shows 25% higher CPA than average. Consider pausing or reducing budget allocation.',
    action: 'Review Mexico Campaign',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: '3',
    type: 'creative',
    priority: 'medium',
    title: 'Creative #3 Needs Optimization',
    description: 'Career Growth Infographic has 1.5% CTR (below average). Test new variation or reduce spend.',
    action: 'Optimize Creative #3',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    id: '4',
    type: 'budget',
    priority: 'medium',
    title: 'Consideration Phase Needs More Budget',
    description: 'Conversion campaigns are performing well. Reallocate 10% from awareness to consideration.',
    action: 'Adjust Budget Split',
    timestamp: new Date(Date.now() - 10800000).toISOString(),
  },
]
