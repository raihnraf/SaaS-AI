import { useState } from 'react'
import { X } from 'lucide-react'
import { useSettingsStore } from '@/store/settingsStore'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface ToggleSwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label: string
  description: string
}

function ToggleSwitch({ checked, onCheckedChange, label, description }: ToggleSwitchProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-sentinel-surface-container-low rounded-lg">
      <div className="space-y-0.5">
        <p className="text-sm font-bold font-headline text-sentinel-on-surface">{label}</p>
        <p className="text-xs text-sentinel-on-surface-variant">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={cn(
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
          checked ? 'bg-sentinel-primary' : 'bg-sentinel-surface-container-highest'
        )}
      >
        <span
          className={cn(
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
            checked ? 'translate-x-5' : 'translate-x-0'
          )}
        />
      </button>
    </div>
  )
}

export function SecuritySection() {
  const { security, updateSecurity } = useSettingsStore()
  const [keywordInput, setKeywordInput] = useState('')

  const handleAddKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keywordInput.trim()) {
      e.preventDefault()
      updateSecurity({
        blockedKeywords: [...security.blockedKeywords, keywordInput.trim()],
      })
      setKeywordInput('')
    }
  }

  const handleRemoveKeyword = (keyword: string) => {
    updateSecurity({
      blockedKeywords: security.blockedKeywords.filter((k) => k !== keyword),
    })
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-sentinel-outline-variant/10">
      <div>
        <h3 className="font-headline font-bold text-lg text-sentinel-on-surface">
          Security Protocols
        </h3>
        <p className="text-sm text-sentinel-on-surface-variant mt-1">
          Enforce automated redaction and filtering across the editorial platform.
        </p>
      </div>

      <div className="col-span-2 space-y-8">
        {/* Toggles */}
        <div className="space-y-4">
          <ToggleSwitch
            checked={security.autoRedactEmails}
            onCheckedChange={(checked) => updateSecurity({ autoRedactEmails: checked })}
            label="Auto-Redact Emails"
            description="AI automatically masks personal email addresses in drafts."
          />
          <ToggleSwitch
            checked={security.autoRedactPhones}
            onCheckedChange={(checked) => updateSecurity({ autoRedactPhones: checked })}
            label="Auto-Redact Phone Numbers"
            description="Sanitize documents from regional and international formats."
          />
        </div>

        {/* Blocked Keywords */}
        <div className="space-y-3">
          <Label className="text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
            Blocked Keywords
          </Label>
          <div className="bg-sentinel-surface-container-lowest p-3 rounded-md min-h-[100px] flex flex-wrap gap-2 items-start border border-sentinel-outline-variant/10 focus-within:ring-1 focus-within:ring-sentinel-primary/40 transition-all">
            {security.blockedKeywords.map((keyword) => (
              <span
                key={keyword}
                className="flex items-center gap-1.5 px-3 py-1 bg-sentinel-surface-container text-xs font-bold text-sentinel-tertiary rounded border border-sentinel-tertiary/20"
              >
                {keyword}
                <button
                  type="button"
                  onClick={() => handleRemoveKeyword(keyword)}
                  className="hover:text-sentinel-error transition-colors"
                >
                  <X className="w-[14px] h-[14px]" />
                </button>
              </span>
            ))}
            <input
              type="text"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={handleAddKeyword}
              placeholder="Type and press enter..."
              className="flex-1 bg-transparent border-none p-1 text-sm focus:ring-0 outline-none placeholder:text-sentinel-outline-variant"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
