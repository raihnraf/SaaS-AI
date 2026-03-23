import { MainLayout } from '@/components/layout'
import { ContextGrid, ActionBar, StorageWidget, UploadZone } from '@/features/files/components'
import { contextFiles } from '@/data/files'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function FilesPage() {
  const [filterValue, setFilterValue] = useState('all')
  const [sortValue, setSortValue] = useState('latest')

  const filteredFiles = contextFiles.filter((file) => {
    if (filterValue === 'all') return true
    return file.type === filterValue
  })

  const sortedFiles = [...filteredFiles].sort((a, b) => {
    switch (sortValue) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'size':
        return parseInt(b.size) - parseInt(a.size)
      case 'oldest':
        return 1
      case 'latest':
      default:
        return -1
    }
  })

  return (
    <MainLayout title="Sentinel Gate">
      <div className="p-10 max-w-7xl mx-auto w-full space-y-8">
        {/* Hero Header */}
        <motion.section
          className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h2 className="text-5xl font-extrabold font-headline tracking-tight text-sentinel-on-surface">
              Context <span className="text-sentinel-primary">Management</span>
            </h2>
            <p className="text-sentinel-on-surface-variant max-w-xl text-lg font-body leading-relaxed mt-4">
              Securely manage high-fidelity data sources for the current chat session.
              Our AI Sentinel redacts PII automatically before analysis.
            </p>
          </div>
          <StorageWidget />
        </motion.section>

        {/* Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ActionBar
            filterValue={filterValue}
            sortValue={sortValue}
            onFilterChange={setFilterValue}
            onSortChange={setSortValue}
          />
        </motion.div>

        {/* Context Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ContextGrid files={sortedFiles} />
        </motion.div>

        {/* Upload Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <UploadZone />
        </motion.div>

        {/* Footer */}
        <footer className="px-10 py-8 text-center">
          <p className="text-[10px] text-sentinel-on-surface-variant uppercase tracking-[0.2em] font-medium">
            All data encrypted with AES-256 and subjected to automated PII scrubbing prior to indexing.
          </p>
        </footer>
      </div>
    </MainLayout>
  )
}
