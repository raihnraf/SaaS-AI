export interface Conversation {
  id: string
  title: string
  timestamp: string
  status: 'safe' | 'flagged' | 'sanitized'
  participants: {
    name: string
    avatar?: string
    role: 'user' | 'assistant'
  }[]
  messageCount: number
  lastMessage: string
}

export const dateRanges = [
  { id: 'today', label: 'Today' },
  { id: 'week', label: 'This Week' },
  { id: 'month', label: 'This Month' },
  { id: 'quarter', label: 'This Quarter' },
  { id: 'year', label: 'This Year' },
]

export const statusFilters = [
  { id: 'all', label: 'All Statuses' },
  { id: 'safe', label: 'Safe' },
  { id: 'flagged', label: 'Flagged' },
  { id: 'sanitized', label: 'Sanitized' },
]

export const conversations: Conversation[] = [
  {
    id: '1',
    title: 'Quarterly Financial Report Analysis',
    timestamp: '2025-03-19T14:32:00',
    status: 'safe',
    participants: [
      { name: 'Admin User', role: 'user' },
      { name: 'Sentinel AI', role: 'assistant' },
    ],
    messageCount: 12,
    lastMessage: 'Analysis complete. No sensitive data detected in the report.',
  },
  {
    id: '2',
    title: 'Customer Database Migration',
    timestamp: '2025-03-19T11:15:00',
    status: 'flagged',
    participants: [
      { name: 'DevOps Engineer', role: 'user' },
      { name: 'Sentinel AI', role: 'assistant' },
    ],
    messageCount: 8,
    lastMessage: 'Warning: Potential PII detected in migration script.',
  },
  {
    id: '3',
    title: 'API Key Security Review',
    timestamp: '2025-03-18T16:45:00',
    status: 'sanitized',
    participants: [
      { name: 'Security Lead', role: 'user' },
      { name: 'Sentinel AI', role: 'assistant' },
    ],
    messageCount: 15,
    lastMessage: 'API keys have been redacted from the conversation history.',
  },
  {
    id: '4',
    title: 'Employee Onboarding Process',
    timestamp: '2025-03-18T09:20:00',
    status: 'safe',
    participants: [
      { name: 'HR Manager', role: 'user' },
      { name: 'Sentinel AI', role: 'assistant' },
    ],
    messageCount: 6,
    lastMessage: 'Onboarding documentation generated successfully.',
  },
  {
    id: '5',
    title: 'Internal Code Review - Project Phoenix',
    timestamp: '2025-03-17T13:50:00',
    status: 'flagged',
    participants: [
      { name: 'Senior Developer', role: 'user' },
      { name: 'Sentinel AI', role: 'assistant' },
    ],
    messageCount: 20,
    lastMessage: 'Blocked keyword detected: project_phoenix',
  },
  {
    id: '6',
    title: 'System Configuration Backup',
    timestamp: '2025-03-17T10:05:00',
    status: 'safe',
    participants: [
      { name: 'System Admin', role: 'user' },
      { name: 'Sentinel AI', role: 'assistant' },
    ],
    messageCount: 4,
    lastMessage: 'Configuration backup completed successfully.',
  },
  {
    id: '7',
    title: 'Security Incident Response',
    timestamp: '2025-03-16T15:30:00',
    status: 'sanitized',
    participants: [
      { name: 'Incident Responder', role: 'user' },
      { name: 'Sentinel AI', role: 'assistant' },
    ],
    messageCount: 18,
    lastMessage: 'Sensitive incident details have been redacted.',
  },
  {
    id: '8',
    title: 'Product Launch Planning',
    timestamp: '2025-03-16T11:00:00',
    status: 'safe',
    participants: [
      { name: 'Product Manager', role: 'user' },
      { name: 'Sentinel AI', role: 'assistant' },
    ],
    messageCount: 9,
    lastMessage: 'Launch strategy document generated.',
  },
  {
    id: '9',
    title: 'Access Control Review',
    timestamp: '2025-03-15T14:20:00',
    status: 'flagged',
    participants: [
      { name: 'Security Auditor', role: 'user' },
      { name: 'Sentinel AI', role: 'assistant' },
    ],
    messageCount: 11,
    lastMessage: 'Elevated privileges detected in user accounts.',
  },
  {
    id: '10',
    title: 'Data Retention Policy Update',
    timestamp: '2025-03-15T09:45:00',
    status: 'safe',
    participants: [
      { name: 'Compliance Officer', role: 'user' },
      { name: 'Sentinel AI', role: 'assistant' },
    ],
    messageCount: 7,
    lastMessage: 'Policy updated according to GDPR requirements.',
  },
]

export function filterConversations(
  conversations: Conversation[],
  searchQuery: string,
  dateRange: string,
  statusFilter: string
): Conversation[] {
  let filtered = [...conversations]

  // Filter by search query
  if (searchQuery) {
    filtered = filtered.filter(
      (conv) =>
        conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  // Filter by date range (simplified - in production would use actual date comparisons)
  const now = new Date()
  if (dateRange === 'today') {
    filtered = filtered.filter((conv) => {
      const convDate = new Date(conv.timestamp)
      return convDate.toDateString() === now.toDateString()
    })
  } else if (dateRange === 'week') {
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    filtered = filtered.filter((conv) => new Date(conv.timestamp) >= weekAgo)
  } else if (dateRange === 'month') {
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    filtered = filtered.filter((conv) => new Date(conv.timestamp) >= monthAgo)
  }

  // Filter by status
  if (statusFilter !== 'all') {
    filtered = filtered.filter((conv) => conv.status === statusFilter)
  }

  return filtered
}
