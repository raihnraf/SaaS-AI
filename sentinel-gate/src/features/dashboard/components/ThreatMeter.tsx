import { Card } from '@/components/ui/card'

interface ThreatMeterProps {
  score?: number
  label?: string
  description?: string
  className?: string
}

export function ThreatMeter({ 
  score = 92, 
  label = "OPTIMIZED",
  description = "Infrastructure is 92% resilient against PII leakage patterns.",
}: ThreatMeterProps) {
  // Calculate the stroke dashoffset for the circular progress
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <Card className="col-span-12 lg:col-span-4 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-sentinel-on-surface-variant mb-8">
        System Trust Index
      </h3>
      
      <div className="relative w-48 h-48 mb-6">
        <svg className="w-full h-full -rotate-90">
          {/* Background circle */}
          <circle
            cx="96"
            cy="96"
            fill="transparent"
            r={radius}
            stroke="#191f31"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="96"
            cy="96"
            fill="transparent"
            r={radius}
            stroke="#3cddc7"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            strokeWidth="8"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-black font-headline text-sentinel-tertiary">
            {score}
          </span>
          <span className="text-[10px] font-bold text-sentinel-on-surface-variant mt-1">
            {label}
          </span>
        </div>
      </div>
      
      <p className="text-sm font-medium text-sentinel-on-secondary-container">
        {description}
      </p>
    </Card>
  )
}
