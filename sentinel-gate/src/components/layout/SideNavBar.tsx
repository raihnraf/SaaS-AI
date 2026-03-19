import { NavLink } from 'react-router-dom'
import { 
  MessageSquare, 
  History, 
  FolderOpen, 
  LayoutDashboard, 
  Shield, 
  FileText,
  Key,
  Settings,
  Plus
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SideNavBarProps {
  className?: string
}

export function SideNavBar({ className }: SideNavBarProps) {
  const navItems = [
    { icon: MessageSquare, label: 'Workspace', path: '/workspace' },
    { icon: History, label: 'History', path: '/history' },
    { icon: FolderOpen, label: 'Files', path: '/files' },
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  ]

  const securityItems = [
    { icon: Shield, label: 'Security Rules', path: '/security' },
    { icon: FileText, label: 'Audit Logs', path: '/audit' },
  ]

  const bottomItems = [
    { icon: Key, label: 'API Vault', path: '/vault' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ]

  return (
    <aside className={cn(
      "fixed left-0 top-0 h-full flex flex-col py-6 px-4 bg-sentinel-surface w-64 border-none z-50",
      className
    )}>
      {/* Logo */}
      <div className="mb-10 px-2">
        <h1 className="text-xl font-black text-sentinel-primary tracking-tighter">
          Editorial Intelligence
        </h1>
        <p className="text-[10px] text-sentinel-on-surface-variant uppercase tracking-widest font-bold mt-1">
          Secure AI Sentinel
        </p>
      </div>

      {/* New Chat Button */}
      <Button className="mb-8 mx-2 shadow-lg shadow-sentinel-primary/10">
        <Plus className="w-5 h-5 mr-2" />
        <span className="text-sm">New Secure Chat</span>
      </Button>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200",
                isActive
                  ? "text-sentinel-primary font-bold border-r-2 border-sentinel-primary bg-sentinel-surface-container"
                  : "text-sentinel-on-surface-variant hover:text-sentinel-on-surface hover:bg-sentinel-surface-container"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}

        {/* Security Section */}
        <div className="pt-6">
          {securityItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200",
                  isActive
                    ? "text-sentinel-primary font-bold border-r-2 border-sentinel-primary bg-sentinel-surface-container"
                    : "text-sentinel-on-surface-variant hover:text-sentinel-on-surface hover:bg-sentinel-surface-container"
                )
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="mt-auto pt-6 border-t border-outline-variant/10 space-y-1">
        {bottomItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200",
                isActive
                  ? "text-sentinel-primary font-bold border-r-2 border-sentinel-primary bg-sentinel-surface-container"
                  : "text-sentinel-on-surface-variant hover:text-sentinel-on-surface hover:bg-sentinel-surface-container"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}

        {/* User Profile */}
        <div className="flex items-center gap-3 px-3 py-4 mt-4">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-sentinel-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASSg9KweOV4rnkjs3dhncuPLjt81scJkXqiWitrpL03uPhaWSML30H-yLlYGfcOTscOVsmXZ6cML2K0v-sMy0XMGF_KERDybQ9kk09h-uuHSx6x1HNmh24PXLQ22ttqZHx8MF-O9RJfNUcCjpXmV6RIS6WYzPb7HTOMn9u7iz-sgksSwUP8VIU-1aW0PAs_0uqNiMqg3K0f6sOL3FbK2oIF2yHUinl2MNO0AdHSDlkyIX7BYz2eMBrudFAsgiJU5gJdEEUka3MDQw"
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold">Admin</span>
            <span className="text-[10px] text-sentinel-on-surface-variant">Tier 3 Access</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
