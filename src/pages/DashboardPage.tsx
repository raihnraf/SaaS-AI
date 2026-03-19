import { MainLayout } from '@/components/layout'
import { MetricsCard } from '@/features/dashboard/components/MetricsCard'
import { UsageChart } from '@/features/dashboard/components/UsageChart'
import { ThreatMeter } from '@/features/dashboard/components/ThreatMeter'
import { SecurityAlertsList } from '@/features/dashboard/components/SecurityAlertsList'
import { ActiveUsersList } from '@/features/dashboard/components/ActiveUsersList'
import { dashboardMetrics } from '@/data/dashboard'
import { Button } from '@/components/ui/button'
import { Download, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'

export function DashboardPage() {
  return (
    <MainLayout title="Sentinel Gate">
      <div className="p-8 space-y-8 max-w-7xl">
        {/* Header Section */}
        <motion.section 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h2 className="text-4xl font-extrabold font-headline tracking-tight text-sentinel-on-surface">
              Audit Intelligence
            </h2>
            <p className="text-sentinel-on-surface-variant mt-2 font-body">
              Company-wide operational oversight and threat detection.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
            <Button>
              <RefreshCw className="w-4 h-4 mr-2" />
              Live Sync
            </Button>
          </div>
        </motion.section>

        {/* Key Metrics Grid */}
        <motion.section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <MetricsCard
            title="Total Tokens"
            value={dashboardMetrics.totalTokens}
            change={dashboardMetrics.tokensChange}
            changeType="positive"
            icon="usage"
            iconColor="primary"
          />
          <MetricsCard
            title="Incidents"
            value={dashboardMetrics.incidents.toString()}
            change={`${dashboardMetrics.incidentsNew} New`}
            changeType="negative"
            icon="incident"
            iconColor="error"
          />
          <MetricsCard
            title="Active API Keys"
            value={dashboardMetrics.activeApiKeys.toString()}
            subtitle={`${dashboardMetrics.totalApiKeys} Total`}
            icon="key"
            iconColor="tertiary"
          />
          <MetricsCard
            title="Concurrent Users"
            value={dashboardMetrics.concurrentUsers.toString()}
            change={dashboardMetrics.usersActive}
            changeType="positive"
            icon="users"
            iconColor="secondary"
          />
        </motion.section>

        {/* Bento Content Area */}
        <motion.section 
          className="grid grid-cols-12 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <UsageChart />
          <ThreatMeter />
          <SecurityAlertsList />
          <ActiveUsersList />
        </motion.section>

        {/* Bottom spacer */}
        <div className="h-12" />
      </div>
    </MainLayout>
  )
}
