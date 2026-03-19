import { Conversation } from '@/data/chatHistory'
import { StatusBadge } from './StatusBadge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, MessageSquare, Eye, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

interface ConversationCardProps {
  conversation: Conversation
  onView?: (conversation: Conversation) => void
  onDelete?: (conversationId: string) => void
}

export function ConversationCard({
  conversation,
  onView,
  onDelete,
}: ConversationCardProps) {
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffHours / 24)

    if (diffHours < 1) {
      return 'Just now'
    } else if (diffHours < 24) {
      return `${diffHours}h ago`
    } else if (diffDays < 7) {
      return `${diffDays}d ago`
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-5 hover:border-primary/30 transition-all duration-200 group cursor-pointer">
        <div className="flex items-start justify-between gap-4">
          {/* Left Section - Avatar and Info */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg shadow-primary/20">
              {getInitials(conversation.participants[0]?.name || 'AI')}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Title and Status */}
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-base font-bold font-headline text-sentinel-on-surface truncate">
                  {conversation.title}
                </h3>
                <StatusBadge status={conversation.status} />
              </div>

              {/* Last Message */}
              <p className="text-sm text-sentinel-on-surface-variant line-clamp-1 mb-3">
                {conversation.lastMessage}
              </p>

              {/* Metadata */}
              <div className="flex items-center gap-4 text-xs text-sentinel-on-surface-variant">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatDate(conversation.timestamp)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  <span>{conversation.messageCount} messages</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                onView?.(conversation)
              }}
              className="h-9 w-9"
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                onDelete?.(conversation.id)
              }}
              className="h-9 w-9 hover:bg-error/10 hover:text-error"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
