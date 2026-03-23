import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface StickyActionBarProps {
  onDiscard?: () => void
  className?: string
}

export function StickyActionBar({ onDiscard, className }: StickyActionBarProps) {
  return (
    <div className={cn(
      'fixed bottom-0 left-64 right-0 p-6 bg-sentinel-background/80 backdrop-blur-xl border-t border-sentinel-outline-variant/10 flex justify-end z-40',
      className
    )}>
      <div className="max-w-5xl w-full flex justify-end gap-4">
        <Button
          type="button"
          variant="ghost"
          onClick={onDiscard}
          className="font-bold font-headline text-sm"
        >
          Discard changes
        </Button>
        <Button
          type="submit"
          className="font-extrabold font-headline text-sm shadow-lg shadow-sentinel-primary/10"
        >
          Save Changes
        </Button>
      </div>
    </div>
  )
}
