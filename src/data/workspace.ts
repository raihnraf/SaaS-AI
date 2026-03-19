export const chatMessages = [
  {
    id: 1,
    role: "assistant",
    content: "Welcome, Administrator. I am monitoring this session for PII, security leaks, and policy violations. How can I assist with your secure editorial tasks today?",
    timestamp: "14:00 PM",
    encrypted: true,
    piiClean: true,
  },
  {
    id: 2,
    role: "user",
    content: "Draft a memo regarding the upcoming server migration for the Redacted: Department-ID. Ensure you don't include any private IP addresses or employee names like John Smith.",
    timestamp: "14:02 PM",
  },
  {
    id: 3,
    role: "assistant",
    content: "I have drafted the migration memo. Note that 2 instances of sensitive data were automatically redacted during processing.",
    timestamp: "14:02 PM",
    encrypted: true,
    piiClean: true,
    memo: {
      to: "All Staff",
      subject: "Infrastructure Update",
      body: "Effective next Monday, our primary database clusters located at [REDACTED_IP] will be migrated to the new secure vault. Project lead [REDACTED_NAME] will oversee the transition.",
    },
  },
]

export const chatPolicy = {
  name: "Editorial-High",
  version: "GPT-4 + Sentinel Guard v2.4",
  encrypted: true,
}
