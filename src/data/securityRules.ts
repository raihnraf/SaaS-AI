export interface SecurityRule {
  id: string;
  name: string;
  type: 'Regex' | 'LLM-based' | 'Keyword';
  action: 'Mask' | 'Block Prompt' | 'Notify Admin';
  status: boolean;
  icon: string;
}

export interface BlockedKeyword {
  id: string;
  keyword: string;
}

export const securityRules: SecurityRule[] = [
  {
    id: '1',
    name: 'Email Address Masking',
    type: 'Regex',
    action: 'Mask',
    status: true,
    icon: 'alternate_email',
  },
  {
    id: '2',
    name: 'SSN Redaction',
    type: 'LLM-based',
    action: 'Mask',
    status: true,
    icon: 'fingerprint',
  },
  {
    id: '3',
    name: 'API Key Detection',
    type: 'Keyword',
    action: 'Block Prompt',
    status: true,
    icon: 'key',
  },
  {
    id: '4',
    name: 'Internal Project Codes',
    type: 'LLM-based',
    action: 'Notify Admin',
    status: false,
    icon: 'code',
  },
  {
    id: '5',
    name: 'Credit Card Numbers',
    type: 'Regex',
    action: 'Mask',
    status: true,
    icon: 'credit_card',
  },
  {
    id: '6',
    name: 'Phone Number Redaction',
    type: 'Regex',
    action: 'Mask',
    status: true,
    icon: 'phone',
  },
];

export const blockedKeywords: BlockedKeyword[] = [
  { id: '1', keyword: 'project_phoenix' },
  { id: '2', keyword: 'acquisition_q3' },
  { id: '3', keyword: 'root_pass' },
  { id: '4', keyword: 'salary_export' },
  { id: '5', keyword: 'confidential_memo' },
  { id: '6', keyword: 'internal_only' },
];

export const securityMetrics = {
  activeRules: 14,
  rulesChange: '+2 this week',
  interceptedPrompts: 128,
  trustScore: 94,
  trustStatus: 'Protected',
};

export const sensitivityLevels = [
  { id: 'relaxed', label: 'Relaxed', description: 'Minimal filtering' },
  { id: 'standard', label: 'Standard', description: 'Balanced protection' },
  { id: 'strict', label: 'Strict', description: 'Maximum security' },
];
