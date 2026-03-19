import { Conversation, filterConversations } from '@/data/chatHistory'
import { ConversationCard } from './ConversationCard'
import { motion, AnimatePresence } from 'framer-motion'

interface ConversationListProps {
  conversations: Conversation[]
  searchQuery: string
  dateRange: string
  statusFilter: string
  onView?: (conversation: Conversation) => void
  onDelete?: (conversationId: string) => void
}

export function ConversationList({
  conversations,
  searchQuery,
  dateRange,
  statusFilter,
  onView,
  onDelete,
}: ConversationListProps) {
  const filteredConversations = filterConversations(
    conversations,
    searchQuery,
    dateRange,
    statusFilter
  )

  return (
    <div className="space-y-3">
      <AnimatePresence mode="popLayout">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation, index) => (
            <motion.div
              key={conversation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <ConversationCard
                conversation={conversation}
                onView={onView}
                onDelete={onDelete}
              />
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-surface-container-highest flex items-center justify-center">
              <svg
                className="w-8 h-8 text-sentinel-on-surface-variant"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-sentinel-on-surface mb-2">
              No conversations found
            </h3>
            <p className="text-sm text-sentinel-on-surface-variant">
              {searchQuery
                ? 'Try adjusting your search terms'
                : dateRange !== 'year' || statusFilter !== 'all'
                ? 'Try adjusting your filters'
                : 'Start a new conversation to see it here'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results count */}
      {filteredConversations.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-4"
        >
          <p className="text-xs text-sentinel-on-surface-variant">
            Showing {filteredConversations.length} of {conversations.length} conversations
          </p>
        </motion.div>
      )}
    </div>
  )
}
