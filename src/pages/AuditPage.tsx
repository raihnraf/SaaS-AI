import { useState } from 'react'
import { MainLayout } from '@/components/layout'
import { AuditLogTable, AuditActionBar, LogDetailDialog } from '@/features/audit/components'
import { auditLogs } from '@/data/auditLogs'
import type { AuditLog } from '@/data/auditLogs'
import { motion } from 'framer-motion'
import { FileText, TrendingUp, AlertTriangle, Shield } from 'lucide-react'

export function AuditPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [actionFilter, setActionFilter] = useState('all')
  const [severityFilter, setSeverityFilter] = useState('all')
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesAction = actionFilter === 'all' || log.action === actionFilter
    const matchesSeverity = severityFilter === 'all' || log.severity === severityFilter

    return matchesSearch && matchesAction && matchesSeverity
  })

  const handleLogClick = (log: AuditLog) => {
    setSelectedLog(log)
    setIsDialogOpen(true)
  }

  const stats = {
    total: auditLogs.length,
    blocked: auditLogs.filter((l) => l.status === 'blocked').length,
    critical: auditLogs.filter((l) => l.severity === 'critical').length,
    sanitized: auditLogs.filter((l) => l.status === 'sanitized').length,
  }

  return (
    <MainLayout title="Sentinel Gate">
      <div className="p-8 space-y-8 max-w-7xl">
        {/* Header Section */}
        <motion.section
          className="flex flex-col md:flex-row justify-between items-end gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h2 className="text-4xl font-extrabold font-headline tracking-tight text-sentinel-on-surface">
              Audit <span className="text-sentinel-primary">Logs</span>
            </h2>
            <p className="text-sentinel-on-surface-variant mt-2 font-body">
              Comprehensive security event tracking and compliance monitoring.
            </p>
          </div>
        </motion.section>

        {/* Stats Cards */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-sentinel-surface-container-low p-6 rounded-xl border border-sentinel-outline-variant/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-sentinel-on-surface-variant uppercase tracking-widest font-bold">
                  Total Events
                </p>
                <p className="text-2xl font-headline font-bold text-sentinel-on-surface mt-1">
                  {stats.total}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-sentinel-surface-container-highest flex items-center justify-center">
                <FileText className="w-6 h-6 text-sentinel-on-surface-variant" />
              </div>
            </div>
          </div>

          <div className="bg-sentinel-surface-container-low p-6 rounded-xl border border-sentinel-outline-variant/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-sentinel-on-surface-variant uppercase tracking-widest font-bold">
                  Blocked
                </p>
                <p className="text-2xl font-headline font-bold text-sentinel-error mt-1">
                  {stats.blocked}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-sentinel-error/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-sentinel-error" />
              </div>
            </div>
          </div>

          <div className="bg-sentinel-surface-container-low p-6 rounded-xl border border-sentinel-outline-variant/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-sentinel-on-surface-variant uppercase tracking-widest font-bold">
                  Critical
                </p>
                <p className="text-2xl font-headline font-bold text-red-500 mt-1">
                  {stats.critical}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </div>

          <div className="bg-sentinel-surface-container-low p-6 rounded-xl border border-sentinel-outline-variant/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-sentinel-on-surface-variant uppercase tracking-widest font-bold">
                  Sanitized
                </p>
                <p className="text-2xl font-headline font-bold text-sentinel-primary mt-1">
                  {stats.sanitized}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-sentinel-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-sentinel-primary" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <AuditActionBar
            searchQuery={searchQuery}
            actionFilter={actionFilter}
            severityFilter={severityFilter}
            onSearchChange={setSearchQuery}
            onActionFilterChange={setActionFilter}
            onSeverityFilterChange={setSeverityFilter}
            onExport={() => console.log('Export logs')}
            onRefresh={() => console.log('Refresh logs')}
          />
        </motion.div>

        {/* Audit Log Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <AuditLogTable logs={filteredLogs} onLogClick={handleLogClick} />
        </motion.div>

        {/* Log Detail Dialog */}
        <LogDetailDialog
          log={selectedLog}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />

        {/* Footer Info */}
        <footer className="px-10 py-8 text-center">
          <p className="text-[10px] text-sentinel-on-surface-variant uppercase tracking-[0.2em] font-medium">
            All audit logs are retained for 90 days and exported to secure cold storage.
          </p>
        </footer>
      </div>
    </MainLayout>
  )
}
