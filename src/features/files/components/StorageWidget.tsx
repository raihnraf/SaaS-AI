import { Cloud } from 'lucide-react'
import { storageInfo } from '@/data/files'

export function StorageWidget() {
  return (
    <div className="flex items-center gap-4 bg-sentinel-surface-low p-4 rounded-xl">
      <div className="text-right">
        <p className="text-[10px] text-sentinel-on-surface-variant uppercase tracking-widest font-bold">
          Total Storage
        </p>
        <p className="text-xl font-headline font-bold text-sentinel-primary">
          {storageInfo.used} / {storageInfo.total}
        </p>
      </div>
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sentinel-primary-container text-sentinel-primary">
        <Cloud className="w-6 h-6" />
      </div>
    </div>
  )
}
