import { ChevronRight, Circle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { activeUsers } from '@/data/dashboard'
import { motion } from 'framer-motion'

export function ActiveUsersList() {
  return (
    <Card className="col-span-12 lg:col-span-5 rounded-2xl flex flex-col min-h-[500px]">
      <div className="p-6 border-b border-outline-variant/5">
        <h3 className="text-xl font-bold font-headline">Top AI Contributors</h3>
      </div>
      
      <div className="p-4 space-y-2 flex-1">
        {activeUsers.map((user, index) => (
          <motion.div
            key={user.id}
            className="flex items-center gap-4 p-3 hover:bg-sentinel-surface-container transition-all rounded-xl cursor-pointer group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <Circle
                className={cn(
                  "absolute -bottom-1 -right-1 w-3 h-3 border-2 border-sentinel-surface-container rounded-full",
                  user.online ? "bg-sentinel-tertiary" : "bg-sentinel-on-surface-variant"
                )}
                fill={user.online ? "#3cddc7" : "#c6c6cd"}
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold">{user.name}</h4>
              <p className="text-[10px] text-sentinel-on-surface-variant uppercase font-bold tracking-wider">
                {user.role} • {user.tokens} Tokens
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-sentinel-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-auto p-4">
        <Button variant="secondary" className="w-full py-3 text-xs font-bold hover:brightness-125">
          Manage Directory
        </Button>
      </div>
    </Card>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}
