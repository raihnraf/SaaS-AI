import { Badge } from '@/components/ui/badge'
import { Check, Flag, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  status: 'safe' | 'flagged' | 'sanitized'
  className?: string
}

const statusConfig = {
  safe: {
    variant: 'success' as const,
    icon: Check,
    label: 'Safe',
  },
  flagged: {
    variant: 'error' as const,
    icon: Flag,
    label: 'Flagged',
  },
  sanitized: {
    variant: 'warning' as const,
    icon: Shield,
    label: 'Sanitized',
  },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <Badge variant={config.variant} className={cn('text-xs', className)}>
      <Icon className="w-3 h-3 mr-1" />
      {config.label}
    </Badge>
  )
}
