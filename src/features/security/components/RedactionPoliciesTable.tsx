import { SecurityRule } from '@/data/securityRules'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { EyeOff, Shield, AlertCircle } from 'lucide-react'

interface RedactionPoliciesTableProps {
  rules: SecurityRule[]
  onRuleToggle?: (ruleId: string) => void
}

const typeColors = {
  'Regex': 'bg-secondary/10 text-secondary border border-secondary/20',
  'LLM-based': 'bg-primary/10 text-primary border border-primary/20',
  'Keyword': 'bg-tertiary/10 text-tertiary border border-tertiary/20',
}

const actionIcons = {
  'Mask': EyeOff,
  'Block Prompt': Shield,
  'Notify Admin': AlertCircle,
}

export function RedactionPoliciesTable({ rules, onRuleToggle }: RedactionPoliciesTableProps) {
  return (
    <div className="bg-sentinel-surface-container-low rounded-xl border border-sentinel-outline-variant/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-sentinel-outline-variant/10">
              <th className="text-left py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                Rule Name
              </th>
              <th className="text-left py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                Type
              </th>
              <th className="text-left py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                Action
              </th>
              <th className="text-center py-4 px-6 text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sentinel-outline-variant/10">
            {rules.map((rule) => {
              const ActionIcon = actionIcons[rule.action]
              return (
                <tr
                  key={rule.id}
                  className="hover:bg-sentinel-surface-container transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xl text-sentinel-on-surface-variant">
                        {rule.icon}
                      </span>
                      <span className="text-sm text-sentinel-on-surface font-medium">
                        {rule.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Badge className={cn('border', typeColors[rule.type])}>
                      {rule.type}
                    </Badge>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <ActionIcon className="w-4 h-4 text-sentinel-on-surface-variant" />
                      <span className="text-sm text-sentinel-on-surface font-medium">
                        {rule.action}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-center">
                      <Switch
                        checked={rule.status}
                        onCheckedChange={() => onRuleToggle?.(rule.id)}
                      />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {rules.length === 0 && (
        <div className="py-12 text-center text-sentinel-on-surface-variant">
          <p>No security rules configured.</p>
        </div>
      )}
    </div>
  )
}
