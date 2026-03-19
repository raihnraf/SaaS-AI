import { cn } from '@/lib/utils'

interface EnvironmentToggleProps {
  value?: 'dev' | 'staging' | 'production'
  onChange?: (env: 'dev' | 'staging' | 'production') => void
}

export function EnvironmentToggle({ 
  value = 'production', 
  onChange 
}: EnvironmentToggleProps) {
  const environments: { key: 'dev' | 'staging' | 'production'; label: string }[] = [
    { key: 'dev', label: 'Dev' },
    { key: 'staging', label: 'Staging' },
    { key: 'production', label: 'Production' },
  ]

  return (
    <div className="flex bg-sentinel-surface-low p-1.5 rounded-xl border border-outline-variant/10 shadow-xl">
      {environments.map((env) => (
        <button
          key={env.key}
          onClick={() => onChange?.(env.key)}
          className={cn(
            "px-6 py-2 rounded-lg text-xs font-bold transition-all",
            value === env.key
              ? "bg-sentinel-primary text-sentinel-on-primary shadow-lg shadow-sentinel-primary/20"
              : "text-sentinel-on-surface-variant hover:text-sentinel-on-surface"
          )}
        >
          {env.label}
        </button>
      ))}
    </div>
  )
}
