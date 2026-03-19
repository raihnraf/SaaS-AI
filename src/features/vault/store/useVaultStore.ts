import { create } from 'zustand'

interface Provider {
  id: string
  name: string
  key: string
  status: 'active' | 'error' | 'inactive'
  usage24h: number
  logo: string
}

interface VaultState {
  environment: 'dev' | 'staging' | 'production'
  providers: Provider[]
  setEnvironment: (env: 'dev' | 'staging' | 'production') => void
  updateProvider: (id: string, updates: Partial<Provider>) => void
}

export const useVaultStore = create<VaultState>((set) => ({
  environment: 'production',
  providers: [],
  setEnvironment: (env) => set({ environment: env }),
  updateProvider: (id, updates) =>
    set((state) => ({
      providers: state.providers.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    })),
}))
