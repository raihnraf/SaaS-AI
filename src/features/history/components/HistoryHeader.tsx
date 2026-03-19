import { ChevronRight, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HistoryHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-sentinel-on-surface-variant mb-2">
          <span className="hover:text-sentinel-primary cursor-pointer transition-colors">
            Sentinel Sanctuary
          </span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-sentinel-primary font-medium">Chat History</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-black font-headline text-sentinel-on-surface">
          Chat History
        </h1>
        <p className="text-sm text-sentinel-on-surface-variant mt-1">
          Editorial Intelligence conversation logs and security status
        </p>
      </div>

      {/* New Analysis Button */}
      <Button variant="default" size="lg">
        <Plus className="w-5 h-5 mr-2" />
        New Analysis
      </Button>
    </div>
  )
}
