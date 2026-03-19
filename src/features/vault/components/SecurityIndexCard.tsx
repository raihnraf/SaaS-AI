import { Verified } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { securityIndex } from '@/data/vault'
import { motion } from 'framer-motion'

export function SecurityIndexCard() {
  return (
    <Card className="col-span-12 lg:col-span-7 bg-sentinel-surface-low p-8 rounded-2xl flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-bold text-sentinel-on-surface mb-2">
          Vault Security Index
        </h3>
        <p className="text-xs text-sentinel-on-surface-variant">
          Real-time entropy and exposure monitoring
        </p>
      </div>

      <div className="my-8 flex items-center justify-between gap-10">
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sentinel-on-surface-variant">
              Entropy Score
            </span>
            <span className="text-[10px] font-bold text-sentinel-tertiary">
              {securityIndex.entropyRating}
            </span>
          </div>
          <div className="h-1 bg-sentinel-surface-container rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-sentinel-tertiary"
              initial={{ width: 0 }}
              animate={{ width: `${securityIndex.entropyScore}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sentinel-on-surface-variant">
              Exposure Risk
            </span>
            <span className="text-[10px] font-bold text-sentinel-primary">
              {securityIndex.exposureRating}
            </span>
          </div>
          <div className="h-1 bg-sentinel-surface-container rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-sentinel-primary"
              initial={{ width: 0 }}
              animate={{ width: `${securityIndex.exposureRisk}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="flex items-center gap-4 bg-sentinel-surface-container-lowest/50 p-4 rounded-xl border border-sentinel-primary/5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Verified className="w-8 h-8 text-sentinel-primary" />
        <div className="text-[11px] leading-snug">
          <span className="text-sentinel-on-surface font-bold">
            Sentinel Protocol {securityIndex.protocolVersion} Active.
          </span>
          <span className="text-sentinel-on-surface-variant">
            {' '}Automated key rotation is scheduled for OpenAI in {securityIndex.nextRotation}. No manual action required.
          </span>
        </div>
      </motion.div>
    </Card>
  )
}
