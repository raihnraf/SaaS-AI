export interface AuditLog {
  id: string
  timestamp: string
  user: string
  action: string
  resource: string
  severity: 'info' | 'warning' | 'error' | 'critical'
  status: 'success' | 'blocked' | 'sanitized' | 'flagged'
  details: string
  ipAddress: string
}

export const auditLogs: AuditLog[] = [
  {
    id: '1',
    timestamp: '2024-03-19 14:32:15',
    user: 'm.chen@editorial.ai',
    action: 'FILE_UPLOAD',
    resource: 'Q3_Financial_Report.pdf',
    severity: 'warning',
    status: 'blocked',
    details: 'PII detected: Social Security Number pattern found on page 12',
    ipAddress: '192.168.1.45',
  },
  {
    id: '2',
    timestamp: '2024-03-19 14:28:42',
    user: 'j.smith@editorial.ai',
    action: 'CHAT_SESSION',
    resource: 'Workspace Session #4521',
    severity: 'info',
    status: 'success',
    details: 'New secure chat session initiated with 3 context files',
    ipAddress: '192.168.1.32',
  },
  {
    id: '3',
    timestamp: '2024-03-19 13:45:18',
    user: 'anonymous_api_4',
    action: 'API_REQUEST',
    resource: '/api/v1/generate',
    severity: 'error',
    status: 'blocked',
    details: 'Prompt injection attempt detected and neutralized',
    ipAddress: '10.0.0.128',
  },
  {
    id: '4',
    timestamp: '2024-03-19 13:12:05',
    user: 'e.rodriguez@editorial.ai',
    action: 'FILE_ANALYSIS',
    resource: 'Marketing_Strategy_Q4.pdf',
    severity: 'info',
    status: 'sanitized',
    details: 'Document processed with 2 email addresses redacted',
    ipAddress: '192.168.1.67',
  },
  {
    id: '5',
    timestamp: '2024-03-19 12:58:33',
    user: 't.funke@editorial.ai',
    action: 'POLICY_CHANGE',
    resource: 'Security Policy v2.3',
    severity: 'critical',
    status: 'flagged',
    details: 'Admin policy modification requires secondary approval',
    ipAddress: '192.168.1.89',
  },
  {
    id: '6',
    timestamp: '2024-03-19 12:30:21',
    user: 's.jenkins@editorial.ai',
    action: 'EXPORT_DATA',
    resource: 'Audit_Logs_March.csv',
    severity: 'info',
    status: 'success',
    details: 'Data export completed: 1,247 records',
    ipAddress: '192.168.1.54',
  },
  {
    id: '7',
    timestamp: '2024-03-19 11:45:09',
    user: 'm.chen@editorial.ai',
    action: 'API_KEY_GENERATED',
    resource: 'Production API Key #8821',
    severity: 'warning',
    status: 'success',
    details: 'New API key created with read-only permissions',
    ipAddress: '192.168.1.45',
  },
  {
    id: '8',
    timestamp: '2024-03-19 11:22:47',
    user: 'external_contractor_7',
    action: 'UNAUTHORIZED_ACCESS',
    resource: '/admin/settings',
    severity: 'critical',
    status: 'blocked',
    details: 'Access denied: Insufficient privileges for admin endpoint',
    ipAddress: '203.0.113.42',
  },
]

export const severityColors = {
  info: 'text-sentinel-secondary',
  warning: 'text-amber-400',
  error: 'text-sentinel-error',
  critical: 'text-red-500',
}

export const statusColors = {
  success: 'bg-sentinel-tertiary/10 text-sentinel-tertiary border-sentinel-tertiary/20',
  blocked: 'bg-sentinel-error/10 text-sentinel-error border-sentinel-error/20',
  sanitized: 'bg-sentinel-primary/10 text-sentinel-primary border-sentinel-primary/20',
  flagged: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
}

export const actionTypes = [
  { label: 'All Actions', value: 'all' },
  { label: 'File Upload', value: 'FILE_UPLOAD' },
  { label: 'Chat Session', value: 'CHAT_SESSION' },
  { label: 'API Request', value: 'API_REQUEST' },
  { label: 'File Analysis', value: 'FILE_ANALYSIS' },
  { label: 'Policy Change', value: 'POLICY_CHANGE' },
  { label: 'Export Data', value: 'EXPORT_DATA' },
  { label: 'API Key', value: 'API_KEY_GENERATED' },
  { label: 'Unauthorized', value: 'UNAUTHORIZED_ACCESS' },
]

export const severityFilters = [
  { label: 'All Severities', value: 'all' },
  { label: 'Info', value: 'info' },
  { label: 'Warning', value: 'warning' },
  { label: 'Error', value: 'error' },
  { label: 'Critical', value: 'critical' },
]
