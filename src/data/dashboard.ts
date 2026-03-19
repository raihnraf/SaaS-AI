export const dashboardMetrics = {
  totalTokens: "4.2M",
  tokensChange: "+12.4%",
  incidents: 18,
  incidentsNew: 2,
  activeApiKeys: 29,
  totalApiKeys: 42,
  concurrentUsers: 142,
  usersActive: "Active Now",
}

export const usageData = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 70 },
  { day: "Fri", value: 85 },
  { day: "Sat", value: 95 },
  { day: "Sun", value: 60 },
  { day: "Mon", value: 50 },
  { day: "Tue", value: 35 },
  { day: "Wed", value: 65 },
]

export const securityAlerts = [
  {
    id: 1,
    type: "error",
    icon: "gpp_maybe",
    title: "PII Redaction: Social Security Number",
    user: "m.chen@editorial.ai",
    time: "14 mins ago",
    status: "BLOCKED",
  },
  {
    id: 2,
    type: "tertiary",
    icon: "auto_fix",
    title: "Prompt Injection Prevented",
    user: "j.smith@editorial.ai",
    time: "2 hours ago",
    status: "SANITIZED",
  },
  {
    id: 3,
    type: "secondary",
    icon: "policy",
    title: "Policy Bypass Attempt",
    user: "anonymous_api_4",
    time: "5 hours ago",
    status: "FLAGGED",
  },
]

export const activeUsers = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Sr. Editor",
    tokens: "824k",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT_pBvSA-4onG-O_VkRLJPZ21w3ZFGVEguV_V_OxSgFmtMXWRFmHTSAmrgLO8MVOu2L2S9gdu0wEqPDayC1B3JOQtN76oyzmVOuX0lWGJapqmw_TBUdYyJVvhc_t9zByn9FQNLuS0__Mj4jg381AHK9G_tdHn5a1NppC5hB4s5RSoLb4_kUhplmWT0dURzPzEnR41N99Irym2CzAOwEuVITqzcoluaQ7wxFnl7mWois1zVE",
    online: true,
  },
  {
    id: 2,
    name: "Marcus Sterling",
    role: "Content Lead",
    tokens: "612k",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsmNZIXgEqZ-_h5mmhtAA-UlWqhk8PI5GXTNFpUAMUWZWFYDsyjmNpZHWFygAgJR2JfqRBfF4RSnDtsI1dyhahI5D762zco8JcBSViRDETOSX--7yXL5un91cS-UIdEHfikm5gl7UZv8FseOCNXvzwqcaOE58qR0DBfoSAWqKV4cwHsgkybnl4PSnnA7Zq_JvGm0ruKAL2PsKVVOa2D-M-VvljPDbE3KO-NwLlPcSdwUggB0qb3iWfCyMDDo_eVhGdmEigwSEqps4",
    online: true,
  },
  {
    id: 3,
    name: "Tobias Funke",
    role: "Analyst",
    tokens: "440k",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVsmNZIXgEqZ-_h5mmhtAA-UlWqhk8PI5GXTNFpUAMUWZWFYDsyjmNpZHWFygAgJR2JfqRBfF4RSnDtsI1dyhahI5D762zco8JcBSViRDETOSX--7yXL5un91cS-UIdEHfikm5gl7UZv8FseOCNXvzwqcaOE58qR0DBfoSAWqKV4cwHsgkybnl4PSnnA7Zq_JvGm0ruKAL2PsKVVOa2D-M-VvljPDbE3KO-NwLlPcSdwUggB0qb3iWfCyMDDo_eVhGdmEigwSEqps4",
    online: true,
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Researcher",
    tokens: "120k",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmW3WSY2WjbtGoTcisG6phbjwbzmu0CMdtW9FqQq4kzQrdyIa19zZltJO69OjtMRSfA_SfdLF_xHdgmfjHwSGczH2ep90CI8pXICr0cBRxwMryv9M4Y5mFG5BGmVTY5s9daWCHTMZJjDeH-N5eMaKsCHwyirKMBLCHO7BBJCjCN50qQBp8bitV3kWDqFKSzxnKATDGsw4eV9veLcOUHiAnza4x6AukgBdvljUIPgXImfuiVtJUB3PGemwwhn5hbRIz0twdNp5Afg",
    online: false,
  },
]
