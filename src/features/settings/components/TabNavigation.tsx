import { cn } from '@/lib/utils'

interface TabNavigationProps {
  activeTab: 'profile' | 'appearance' | 'security'
  onTabChange: (tab: 'profile' | 'appearance' | 'security') => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: 'profile' as const, label: 'Profile' },
    { id: 'appearance' as const, label: 'Appearance' },
    {
      id: 'security' as const,
      label: 'Security',
      badge: 'Admin',
    },
  ]

  return (
    <div className="flex gap-8 mb-10 border-b border-sentinel-outline-variant/10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'pb-4 font-headline text-sm font-bold tracking-tight transition-colors flex items-center gap-2',
            activeTab === tab.id
              ? 'text-sentinel-primary border-b-2 border-sentinel-primary'
              : 'text-sentinel-on-surface-variant hover:text-sentinel-primary'
          )}
        >
          {tab.label}
          {tab.badge && (
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-sentinel-tertiary/10 text-sentinel-tertiary border border-sentinel-tertiary/20 uppercase tracking-widest">
              {tab.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
