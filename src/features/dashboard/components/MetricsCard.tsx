import { TrendingUp, Shield, Key, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface MetricsCardProps {
  title: string
  value: string
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: "usage" | "incident" | "key" | "users"
  iconColor: "primary" | "error" | "tertiary" | "secondary"
  subtitle?: string
  className?: string
}

const iconMap = {
  usage: TrendingUp,
  incident: Shield,
  key: Key,
  users: Users,
}

const colorMap = {
  primary: "text-sentinel-primary bg-sentinel-primary/10",
  error: "text-error bg-error/10",
  tertiary: "text-sentinel-tertiary bg-sentinel-tertiary/10",
  secondary: "text-sentinel-secondary bg-sentinel-secondary/10",
}

export function MetricsCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon,
  iconColor,
  subtitle,
  className,
}: MetricsCardProps) {
  const Icon = iconMap[icon]

  const changeColorMap = {
    positive: "text-sentinel-tertiary",
    negative: "text-error",
    neutral: "text-sentinel-on-surface-variant",
  }

  return (
    <Card className={cn(
      "p-6 flex flex-col justify-between transition-all duration-200 border border-transparent hover:border-sentinel-primary/20 group cursor-default",
      className
    )}>
      <div className="flex justify-between items-start mb-4">
        <div className={cn(
          "p-2 rounded-lg transition-all",
          colorMap[iconColor]
        )}>
          <Icon className="w-5 h-5" />
        </div>
        {change && (
          <span className={cn(
            "text-xs font-bold",
            changeColorMap[changeType]
          )}>
            {change}
          </span>
        )}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-sentinel-on-surface-variant font-bold">
          {title}
        </p>
        <h3 className="text-3xl font-black font-headline text-sentinel-on-surface mt-1">
          {value}
        </h3>
        {subtitle && (
          <Badge variant="default" className="mt-2">{subtitle}</Badge>
        )}
      </div>
    </Card>
  )
}
