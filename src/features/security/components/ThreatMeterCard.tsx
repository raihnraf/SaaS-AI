import { Card } from '@/components/ui/card'
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react'

interface ThreatMeterCardProps {
  threatLevel?: 'safe' | 'warning' | 'critical'
  score?: number
  activeThreats?: number
  blockedAttempts?: number
}

const threatConfig = {
  safe: {
    color: 'text-tertiary',
    bgColor: 'bg-tertiary/10',
    strokeColor: '#3cddc7',
    bgColorCircle: '#0a2924',
    icon: CheckCircle,
    label: 'SAFE',
    description: 'No active threats detected. System operating normally.',
  },
  warning: {
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    strokeColor: '#6366f1',
    bgColorCircle: '#1a1f3a',
    icon: AlertTriangle,
    label: 'WARNING',
    description: 'Potential threats detected. Review security logs.',
  },
  critical: {
    color: 'text-error',
    bgColor: 'bg-error/10',
    strokeColor: '#ef4444',
    bgColorCircle: '#2d1a1a',
    icon: AlertTriangle,
    label: 'CRITICAL',
    description: 'Active threats detected. Immediate action required.',
  },
}

export function ThreatMeterCard({
  threatLevel = 'safe',
  score = 94,
  activeThreats = 0,
  blockedAttempts = 128,
}: ThreatMeterCardProps) {
  const config = threatConfig[threatLevel]
  const StatusIcon = config.icon

  // Calculate the stroke dashoffset for the circular progress
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <Card className="col-span-12 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-sentinel-on-surface-variant">
            Threat Assessment
          </h3>
          <p className="text-sm text-sentinel-on-surface-variant mt-1">
            Real-time security posture analysis
          </p>
        </div>
        <div className={cn('flex items-center gap-2 px-4 py-2 rounded-lg', config.bgColor)}>
          <StatusIcon className={cn('w-5 h-5', config.color)} />
          <span className={cn('text-sm font-bold', config.color)}>{config.label}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Circular Gauge */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full -rotate-90">
              {/* Background circle */}
              <circle
                cx="96"
                cy="96"
                fill="transparent"
                r={radius}
                stroke={config.bgColorCircle}
                strokeWidth="8"
              />
              {/* Progress circle */}
              <circle
                cx="96"
                cy="96"
                fill="transparent"
                r={radius}
                stroke={config.strokeColor}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                strokeWidth="8"
                className="transition-all duration-1000 ease-out"
              />
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black font-headline text-sentinel-on-surface">
                {score}
              </span>
              <span className="text-[10px] font-bold text-sentinel-on-surface-variant mt-1">
                PROTECTED
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-2">
              <div className={cn('p-2 rounded-lg', config.bgColor)}>
                <Shield className={cn('w-4 h-4', config.color)} />
              </div>
              <span className="text-xs font-bold text-sentinel-on-surface-variant">
                ACTIVE THREATS
              </span>
            </div>
            <p className="text-2xl font-black font-headline text-sentinel-on-surface">
              {activeThreats}
            </p>
            <p className="text-xs text-sentinel-on-surface-variant mt-1">
              {activeThreats === 0 ? 'No threats detected' : 'Require immediate attention'}
            </p>
          </div>

          <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-error/10">
                <AlertTriangle className="w-4 h-4 text-error" />
              </div>
              <span className="text-xs font-bold text-sentinel-on-surface-variant">
                BLOCKED ATTEMPTS
              </span>
            </div>
            <p className="text-2xl font-black font-headline text-sentinel-on-surface">
              {blockedAttempts}
            </p>
            <p className="text-xs text-sentinel-on-surface-variant mt-1">
              Last 24 hours
            </p>
          </div>

          <div className="md:col-span-2 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
            <p className="text-sm text-sentinel-on-surface-variant">
              {config.description}
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}
