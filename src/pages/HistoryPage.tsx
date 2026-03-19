import { MainLayout } from '@/components/layout/MainLayout'
import { HistoryHeader } from '@/features/history/components/HistoryHeader'
import { ConversationFilters } from '@/features/history/components/ConversationFilters'
import { ConversationList } from '@/features/history/components/ConversationList'
import { conversations } from '@/data/chatHistory'
import { useState } from 'react'
import { Conversation } from '@/data/chatHistory'

export function HistoryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [dateRange, setDateRange] = useState('year')
  const [statusFilter, setStatusFilter] = useState('all')

  const handleView = (conversation: Conversation) => {
    console.log('View conversation:', conversation.id)
    // TODO: Navigate to conversation detail view
  }

  const handleDelete = (conversationId: string) => {
    console.log('Delete conversation:', conversationId)
    // TODO: Implement delete functionality
  }

  return (
    <MainLayout title="History">
      <div className="p-8 space-y-6">
        <HistoryHeader />

        <ConversationFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        <ConversationList
          conversations={conversations}
          searchQuery={searchQuery}
          dateRange={dateRange}
          statusFilter={statusFilter}
          onView={handleView}
          onDelete={handleDelete}
        />
      </div>
    </MainLayout>
  )
}
