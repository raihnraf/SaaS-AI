import { Shield } from 'lucide-react'
import { useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { SecurityStatus } from './SecurityStatus'
import { useChatStore } from '../store/useChatStore'
import { chatMessages as initialMessages } from '@/data/workspace'
import { motion } from 'framer-motion'

export function ChatCanvas() {
  const { messages, addMessage, setLoading, isLoading } = useChatStore()

  // Initialize with mock messages
  useEffect(() => {
    if (messages.length === 0) {
      initialMessages.forEach((msg) => {
        addMessage(msg as any)
      })
    }
  }, [])

  const handleSend = async (content: string) => {
    // Add user message
    const userMessage = {
      id: Date.now(),
      role: 'user' as const,
      content,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
    }
    addMessage(userMessage)
    setLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant' as const,
        content: "I've received your secure message. Processing with encryption and PII detection enabled. How else can I assist?",
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
        encrypted: true,
        piiClean: true,
      }
      addMessage(aiMessage)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="flex-1 overflow-y-auto px-8 py-12 flex flex-col items-center bg-sentinel-surface">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        {/* Messages */}
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            role={message.role}
            content={message.content}
            timestamp={message.timestamp}
            encrypted={message.encrypted}
            piiClean={message.piiClean}
            memo={message.memo}
          />
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <motion.div
            className="flex gap-6 group opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-10 h-10 rounded-lg bg-sentinel-primary-container flex items-center justify-center shrink-0 border border-sentinel-primary/20">
              <Shield className="w-5 h-5 text-sentinel-primary animate-pulse" fill="currentColor" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest text-sentinel-primary uppercase font-headline">
                  Sentinel AI
                </span>
                <span className="text-[10px] text-sentinel-primary flex items-center gap-2">
                  <span className="w-1 h-1 bg-sentinel-primary rounded-full animate-ping" />
                  Analyzing prompt...
                </span>
              </div>
              <div className="flex gap-1 py-2">
                <div className="w-2 h-2 bg-sentinel-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-sentinel-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-sentinel-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} />

      {/* Security Status Badge */}
      <SecurityStatus />
    </div>
  )
}
