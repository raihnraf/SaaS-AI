import { Slider } from '@/components/ui/slider'
import { Card } from '@/components/ui/card'
import { sensitivityLevels } from '@/data/securityRules'
import { Shield } from 'lucide-react'

interface SensitivitySliderProps {
  value?: number
  onChange?: (value: number) => void
}

export function SensitivitySlider({ value = 50, onChange }: SensitivitySliderProps) {
  const getLevel = (val: number) => {
    if (val < 33) return sensitivityLevels[0] // Relaxed
    if (val < 66) return sensitivityLevels[1] // Standard
    return sensitivityLevels[2] // Strict
  }

  const currentLevel = getLevel(value)

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-bold font-headline text-sentinel-on-surface">
            Sensitivity Level
          </h3>
          <p className="text-xs text-sentinel-on-surface-variant">
            {currentLevel.label} Mode
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-sentinel-on-surface-variant font-medium">Strict</span>
          <span className="text-sentinel-on-surface-variant font-medium">Permissive</span>
        </div>

        <Slider
          value={value}
          onValueChange={onChange}
          min={0}
          max={100}
          showGradient={true}
        />

        <div className="mt-6 p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
          <p className="text-sm text-sentinel-on-surface-variant">
            {currentLevel.description}
          </p>
        </div>
      </div>
    </Card>
  )
}
