export interface UserProfile {
  name: string
  email: string
  avatar: string
  role: string
}

export interface SecuritySettings {
  autoRedactEmails: boolean
  autoRedactPhones: boolean
  blockedKeywords: string[]
}

export interface AppearanceSettings {
  theme: 'dark' | 'light' | 'system'
}

export const defaultProfile: UserProfile = {
  name: 'Alexander Sterling',
  email: 'sterling@sentinel.ai',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByMWsC75-g9kfCI_Jd_QkRzEYEyfBIX0NgJBSr3FP3hUGsK8oOpYnFASm1tpeuBVBFgL1gYj5RnzYuml4EEJQePK6_m-RisQtVdqrF3BWozkDcnvnaP2MOgAaU8V721diu1tlAO42TdV0L3nX36Ukt260B8_dthV0oTRzbntcEPgndbwxCrYjnrbgwxmCECiht3pDt22BsS9v71FHsASxSRXSdYWSyV7s_mCz9y7YxGrbiPEeXnV7jyzvKHELeHQY5C9pxrU-OxP0',
  role: 'Admin',
}

export const defaultSecurity: SecuritySettings = {
  autoRedactEmails: true,
  autoRedactPhones: false,
  blockedKeywords: ['Confidential', 'Internal Only'],
}

export const defaultAppearance: AppearanceSettings = {
  theme: 'dark',
}
