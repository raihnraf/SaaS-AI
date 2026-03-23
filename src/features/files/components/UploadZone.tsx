import { UploadCloud, FileUp, HardDrive } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface UploadZoneProps {
  onFilesSelected?: (files: FileList) => void
}

export function UploadZone({ onFilesSelected }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (onFilesSelected && e.dataTransfer.files) {
      onFilesSelected(e.dataTransfer.files)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onFilesSelected && e.target.files) {
      onFilesSelected(e.target.files)
    }
  }

  return (
    <section
      className={cn(
        'mt-12 p-12 border-2 border-dashed border-sentinel-outline-variant/30 rounded-3xl bg-sentinel-surface-low flex flex-col items-center justify-center text-center group transition-all cursor-pointer',
        isDragging
          ? 'border-sentinel-primary/60 bg-sentinel-surface-container'
          : 'hover:border-sentinel-primary/40'
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="w-20 h-20 bg-sentinel-surface-container-low rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <UploadCloud
          className={cn(
            'w-10 h-10 text-sentinel-on-surface-variant group-hover:text-sentinel-primary transition-colors',
            isDragging && 'text-sentinel-primary'
          )}
        />
      </div>
      <h4 className="text-2xl font-headline font-bold mb-2">
        Drop local files or paste data
      </h4>
      <p className="text-sentinel-on-surface-variant font-body mb-8">
        PDF, CSV, JSON, TXT or DOCX (Max 500MB per file)
      </p>
      <div className="flex gap-4">
        <Button className="h-11 px-8">
          <FileUp className="w-4 h-4 mr-2" />
          Select Files
        </Button>
        <Button variant="secondary" className="h-11 px-8">
          <HardDrive className="w-4 h-4 mr-2" />
          Connect Drive
        </Button>
      </div>
      <input
        type="file"
        className="hidden"
        id="file-upload"
        multiple
        onChange={handleFileInput}
      />
    </section>
  )
}
