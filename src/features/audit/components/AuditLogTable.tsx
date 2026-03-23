import { Badge } from '@/components/ui/badge'
import { AuditLog, severityColors, statusColors } from '@/data/auditLogs'
import { cn } from '@/lib/utils'
import { AlertCircle, CheckCircle, Shield, Flag } from 'lucide-react'

interface AuditLogTableProps {
  logs: AuditLog[]
  onLogClick?: (log: AuditLog) => void
}

const statusIcons = {
  success: CheckCircle,
  blocked: Shield,
  sanitized: CheckCircle,
  flagged: Flag,
}

export function AuditLogTable({ logs, onLogClick }: AuditLogTableProps) {
  return (
    <div className="bg-sentinel-surface-container-low rounded-xl border border-sentinel-outline-variant/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-sentinel-outline-variant/10">
              <th className="text-left py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                Timestamp
              </th>
              <th className="text-left py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                User
              </th>
              <th className="text-left py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                Action
              </th>
              <th className="text-left py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                Resource
              </th>
              <th className="text-left py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                Severity
              </th>
              <th className="text-left py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sentinel-outline-variant/10">
            {logs.map((log) => {
              const StatusIcon = statusIcons[log.status]
              return (
                <tr
                  key={log.id}
                  onClick={() => onLogClick?.(log)}
                  className="hover:bg-sentinel-surface-container transition-colors cursor-pointer"
                >
                  <td className="py-4 px-6 text-sm text-sentinel-on-surface-variant font-mono whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="py-4 px-6 text-sm text-sentinel-on-surface font-medium">
                    {log.user}
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-sentinel-on-surface font-medium">
                      {log.action.replace(/_/g, ' ')}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-sentinel-on-surface-variant max-w-xs truncate">
                    {log.resource}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <AlertCircle
                        className={cn('w-4 h-4', severityColors[log.severity])}
                      />
                      <span
                        className={cn(
                          'text-sm font-medium capitalize',
                          severityColors[log.severity]
                        )}
                      >
                        {log.severity}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Badge
                      className={cn(
                        'border',
                        statusColors[log.status]
                      )}
                    >
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {log.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6 text-sm text-sentinel-on-surface-variant max-w-md truncate">
                    {log.details}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {logs.length === 0 && (
        <div className="py-12 text-center text-sentinel-on-surface-variant">
          <p>No audit logs found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
