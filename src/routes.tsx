import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardPage } from '@/pages/DashboardPage'
import { WorkspacePage } from '@/pages/WorkspacePage'
import { VaultPage } from '@/pages/VaultPage'
import { FilesPage } from '@/pages/FilesPage'
import { SettingsPage } from '@/pages/SettingsPage'
import { AuditPage } from '@/pages/AuditPage'
import { SecurityPage } from '@/pages/SecurityPage'
import { HistoryPage } from '@/pages/HistoryPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/workspace" element={<WorkspacePage />} />
      <Route path="/vault" element={<VaultPage />} />
      <Route path="/files" element={<FilesPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/audit" element={<AuditPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/security" element={<SecurityPage />} />
    </Routes>
  )
}
