import { Search, Filter, Download, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { actionTypes, severityFilters } from '@/data/auditLogs'

interface AuditActionBarProps {
  searchQuery?: string
  actionFilter?: string
  severityFilter?: string
  onSearchChange?: (value: string) => void
  onActionFilterChange?: (value: string) => void
  onSeverityFilterChange?: (value: string) => void
  onExport?: () => void
  onRefresh?: () => void
}

export function AuditActionBar({
  searchQuery = '',
  actionFilter = 'all',
  severityFilter = 'all',
  onSearchChange = () => {},
  onActionFilterChange = () => {},
  onSeverityFilterChange = () => {},
  onExport = () => {},
  onRefresh = () => {},
}: AuditActionBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-4 flex-1 min-w-[300px]">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sentinel-on-surface-variant" />
          <Input
            type="text"
            placeholder="Search logs by user, action, or details..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-10 bg-sentinel-surface-container-low border-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Select value={actionFilter} onValueChange={onActionFilterChange}>
          <SelectTrigger className="w-[180px] h-10 bg-sentinel-surface-container border-none">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {actionTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={severityFilter} onValueChange={onSeverityFilterChange}>
          <SelectTrigger className="w-[140px] h-10 bg-sentinel-surface-container border-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {severityFilters.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant="secondary" size="icon" onClick={onRefresh}>
          <RefreshCw className="w-4 h-4" />
        </Button>

        <Button variant="secondary" onClick={onExport}>
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  )
}
