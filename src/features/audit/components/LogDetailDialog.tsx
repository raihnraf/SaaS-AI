import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { AuditLog } from '@/data/auditLogs'
import { Badge } from '@/components/ui/badge'
import { severityColors, statusColors } from '@/data/auditLogs'
import { cn } from '@/lib/utils'
import { AlertCircle, CheckCircle, Shield, Flag, Clock, User, Globe, FileText } from 'lucide-react'

interface LogDetailDialogProps {
  log: AuditLog | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

const statusIcons = {
  success: CheckCircle,
  blocked: Shield,
  sanitized: CheckCircle,
  flagged: Flag,
}

export function LogDetailDialog({ log, open, onOpenChange }: LogDetailDialogProps) {
  if (!log) return null

  const StatusIcon = statusIcons[log.status]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-sentinel-surface-container border-sentinel-outline-variant/10">
        <DialogHeader>
          <DialogTitle className="font-headline text-xl text-sentinel-on-surface">
            Audit Log Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className={cn('w-6 h-6', severityColors[log.severity])} />
              <span className={cn('font-bold capitalize', severityColors[log.severity])}>
                {log.severity} Incident
              </span>
            </div>
            <Badge className={cn('border', statusColors[log.status])}>
              <StatusIcon className="w-3 h-3 mr-1" />
              {log.status}
            </Badge>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sentinel-on-surface-variant">
                <Clock className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-bold">Timestamp</span>
              </div>
              <p className="text-sm text-sentinel-on-surface font-mono">{log.timestamp}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sentinel-on-surface-variant">
                <User className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-bold">User</span>
              </div>
              <p className="text-sm text-sentinel-on-surface">{log.user}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sentinel-on-surface-variant">
                <Globe className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-bold">IP Address</span>
              </div>
              <p className="text-sm text-sentinel-on-surface font-mono">{log.ipAddress}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sentinel-on-surface-variant">
                <FileText className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-bold">Action</span>
              </div>
              <p className="text-sm text-sentinel-on-surface">{log.action.replace(/_/g, ' ')}</p>
            </div>
          </div>

          {/* Resource */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-sentinel-on-surface-variant">
              Resource
            </span>
            <p className="text-sm text-sentinel-on-surface bg-sentinel-surface-low p-3 rounded-lg">
              {log.resource}
            </p>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-sentinel-on-surface-variant">
              Details
            </span>
            <p className="text-sm text-sentinel-on-surface bg-sentinel-surface-low p-3 rounded-lg">
              {log.details}
            </p>
          </div>

          {/* Log ID */}
          <div className="pt-4 border-t border-sentinel-outline-variant/10">
            <p className="text-xs text-sentinel-on-surface-variant font-mono">
              Log ID: {log.id}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
