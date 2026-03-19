import { BlockedKeyword } from '@/data/securityRules'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { X, Plus } from 'lucide-react'
import { useState } from 'react'

interface BlockedKeywordsListProps {
  keywords: BlockedKeyword[]
  onAddKeyword?: (keyword: string) => void
  onRemoveKeyword?: (keywordId: string) => void
}

export function BlockedKeywordsList({
  keywords,
  onAddKeyword,
  onRemoveKeyword,
}: BlockedKeywordsListProps) {
  const [newKeyword, setNewKeyword] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleAddKeyword = () => {
    if (newKeyword.trim()) {
      onAddKeyword?.(newKeyword.trim())
      setNewKeyword('')
      setIsAdding(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddKeyword()
    } else if (e.key === 'Escape') {
      setIsAdding(false)
      setNewKeyword('')
    }
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-bold font-headline text-sentinel-on-surface">
            Blocked Keywords
          </h3>
          <p className="text-xs text-sentinel-on-surface-variant mt-1">
            {keywords.length} keywords monitored
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAdding(true)}
          disabled={isAdding}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add
        </Button>
      </div>

      {/* Add Keyword Input */}
      {isAdding && (
        <div className="mb-4 flex gap-2">
          <Input
            placeholder="Enter keyword..."
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            onKeyDown={handleKeyPress}
            autoFocus
            className="flex-1"
          />
          <Button
            variant="default"
            size="sm"
            onClick={handleAddKeyword}
            disabled={!newKeyword.trim()}
          >
            Add
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setIsAdding(false)
              setNewKeyword('')
            }}
          >
            Cancel
          </Button>
        </div>
      )}

      {/* Keywords List */}
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <Badge
            key={keyword.id}
            variant="error"
            className="px-3 py-1.5 text-xs font-medium flex items-center gap-2 hover:bg-error/20 transition-colors"
          >
            <code className="text-xs">{keyword.keyword}</code>
            <button
              onClick={() => onRemoveKeyword?.(keyword.id)}
              className="ml-1 hover:bg-error/30 rounded-full p-0.5 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
      </div>

      {keywords.length === 0 && (
        <div className="py-8 text-center text-sentinel-on-surface-variant text-sm">
          <p>No blocked keywords configured.</p>
          <p className="text-xs mt-1">Add keywords to monitor sensitive content.</p>
        </div>
      )}
    </Card>
  )
}
