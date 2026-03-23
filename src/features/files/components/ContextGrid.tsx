import { ContextFile } from '@/data/files'
import { ContextCard } from './ContextCard'

interface ContextGridProps {
  files: ContextFile[]
}

export function ContextGrid({ files }: ContextGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {files.map((file) => (
        <ContextCard key={file.id} file={file} />
      ))}
    </div>
  )
}
