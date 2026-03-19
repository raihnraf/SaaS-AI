import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { criticalAlert } from '@/data/vault'
import { motion } from 'framer-motion'

export function CriticalAlert() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 max-w-sm w-full bg-error/20 backdrop-blur-xl border border-error/20 p-4 rounded-xl shadow-2xl flex items-start gap-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="p-2 bg-error/20 rounded-lg">
        <AlertTriangle className="w-5 h-5 text-error" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-sentinel-on-error-container">
          {criticalAlert.title}
        </h4>
        <p className="text-xs text-sentinel-on-error-container opacity-80 mt-1">
          {criticalAlert.description}
        </p>
        <div className="flex gap-4 mt-3">
          <Button variant="link" className="text-error p-0 h-auto text-xs font-bold hover:underline">
            Fix Now
          </Button>
          <Button variant="ghost" className="text-sentinel-on-surface-variant p-0 h-auto text-xs">
            Dismiss
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
