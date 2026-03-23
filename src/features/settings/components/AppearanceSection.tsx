import { cn } from '@/lib/utils'
import { useSettingsStore } from '@/store/settingsStore'

export function AppearanceSection() {
  const { appearance, updateAppearance } = useSettingsStore()

  const themes = [
    {
      id: 'dark' as const,
      label: 'Dark Mode',
      preview: (
        <div className="w-full h-20 bg-sentinel-background rounded-lg flex flex-col p-2 gap-1 overflow-hidden border border-sentinel-outline-variant/20">
          <div className="w-1/2 h-1 bg-sentinel-primary/40 rounded-full" />
          <div className="w-full h-1 bg-sentinel-surface-container-highest rounded-full" />
          <div className="w-2/3 h-1 bg-sentinel-surface-container-highest rounded-full" />
        </div>
      ),
    },
    {
      id: 'light' as const,
      label: 'Light Mode',
      preview: (
        <div className="w-full h-20 bg-white rounded-lg flex flex-col p-2 gap-1 overflow-hidden">
          <div className="w-1/2 h-1 bg-blue-400 rounded-full" />
          <div className="w-full h-1 bg-slate-200 rounded-full" />
          <div className="w-2/3 h-1 bg-slate-200 rounded-full" />
        </div>
      ),
    },
    {
      id: 'system' as const,
      label: 'System',
      preview: (
        <div className="w-full h-20 bg-gradient-to-br from-sentinel-background to-white rounded-lg flex flex-col p-2 gap-1 overflow-hidden">
          <div className="w-1/2 h-1 bg-sentinel-primary/40 rounded-full" />
          <div className="w-full h-1 bg-sentinel-surface-container-highest rounded-full" />
        </div>
      ),
    },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-sentinel-outline-variant/10">
      <div>
        <h3 className="font-headline font-bold text-lg text-sentinel-on-surface">
          Interface Appearance
        </h3>
        <p className="text-sm text-sentinel-on-surface-variant mt-1">
          Customize how the Sentinel Sanctuary appears on your device.
        </p>
      </div>

      <div className="col-span-2 grid grid-cols-3 gap-4">
        {themes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => updateAppearance({ theme: theme.id })}
            className={cn(
              'border-2 rounded-xl p-4 flex flex-col items-center gap-3 transition-all',
              appearance.theme === theme.id
                ? 'border-sentinel-primary bg-sentinel-surface-container-low'
                : 'border-transparent hover:border-sentinel-outline-variant bg-sentinel-surface-container-low opacity-60'
            )}
          >
            {theme.preview}
            <span
              className={cn(
                'text-xs font-bold font-headline uppercase tracking-widest',
                appearance.theme === theme.id
                  ? 'text-sentinel-primary'
                  : 'text-sentinel-on-surface-variant'
              )}
            >
              {theme.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
