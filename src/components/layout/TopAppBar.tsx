import { Search, Bell, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'

interface TopAppBarProps {
  className?: string
  title?: string
  showSearch?: boolean
}

export function TopAppBar({ className, title = "Sentinel Gate", showSearch = true }: TopAppBarProps) {
  return (
    <header className={cn(
      "flex justify-between items-center px-8 h-16 w-full sticky top-0 z-40 bg-sentinel-background/80 backdrop-blur-xl transition-shadow duration-300",
      "shadow-[0_20px_40px_rgba(7,13,31,0.4)]",
      className
    )}>
      <div className="flex items-center gap-8">
        <span className="text-lg font-bold text-sentinel-primary">{title}</span>
        
        {showSearch && (
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-sentinel-on-surface-variant w-4 h-4" />
            <Input
              className="pl-10 w-64"
              placeholder="Search audit logs..."
              type="text"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="/workspace"
            className={({ isActive }) =>
              cn(
                "pb-1 font-medium transition-colors",
                isActive
                  ? "text-sentinel-primary border-b-2 border-sentinel-primary"
                  : "text-sentinel-on-surface-variant hover:text-sentinel-primary"
              )
            }
          >
            User Console
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              cn(
                "pb-1 font-medium transition-colors",
                isActive
                  ? "text-sentinel-primary border-b-2 border-sentinel-primary"
                  : "text-sentinel-on-surface-variant hover:text-sentinel-primary"
              )
            }
          >
            Admin Terminal
          </NavLink>
        </nav>

        <div className="flex items-center gap-4 border-l border-outline-variant/20 pl-6">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="text-xs font-bold border-sentinel-primary/20 text-sentinel-primary hover:bg-sentinel-primary/10">
            Deploy Policy
          </Button>
        </div>
      </div>
    </header>
  )
}
