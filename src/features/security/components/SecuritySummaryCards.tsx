import { Shield, AlertTriangle, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { securityMetrics } from '@/data/securityRules'

export function SecuritySummaryCards() {
  return (
    <>
      {/* Active Redaction Rules */}
      <Card className="col-span-12 md:col-span-4 p-6 border-l-4 border-l-primary">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <Badge variant="success">{securityMetrics.rulesChange}</Badge>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-sentinel-on-surface-variant font-bold mb-1">
          Active Redaction Rules
        </p>
        <h3 className="text-3xl font-black font-headline text-sentinel-on-surface">
          {securityMetrics.activeRules}
        </h3>
        <p className="text-sm text-sentinel-on-surface-variant mt-2">
          Protecting against PII leakage
        </p>
      </Card>

      {/* Intercepted Prompts */}
      <Card className="col-span-12 md:col-span-4 p-6 border-l-4 border-l-error">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 rounded-lg bg-error/10">
            <AlertTriangle className="w-5 h-5 text-error" />
          </div>
          <span className="text-xs font-bold text-error">+12 today</span>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-sentinel-on-surface-variant font-bold mb-1">
          Intercepted Prompts
        </p>
        <h3 className="text-3xl font-black font-headline text-sentinel-on-surface">
          {securityMetrics.interceptedPrompts}
        </h3>

        {/* Mini Bar Chart */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-sentinel-on-surface-variant w-16">Blocked</span>
            <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-error rounded-full" style={{ width: '65%' }} />
            </div>
            <span className="text-[10px] text-sentinel-on-surface-variant">83</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-sentinel-on-surface-variant w-16">Masked</span>
            <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '35%' }} />
            </div>
            <span className="text-[10px] text-sentinel-on-surface-variant">45</span>
          </div>
        </div>
      </Card>

      {/* System Trust Score */}
      <Card className="col-span-12 md:col-span-4 p-6 border-l-4 border-l-tertiary">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 rounded-lg bg-tertiary/10">
            <CheckCircle className="w-5 h-5 text-tertiary" />
          </div>
          <Badge variant="success">{securityMetrics.trustStatus}</Badge>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-sentinel-on-surface-variant font-bold mb-1">
          System Trust Score
        </p>
        <h3 className="text-3xl font-black font-headline text-tertiary">
          {securityMetrics.trustScore}%
        </h3>
        <p className="text-sm text-sentinel-on-surface-variant mt-2">
          Infrastructure resilience verified
        </p>
      </Card>
    </>
  )
}
