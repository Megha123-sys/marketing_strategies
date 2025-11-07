export interface CampaignMetrics {
  date: string
  impressions: number
  clicks: number
  spend: number
  leads: number
  ctr: number
  cpa: number
  roas: number
}

export interface Creative {
  id: string
  name: string
  imageUrl: string
  uploadDate: string
  metrics: {
    impressions: number
    clicks: number
    ctr: number
    costPerLead: number
    leads: number
  }
}

export interface GeoPerformance {
  region: string
  country: string
  impressions: number
  clicks: number
  spend: number
  leads: number
  ctr: number
  cpa: number
  roas: number
}

export interface BudgetSplit {
  awareness: number
  consideration: number
  conversion: number
}

export interface Recommendation {
  id: string
  type: 'creative' | 'budget' | 'geo' | 'targeting'
  priority: 'high' | 'medium' | 'low'
  title: string
  description: string
  action: string
  timestamp: string
}

export interface AdCopyRequest {
  country?: string
  ageGroup?: string
  targetAudience?: string
  campaignType?: string
}
