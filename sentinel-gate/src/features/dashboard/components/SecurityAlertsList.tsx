import { AlertTriangle, Sparkles, FileText } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { securityAlerts } from '@/data/dashboard'
import { motion } from 'framer-motion'

const iconMap = {
  error: AlertTriangle,
  tertiary: Sparkles,
  secondary: FileText,
}

const borderMap = {
  error: "border-error",
  tertiary: "border-sentinel-tertiary",
  secondary: "border-sentinel-secondary",
}

const bgMap = {
  error: "bg-error/10 text-error",
  tertiary: "bg-sentinel-tertiary/10 text-sentinel-tertiary",
  secondary: "bg-sentinel-secondary/10 text-sentinel-secondary",
}

export function SecurityAlertsList() {
  return (
    <Card className="col-span-12 lg:col-span-7 rounded-2xl flex flex-col min-h-[500px]">
      <div className="p-6 flex justify-between items-center border-b border-outline-variant/5">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold font-headline">Recent Intercepts</h3>
          <Badge variant="error">Action Required</Badge>
        </div>
        <Button variant="link" className="text-xs font-bold">
          View All Logs
        </Button>
      </div>
      
      <div className="p-4 space-y-4">
        {securityAlerts.map((alert, index) => {
          const Icon = iconMap[alert.type as keyof typeof iconMap]
          
          return (
            <motion.div
              key={alert.id}
              className={cn(
                "p-4 rounded-xl flex items-center justify-between border-l-4 transition-all cursor-pointer",
                "bg-sentinel-surface-container/50 hover:bg-sentinel-surface-container",
                borderMap[alert.type as keyof typeof borderMap]
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "p-2 rounded-lg",
                  bgMap[alert.type as keyof typeof bgMap]
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">{alert.title}</h4>
                  <p className="text-xs text-sentinel-on-surface-variant mt-0.5">
                    User: {alert.user} • {alert.time}
                  </p>
                </div>
              </div>
              <Badge variant={alert.type === 'error' ? 'error' : 'default'}>
                {alert.status}
              </Badge>
            </motion.div>
          )
        })}
      </div>
    </Card>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}
