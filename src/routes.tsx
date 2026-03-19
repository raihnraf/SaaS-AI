import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardPage } from '@/pages/DashboardPage'
import { WorkspacePage } from '@/pages/WorkspacePage'
import { VaultPage } from '@/pages/VaultPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/workspace" element={<WorkspacePage />} />
      <Route path="/vault" element={<VaultPage />} />
      <Route path="/history" element={<div className="p-8"><h1 className="text-2xl font-bold">History Page - Coming Soon</h1></div>} />
      <Route path="/files" element={<div className="p-8"><h1 className="text-2xl font-bold">Files Page - Coming Soon</h1></div>} />
      <Route path="/security" element={<div className="p-8"><h1 className="text-2xl font-bold">Security Rules - Coming Soon</h1></div>} />
      <Route path="/audit" element={<div className="p-8"><h1 className="text-2xl font-bold">Audit Logs - Coming Soon</h1></div>} />
      <Route path="/settings" element={<div className="p-8"><h1 className="text-2xl font-bold">Settings - Coming Soon</h1></div>} />
    </Routes>
  )
}
