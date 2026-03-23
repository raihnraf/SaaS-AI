import { Filter, SortDesc, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface ActionBarProps {
  filterValue?: string
  sortValue?: string
  onFilterChange?: (value: string) => void
  onSortChange?: (value: string) => void
  onUpload?: () => void
}

export function ActionBar({
  filterValue = 'all',
  sortValue = 'latest',
  onFilterChange = () => {},
  onSortChange = () => {},
  onUpload = () => {},
}: ActionBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div className="flex gap-2">
        <Select value={filterValue} onValueChange={onFilterChange}>
          <SelectTrigger className="w-[140px] h-10 bg-sentinel-surface-container border-none">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="pdf">PDF</SelectItem>
            <SelectItem value="csv">CSV</SelectItem>
            <SelectItem value="docx">DOCX</SelectItem>
            <SelectItem value="json">JSON</SelectItem>
            <SelectItem value="txt">TXT</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortValue} onValueChange={onSortChange}>
          <SelectTrigger className="w-[120px] h-10 bg-sentinel-surface-container border-none">
            <SortDesc className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="size">Size</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        onClick={onUpload}
        className="flex items-center gap-3 bg-sentinel-surface-container-highest border border-sentinel-primary/20 hover:border-sentinel-primary/60 h-11 px-6"
      >
        <div className="w-8 h-8 rounded-full bg-sentinel-primary/10 flex items-center justify-center text-sentinel-primary group-hover:bg-sentinel-primary group-hover:text-sentinel-on-primary transition-all">
          <Plus className="w-5 h-5" />
        </div>
        <span className="font-bold text-sm">Attach New Context Source</span>
      </Button>
    </div>
  )
}
