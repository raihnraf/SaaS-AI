import { create } from 'zustand'

interface Message {
  id: number
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

interface ChatState {
  messages: Message[]
  isLoading: boolean
  policy: string
  addMessage: (message: Message) => void
  setLoading: (loading: boolean) => void
  clearChat: () => void
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isLoading: false,
  policy: 'Editorial-High',
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setLoading: (loading) => set({ isLoading: loading }),
  clearChat: () => set({ messages: [] }),
}))
