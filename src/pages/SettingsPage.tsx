import { useState } from 'react'
import { MainLayout } from '@/components/layout'
import { TabNavigation, ProfileSection, AppearanceSection, SecuritySection, StickyActionBar } from '@/features/settings/components'
import { motion } from 'framer-motion'

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'appearance' | 'security'>('profile')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save logic handled by zustand store in real-time
    console.log('Settings saved')
  }

  const handleDiscard = () => {
    console.log('Changes discarded')
  }

  return (
    <MainLayout title="Sentinel Gate">
      <div className="flex-1 p-10 max-w-5xl pb-32">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-sentinel-on-surface mb-2">
            Account Settings
          </h1>
          <p className="text-sentinel-on-surface-variant font-body">
            Manage your sanctuary's core preferences and AI protocols.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </motion.div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {activeTab === 'profile' && <ProfileSection />}
            {activeTab === 'appearance' && <AppearanceSection />}
            {activeTab === 'security' && <SecuritySection />}
          </motion.div>
        </form>
      </div>

      {/* Sticky Action Bar */}
      <StickyActionBar onDiscard={handleDiscard} />
    </MainLayout>
  )
}
