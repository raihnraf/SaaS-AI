import { Circle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { auditLogs } from '@/data/vault'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const colorMap = {
  info: "bg-sentinel-primary",
  default: "bg-sentinel-outline",
  error: "bg-error",
}

export function AuditLogList() {
  return (
    <Card className="col-span-12 lg:col-span-5 bg-sentinel-surface-low p-8 rounded-2xl">
      <h3 className="text-sm font-bold text-sentinel-on-surface mb-6">
        Vault Audit Logs
      </h3>

      <div className="space-y-6">
        {auditLogs.map((log, index) => (
          <motion.div
            key={log.id}
            className="flex gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Circle
              className={cn(
                "w-2 h-2 mt-1 shrink-0",
                colorMap[log.type as keyof typeof colorMap]
              )}
              fill="currentColor"
            />
            <div>
              <p className="text-xs text-sentinel-on-surface font-semibold">
                {log.title}
              </p>
              <p className="text-[10px] text-sentinel-on-surface-variant mt-1">
                {log.description} • {log.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <Button
        variant="outline"
        className="mt-8 w-full py-3 text-xs font-bold hover:bg-sentinel-surface-container"
      >
        View Complete Audit Log
      </Button>
    </Card>
  )
}
