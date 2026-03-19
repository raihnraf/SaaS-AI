import { Shield, User, Clock, Copy, RefreshCw, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ChatMessageProps {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
  encrypted?: boolean
  piiClean?: boolean
  memo?: {
    to: string
    subject: string
    body: string
  }
}

export function ChatMessage({
  role,
  content,
  timestamp,
  encrypted,
  piiClean,
  memo,
}: ChatMessageProps) {
  const [copied, setCopied] = useState(false)

  const isAssistant = role === 'assistant'

  const handleCopy = () => {
    navigator.clipboard.writeText(memo ? `${memo.to}\n${memo.subject}\n\n${memo.body}` : content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className={cn(
        "flex gap-6 group",
        isAssistant ? "" : "flex-row-reverse"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Avatar */}
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border",
        isAssistant
          ? "bg-sentinel-primary-container border-sentinel-primary/20"
          : "bg-sentinel-surface-container-highest border-outline-variant/30"
      )}>
        {isAssistant ? (
          <Shield className={cn(
            "w-5 h-5",
            isAssistant ? "text-sentinel-primary" : "text-sentinel-secondary"
          )} fill={isAssistant ? "currentColor" : "none"} />
        ) : (
          <User className="w-5 h-5 text-sentinel-secondary" />
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "flex-1 space-y-4",
        !isAssistant && "text-right"
      )}>
        {/* Header */}
        <div className={cn(
          "flex items-center gap-3",
          !isAssistant && "justify-end"
        )}>
          {!isAssistant && (
            <span className="text-[10px] text-sentinel-on-surface-variant flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {timestamp}
            </span>
          )}
          <span className={cn(
            "text-xs font-bold tracking-widest uppercase font-headline",
            isAssistant ? "text-sentinel-primary" : "text-sentinel-on-surface"
          )}>
            {isAssistant ? "Sentinel AI" : "Administrator"}
          </span>
          {isAssistant && encrypted && (
            <Badge variant="success" className="text-[10px]">
              <Shield className="w-3 h-3 mr-1" />
              Encrypted Channel
            </Badge>
          )}
          {isAssistant && piiClean && (
            <Badge variant="success" className="text-[10px]">
              <Check className="w-3 h-3 mr-1" />
              PII Clean
            </Badge>
          )}
          {isAssistant && !encrypted && !piiClean && (
            <span className="text-[10px] text-sentinel-primary flex items-center gap-2">
              <span className="w-1 h-1 bg-sentinel-primary rounded-full animate-ping" />
              Analyzing...
            </span>
          )}
        </div>

        {/* Message Body */}
        <div className={cn(
          "leading-relaxed text-md p-6 rounded-2xl max-w-[80%]",
          isAssistant
            ? "bg-sentinel-surface-container-low rounded-tl-none"
            : "bg-sentinel-surface-container rounded-tr-none inline-block text-left"
        )}>
          <p className="text-sentinel-on-surface-variant">{content}</p>
          
          {/* Memo Display */}
          {memo && (
            <div className="mt-4 bg-sentinel-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 font-mono text-sm">
              <span className="text-sentinel-on-surface-variant">To: {memo.to}</span><br />
              <span className="text-sentinel-on-surface-variant">Subject: {memo.subject}</span><br /><br />
              {memo.body}
            </div>
          )}
        </div>

        {/* Actions */}
        {isAssistant && memo && (
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="text-[10px]"
            >
              {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
              {copied ? 'Copied!' : 'Copy Memo'}
            </Button>
            <Button variant="ghost" size="sm" className="text-[10px]">
              <RefreshCw className="w-4 h-4 mr-1" />
              Regenerate
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}
