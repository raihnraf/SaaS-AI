import { useState } from 'react'
import { Repeat, Edit, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface APIProviderItemProps {
  id: string
  name: string
  keyMask: string
  status: 'active' | 'error' | 'inactive'
  usage24h: number
  logo: string
}

export function APIProviderItem({
  name,
  keyMask,
  status,
  usage24h,
  logo,
}: Omit<APIProviderItemProps, 'id'>) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="px-8 py-6 flex items-center justify-between hover:bg-sentinel-surface-container transition-all group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 rounded-xl bg-sentinel-surface-container flex items-center justify-center border border-outline-variant/10">
          <img
            alt={name}
            src={logo}
            className="w-6 h-6 opacity-80"
          />
        </div>
        <div>
          <h4 className="font-bold text-sentinel-on-surface">{name}</h4>
          <div className="flex items-center gap-3 mt-1">
            <code className="text-xs text-sentinel-on-surface-variant bg-sentinel-surface-container-highest px-2 py-0.5 rounded tracking-widest">
              {keyMask}
            </code>
            <Badge
              variant={status === 'active' ? 'success' : status === 'error' ? 'error' : 'default'}
            >
              {status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className={cn(
          "text-right hidden sm:block",
          status === 'error' && "text-error"
        )}>
          <p className="text-[10px] text-sentinel-on-surface-variant uppercase font-bold tracking-tighter">
            Usage (24h)
          </p>
          <p className="text-sm font-bold">
            ${usage24h.toFixed(2)}
          </p>
        </div>

        <div
          className={cn(
            "flex gap-2 transition-opacity",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          {status === 'error' ? (
            <Button variant="secondary" size="icon" className="text-error hover:bg-error/10" title="Fix Connection">
              <Zap className="w-5 h-5" />
            </Button>
          ) : (
            <Button variant="secondary" size="icon" title="Rotate Key">
              <Repeat className="w-5 h-5" />
            </Button>
          )}
          <Button variant="secondary" size="icon" title="Edit Settings">
            <Edit className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
