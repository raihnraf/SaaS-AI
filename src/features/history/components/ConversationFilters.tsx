import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Calendar, Filter } from 'lucide-react'
import { dateRanges, statusFilters } from '@/data/chatHistory'

interface ConversationFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  dateRange: string
  onDateRangeChange: (range: string) => void
  statusFilter: string
  onStatusFilterChange: (filter: string) => void
}

export function ConversationFilters({
  searchQuery,
  onSearchChange,
  dateRange,
  onDateRangeChange,
  statusFilter,
  onStatusFilterChange,
}: ConversationFiltersProps) {
  return (
    <div className="bg-sentinel-surface-container-low rounded-xl border border-sentinel-outline-variant/10 p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sentinel-on-surface-variant" />
          <Input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Date Range Dropdown */}
        <div className="relative">
          <Button
            variant="outline"
            className="justify-between min-w-[160px]"
          >
            <Calendar className="w-4 h-4 mr-2" />
            {dateRanges.find((r) => r.id === dateRange)?.label || 'Date Range'}
          </Button>
          <select
            value={dateRange}
            onChange={(e) => onDateRangeChange(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          >
            {dateRanges.map((range) => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter Dropdown */}
        <div className="relative">
          <Button
            variant="outline"
            className="justify-between min-w-[160px]"
          >
            <Filter className="w-4 h-4 mr-2" />
            {statusFilters.find((s) => s.id === statusFilter)?.label || 'Status'}
          </Button>
          <select
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          >
            {statusFilters.map((filter) => (
              <option key={filter.id} value={filter.id}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
