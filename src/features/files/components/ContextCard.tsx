import { FileText, Table, File, CheckCircle, Hourglass, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ContextFile } from '@/data/files'

interface ContextCardProps {
  file: ContextFile
}

const statusConfig = {
  redacted: {
    label: 'Redacted',
    color: 'text-tertiary',
    bgColor: 'bg-tertiary/10',
    borderColor: 'border-tertiary/20',
    icon: CheckCircle,
  },
  analyzed: {
    label: 'Analyzed',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20',
    icon: CheckCircle,
  },
  processing: {
    label: 'Processing',
    color: 'text-secondary',
    bgColor: 'bg-secondary-container/50',
    borderColor: 'border-secondary/20',
    icon: Hourglass,
    animated: true,
  },
  rejected: {
    label: 'Rejected',
    color: 'text-error',
    bgColor: 'bg-error/10',
    borderColor: 'border-error/20',
    icon: XCircle,
  },
}

const typeIcons = {
  pdf: FileText,
  csv: Table,
  docx: File,
  json: FileText,
  txt: FileText,
}

export function ContextCard({ file }: ContextCardProps) {
  const status = statusConfig[file.status]
  const TypeIcon = typeIcons[file.type]

  return (
    <div
      className={cn(
        'bg-sentinel-surface-low p-6 rounded-2xl flex flex-col justify-between group hover:bg-sentinel-surface-container transition-all duration-300',
        file.status === 'rejected' && 'border-l-4 border-l-error/50'
      )}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center',
          status.bgColor,
          status.color
        )}>
          <TypeIcon className="w-6 h-6" />
        </div>
        <span className={cn(
          'px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border',
          status.bgColor,
          status.color,
          status.borderColor,
          (status as any).animated && 'animate-pulse'
        )}>
          {status.label}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-headline font-bold mb-2">{file.name}</h3>
        <p className="text-sm text-sentinel-on-surface-variant font-body mb-6">
          {file.description}
        </p>

        {/* Progress or Collaborators */}
        {file.progress !== undefined ? (
          <div className="space-y-2">
            <div className="w-full bg-sentinel-surface-container h-1.5 rounded-full overflow-hidden">
              <div
                className={cn('h-full rounded-full transition-all', status.color)}
                style={{ width: `${file.progress}%` }}
              />
            </div>
            <p className={cn('text-[10px] font-bold', status.color)}>
              {file.status === 'processing' ? `Extracting Entities (${file.progress}%)` : `${file.progress}% Vectorized`}
            </p>
          </div>
        ) : file.collaborators ? (
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {file.collaborators.map((initials, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full bg-sentinel-surface-container-highest border-2 border-sentinel-surface flex items-center justify-center text-[8px] font-bold"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-[10px] text-sentinel-on-surface-variant">Modified {file.modified}</span>
          </div>
        ) : file.violation ? (
          <div className="space-y-3">
            <button className="text-xs text-error font-bold underline underline-offset-4 hover:text-error/80 transition-colors">
              View Violation Report
            </button>
            <p className="text-[10px] text-sentinel-on-surface-variant">{file.violation}</p>
          </div>
        ) : (
          <span className="text-[10px] text-sentinel-on-surface-variant">Modified {file.modified}</span>
        )}
      </div>
    </div>
  )
}
