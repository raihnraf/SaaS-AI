import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'min' | 'max' | 'value'> {
  value?: number
  onValueChange?: (value: number) => void
  min?: number
  max?: number
  showGradient?: boolean
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, value, onValueChange, min = 0, max = 100, showGradient = true, disabled, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value ?? 50)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      setInternalValue(newValue)
      onValueChange?.(newValue)
    }

    // Sync internal state with external value prop
    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value)
      }
    }, [value])

    return (
      <div className={cn("relative w-full", className)}>
        <input
          type="range"
          ref={ref}
          value={internalValue}
          min={min}
          max={max}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            "w-full h-2 rounded-full appearance-none cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
            disabled && "cursor-not-allowed opacity-50",
            // Track background with gradient
            showGradient && "bg-gradient-to-r from-primary via-secondary to-tertiary",
            !showGradient && "bg-surface-container-highest"
          )}
          style={{
            background: showGradient
              ? `linear-gradient(to right, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-tertiary) 100%)`
              : undefined,
          }}
          {...props}
        />
        {/* Custom thumb styling via CSS-in-JS */}
        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(255, 255, 255, 0.1);
            transition: all 0.2s ease;
          }
          input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 6px rgba(255, 255, 255, 0.1);
          }
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(255, 255, 255, 0.1);
            border: none;
            transition: all 0.2s ease;
          }
          input[type="range"]::-moz-range-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 6px rgba(255, 255, 255, 0.1);
          }
          input[type="range"]:disabled::-webkit-slider-thumb {
            cursor: not-allowed;
            opacity: 0.5;
          }
          input[type="range"]:disabled::-moz-range-thumb {
            cursor: not-allowed;
            opacity: 0.5;
          }
        `}</style>
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }
