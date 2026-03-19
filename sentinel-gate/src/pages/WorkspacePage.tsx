import { MainLayout } from '@/components/layout'
import { ChatCanvas } from '../features/workspace/components/ChatCanvas'

export function WorkspacePage() {
  return (
    <MainLayout title="Sentinel Gate" showTopBar={true}>
      <ChatCanvas />
    </MainLayout>
  )
}
