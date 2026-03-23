import { create } from 'zustand'
import { UserProfile, SecuritySettings, AppearanceSettings, defaultProfile, defaultSecurity, defaultAppearance } from '@/data/settings'

interface SettingsState {
  profile: UserProfile
  security: SecuritySettings
  appearance: AppearanceSettings
  updateProfile: (profile: Partial<UserProfile>) => void
  updateSecurity: (security: Partial<SecuritySettings>) => void
  updateAppearance: (appearance: Partial<AppearanceSettings>) => void
  resetToDefaults: () => void
}

export const useSettingsStore = create<SettingsState>((set) => ({
  profile: defaultProfile,
  security: defaultSecurity,
  appearance: defaultAppearance,
  updateProfile: (profile) =>
    set((state) => ({
      profile: { ...state.profile, ...profile },
    })),
  updateSecurity: (security) =>
    set((state) => ({
      security: { ...state.security, ...security },
    })),
  updateAppearance: (appearance) =>
    set((state) => ({
      appearance: { ...state.appearance, ...appearance },
    })),
  resetToDefaults: () =>
    set({
      profile: defaultProfile,
      security: defaultSecurity,
      appearance: defaultAppearance,
    }),
}))
