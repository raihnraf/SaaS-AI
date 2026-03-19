import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { usageData } from '@/data/dashboard'
import { motion } from 'framer-motion'

export function UsageChart() {
  return (
    <Card className="col-span-12 lg:col-span-8 rounded-2xl overflow-hidden flex flex-col h-[400px]">
      <div className="p-6 flex justify-between items-center border-b border-outline-variant/5">
        <h3 className="text-xl font-bold font-headline">Token Velocity &amp; Usage</h3>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" className="text-[10px]">
            7 Days
          </Button>
          <Button size="sm" className="text-[10px]">
            30 Days
          </Button>
        </div>
      </div>
      <div className="flex-1 p-8 flex items-end justify-between gap-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-sentinel-primary/5 to-transparent" />
        
        {/* Chart bars */}
        <div className="w-full h-full flex items-end gap-3 z-10">
          {usageData.map((item, index) => (
            <motion.div
              key={index}
              className="flex-1 rounded-t-lg transition-all hover:bg-sentinel-primary/40 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              style={{ 
                height: `${item.value}%`,
                backgroundColor: index === 5 
                  ? 'rgba(60, 215, 255, 0.4)' 
                  : 'rgba(60, 215, 255, 0.2)'
              }}
              whileHover={{ 
                backgroundColor: index === 5 
                  ? 'rgba(60, 215, 255, 0.6)' 
                  : 'rgba(60, 215, 255, 0.4)'
              }}
            >
              {index === 5 && (
                <div className="w-full h-0.5 bg-sentinel-primary absolute -top-0.5" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  )
}
