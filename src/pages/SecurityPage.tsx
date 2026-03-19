import { MainLayout } from '@/components/layout/MainLayout'
import { SecuritySummaryCards } from '@/features/security/components/SecuritySummaryCards'
import { RedactionPoliciesTable } from '@/features/security/components/RedactionPoliciesTable'
import { SensitivitySlider } from '@/features/security/components/SensitivitySlider'
import { BlockedKeywordsList } from '@/features/security/components/BlockedKeywordsList'
import { ThreatMeterCard } from '@/features/security/components/ThreatMeterCard'
import { securityRules, blockedKeywords } from '@/data/securityRules'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'

export function SecurityPage() {
  const [rules, setRules] = useState(securityRules)
  const [keywords, setKeywords] = useState(blockedKeywords)
  const [sensitivity, setSensitivity] = useState(50)

  const handleRuleToggle = (ruleId: string) => {
    setRules((prev) =>
      prev.map((rule) =>
        rule.id === ruleId ? { ...rule, status: !rule.status } : rule
      )
    )
  }

  const handleAddKeyword = (keyword: string) => {
    const newKeyword = {
      id: String(keywords.length + 1),
      keyword,
    }
    setKeywords((prev) => [...prev, newKeyword])
  }

  const handleRemoveKeyword = (keywordId: string) => {
    setKeywords((prev) => prev.filter((kw) => kw.id !== keywordId))
  }

  const activeRulesCount = rules.filter((r) => r.status).length

  return (
    <MainLayout title="Security">
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-black font-headline text-sentinel-on-surface">
                Security & Redaction Rules
              </h1>
              <Badge variant="success" className="text-xs">
                Active Mode
              </Badge>
            </div>
            <p className="text-sm text-sentinel-on-surface-variant">
              Configure data protection policies and monitor security posture
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-12 gap-4">
          <SecuritySummaryCards />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Redaction Policies Table */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-4">
              <h2 className="text-lg font-bold font-headline text-sentinel-on-surface mb-1">
                Redaction Policies
              </h2>
              <p className="text-sm text-sentinel-on-surface-variant">
                {activeRulesCount} rules active • {rules.length - activeRulesCount} rules disabled
              </p>
            </div>
            <RedactionPoliciesTable
              rules={rules}
              onRuleToggle={handleRuleToggle}
            />
          </div>

          {/* Right Column - Controls */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <SensitivitySlider
              value={sensitivity}
              onChange={setSensitivity}
            />
            <BlockedKeywordsList
              keywords={keywords}
              onAddKeyword={handleAddKeyword}
              onRemoveKeyword={handleRemoveKeyword}
            />
          </div>
        </div>

        {/* Threat Meter */}
        <ThreatMeterCard
          threatLevel="safe"
          score={94}
          activeThreats={0}
          blockedAttempts={128}
        />
      </div>
    </MainLayout>
  )
}
