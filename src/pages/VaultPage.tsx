import { useState } from 'react'
import { MainLayout } from '@/components/layout'
import { EnvironmentToggle } from '../features/vault/components/EnvironmentToggle'
import { VaultHealthCard } from '../features/vault/components/VaultHealthCard'
import { APIProviderItem } from '../features/vault/components/APIProviderItem'
import { AuditLogList } from '../features/vault/components/AuditLogList'
import { SecurityIndexCard } from '../features/vault/components/SecurityIndexCard'
import { CriticalAlert } from '../features/vault/components/CriticalAlert'
import { vaultProviders, vaultHealth } from '@/data/vault'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function VaultPage() {
  const [environment, setEnvironment] = useState<'dev' | 'staging' | 'production'>('production')

  return (
    <MainLayout title="Sentinel Gate">
      <div className="p-10 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.section
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter text-sentinel-on-surface mb-2">
              API Vault
            </h2>
            <p className="text-sentinel-on-surface-variant max-w-lg leading-relaxed">
              Securely manage master keys for your large language model providers.
              All keys are encrypted at rest and masked during display.
            </p>
          </div>
          <EnvironmentToggle value={environment} onChange={setEnvironment} />
        </motion.section>

        {/* Bento Grid Layout */}
        <motion.section
          className="grid grid-cols-12 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {/* Vault Health */}
          <VaultHealthCard
            activeLinks={vaultHealth.activeLinks}
            lastRotation={vaultHealth.lastRotation}
            rotationProgress={vaultHealth.rotationProgress}
            operational={vaultHealth.operational}
          />

          {/* API Providers List */}
          <div className="col-span-12 lg:col-span-8 bg-sentinel-surface-low rounded-2xl overflow-hidden">
            <div className="px-8 py-6 flex justify-between items-center border-b border-outline-variant/5">
              <h3 className="text-sm font-bold text-sentinel-on-surface">Master Providers</h3>
              <Button variant="link" className="text-xs font-bold">
                Add Provider
              </Button>
            </div>
            <div className="divide-y divide-outline-variant/5">
              {vaultProviders.map((provider) => (
                <APIProviderItem 
                  key={provider.id}
                  name={provider.name}
                  keyMask={provider.key}
                  status={provider.status as 'active' | 'error' | 'inactive'}
                  usage24h={provider.usage24h}
                  logo={provider.logo}
                />
              ))}
            </div>
          </div>

          {/* Audit Logs */}
          <AuditLogList />

          {/* Security Index */}
          <SecurityIndexCard />
        </motion.section>
      </div>

      {/* Critical Alert */}
      <CriticalAlert />
    </MainLayout>
  )
}
