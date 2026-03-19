import { ReactNode } from 'react'
import { SideNavBar } from './SideNavBar'
import { TopAppBar } from './TopAppBar'
import { cn } from '@/lib/utils'

interface MainLayoutProps {
  children: ReactNode
  className?: string
  showTopBar?: boolean
  title?: string
}

export function MainLayout({ children, className, showTopBar = true, title }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-sentinel-background">
      <SideNavBar />
      <div className="ml-64">
        {showTopBar && <TopAppBar title={title} />}
        <main className={cn("flex-1", className)}>
          {children}
        </main>
      </div>
    </div>
  )
}
