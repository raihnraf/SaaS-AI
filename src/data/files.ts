export interface ContextFile {
  id: string
  name: string
  description: string
  type: 'pdf' | 'csv' | 'docx' | 'json' | 'txt'
  status: 'redacted' | 'analyzed' | 'processing' | 'rejected'
  size: string
  modified: string
  collaborators?: string[]
  progress?: number
  violation?: string
}

export const contextFiles: ContextFile[] = [
  {
    id: '1',
    name: 'Q3_Security_Audit.pdf',
    description: 'Internal financial projections and infrastructure risks. 124 pages of sensitive data.',
    type: 'pdf',
    status: 'redacted',
    size: '12.4 MB',
    modified: '2h ago',
    collaborators: ['JD', 'AK'],
  },
  {
    id: '2',
    name: 'User_Behavior_Dataset.csv',
    description: 'Anonymized user telemetry for trend correlation. Securely vectorized into chat context.',
    type: 'csv',
    status: 'analyzed',
    size: '45.2 MB',
    modified: '4h ago',
    progress: 100,
  },
  {
    id: '3',
    name: 'Legal_Brief_2024.docx',
    description: 'Confidential legal brief for ongoing acquisition. AI is currently performing entity extraction.',
    type: 'docx',
    status: 'processing',
    size: '8.1 MB',
    modified: '1h ago',
    progress: 65,
  },
  {
    id: '4',
    name: 'Root_Credentials.json',
    description: 'Upload blocked. Plaintext secrets detected. Policy Sentinel prevents this context attachment.',
    type: 'json',
    status: 'rejected',
    size: '2.3 KB',
    modified: '30m ago',
    violation: 'Plaintext secrets detected',
  },
  {
    id: '5',
    name: 'Marketing_Strategy_Q4.pdf',
    description: 'Q4 marketing initiatives and campaign performance metrics with budget allocations.',
    type: 'pdf',
    status: 'analyzed',
    size: '18.7 MB',
    modified: '1d ago',
    progress: 100,
  },
  {
    id: '6',
    name: 'Employee_Directory.csv',
    description: 'Company-wide contact information with department assignments and access levels.',
    type: 'csv',
    status: 'redacted',
    size: '1.2 MB',
    modified: '3d ago',
    collaborators: ['HR'],
  },
]

export const storageInfo = {
  used: '1.2 GB',
  total: '5.0 GB',
  percentage: 24,
}

export const fileTypes = [
  { label: 'All Types', value: 'all' },
  { label: 'PDF', value: 'pdf' },
  { label: 'CSV', value: 'csv' },
  { label: 'DOCX', value: 'docx' },
  { label: 'JSON', value: 'json' },
  { label: 'TXT', value: 'txt' },
]

export const statusFilters = [
  { label: 'All Status', value: 'all' },
  { label: 'Redacted', value: 'redacted' },
  { label: 'Analyzed', value: 'analyzed' },
  { label: 'Processing', value: 'processing' },
  { label: 'Rejected', value: 'rejected' },
]
