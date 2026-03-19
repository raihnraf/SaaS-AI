import { motion } from 'framer-motion'

interface SecurityStatusProps {
  active?: boolean
  version?: string
}

export function SecurityStatus({ active = true, version = "SENTINEL GUARD ACTIVE" }: SecurityStatusProps) {
  if (!active) return null

  return (
    <motion.div
      className="fixed bottom-10 left-8 z-[60] bg-sentinel-surface-container-highest/90 backdrop-blur-lg border border-sentinel-primary/20 px-4 py-2 rounded-full flex items-center gap-3 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-2 h-2 bg-sentinel-tertiary rounded-full animate-pulse shadow-[0_0_8px_rgba(60,221,199,0.8)]" />
      <span className="text-[10px] font-bold text-sentinel-on-surface tracking-wider font-headline">
        {version}
      </span>
    </motion.div>
  )
}
