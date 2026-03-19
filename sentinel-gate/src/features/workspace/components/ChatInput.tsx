import { useState } from 'react'
import { 
  Paperclip, 
  Mic, 
  Send, 
  Lock, 
  Shield,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

interface ChatInputProps {
  onSend?: (message: string) => void
  policy?: string
  version?: string
}

export function ChatInput({ onSend, policy = "Editorial-High", version = "GPT-4 + Sentinel Guard v2.4" }: ChatInputProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if (message.trim() && onSend) {
      onSend(message)
      setMessage('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="w-full px-8 pb-8 pt-4 bg-sentinel-surface/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto">
        {/* Input Container */}
        <div className="bg-sentinel-surface-low border border-outline-variant/20 rounded-2xl p-2 shadow-2xl">
          <div className="flex items-end gap-2 px-4 py-2">
            <Button variant="ghost" size="icon" className="shrink-0">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your secure prompt here..."
              rows={1}
              className="flex-1 bg-transparent border-none focus:ring-0 text-sentinel-on-surface py-2 resize-none max-h-48 scrollbar-hide min-h-[40px]"
            />
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="shrink-0">
                <Mic className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                onClick={handleSubmit}
                disabled={!message.trim()}
                className="rounded-xl shadow-[0_0_15px_rgba(60,215,255,0.4)]"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between mt-1 px-4 py-2 border-t border-outline-variant/5">
            <div className="flex gap-4">
              <Badge variant="default" className="text-[10px] font-bold">
                <Lock className="w-3 h-3 mr-1.5" />
                Encrypted
              </Badge>
              <Badge variant="default" className="text-[10px] font-bold">
                <Shield className="w-3 h-3 mr-1.5" />
                Policy: {policy}
              </Badge>
            </div>
            <span className="text-[10px] text-sentinel-on-surface-variant flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {version}
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[10px] text-sentinel-on-surface-variant mt-3 uppercase tracking-tighter">
          Sentinel Gate may redact data to comply with internal security policies.
        </p>
      </div>
    </div>
  )
}
