import { Activity, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface VaultHealthCardProps {
  activeLinks?: number
  lastRotation?: string
  rotationProgress?: number
  operational?: boolean
}

export function VaultHealthCard({
  activeLinks = 8,
  lastRotation = "14h ago",
  rotationProgress = 85,
}: VaultHealthCardProps) {
  return (
    <Card className="col-span-12 lg:col-span-4 bg-sentinel-surface-low p-8 rounded-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Activity className="w-24 h-24 text-sentinel-primary" strokeWidth={1} />
      </div>
      
      <h3 className="text-sentinel-on-surface-variant text-xs font-bold uppercase tracking-widest mb-6">
        Vault Health
      </h3>
      
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-6xl font-black text-sentinel-primary">
          {activeLinks.toString().padStart(2, '0')}
        </span>
        <span className="text-lg text-sentinel-on-surface-variant font-medium">
          Active Links
        </span>
      </div>
      
      <div className="flex items-center gap-2 text-sentinel-tertiary text-sm font-bold mt-4">
        <CheckCircle2 className="w-4 h-4" />
        All systems operational
      </div>
      
      <div className="mt-8 space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-sentinel-on-surface-variant">Last Key Rotation</span>
          <span className="text-sentinel-on-surface">{lastRotation}</span>
        </div>
        
        <div className="w-full bg-sentinel-surface-container rounded-full h-1.5">
          <div
            className="bg-sentinel-primary h-1.5 rounded-full transition-all duration-1000"
            style={{ width: `${rotationProgress}%` }}
          />
        </div>
      </div>
    </Card>
  )
}
