import * as React from "react"
import { cn } from "@/lib/utils"

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, onCheckedChange, disabled, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(checked ?? false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked
      setInternalChecked(newChecked)
      onCheckedChange?.(newChecked)
    }

    // Sync internal state with external checked prop
    React.useEffect(() => {
      if (checked !== undefined) {
        setInternalChecked(checked)
      }
    }, [checked])

    return (
      <label className={cn(
        "relative inline-flex h-6 w-11 cursor-pointer items-center",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}>
        <input
          type="checkbox"
          ref={ref}
          checked={internalChecked}
          onChange={handleChange}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <div className={cn(
          "peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 transition-all duration-200 ease-in-out",
          "h-6 w-11 rounded-full bg-slate-800 after:absolute after:left-[2px] after:top-[2px]",
          "after:h-5 after:w-5 after:rounded-full after:border after:border-white/20 after:bg-white after:shadow-sm",
          "after:transition-all after:duration-200 after:ease-in-out",
          "peer-checked:after:translate-x-full peer-focus:after:ring-2 peer-focus:after:ring-primary/50"
        )} />
      </label>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }
