import { Camera, KeyRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSettingsStore } from '@/store/settingsStore'
import { Label } from '@/components/ui/label'

export function ProfileSection() {
  const { profile, updateProfile } = useSettingsStore()

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-headline font-bold text-lg text-sentinel-on-surface">
          Personal Information
        </h3>
        <p className="text-sm text-sentinel-on-surface-variant mt-1">
          This information will be visible to other system editors.
        </p>
      </div>

      <div className="col-span-2 space-y-6">
        {/* Profile Picture Upload */}
        <div className="flex items-center gap-6 p-6 bg-sentinel-surface-container-low rounded-xl">
          <div className="relative group">
            <img
              alt="Profile avatar"
              className="w-24 h-24 rounded-lg object-cover"
              src={profile.avatar}
            />
            <div className="absolute inset-0 bg-sentinel-surface-container-lowest/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg cursor-pointer">
              <Camera className="text-sentinel-primary w-6 h-6" />
            </div>
          </div>

          <div className="space-y-2">
            <Button variant="secondary" type="button">
              Update Photo
            </Button>
            <p className="text-xs text-sentinel-on-surface-variant">
              Recommended: 400x400px, JPG or PNG.
            </p>
          </div>
        </div>

        {/* Name and Email */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
              Full Name
            </Label>
            <Input
              value={profile.name}
              onChange={(e) => updateProfile({ name: e.target.value })}
              className="h-12 bg-sentinel-surface-container-low border-none"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-bold font-headline text-sentinel-on-surface-variant uppercase tracking-wider">
              Email Address
            </Label>
            <Input
              type="email"
              value={profile.email}
              onChange={(e) => updateProfile({ email: e.target.value })}
              className="h-12 bg-sentinel-surface-container-low border-none"
            />
          </div>
        </div>

        {/* Change Password */}
        <div className="pt-4 border-t border-sentinel-outline-variant/10">
          <Button variant="ghost" className="text-sentinel-primary font-bold font-headline text-sm">
            <KeyRound className="w-5 h-5 mr-2" />
            Change Password
          </Button>
        </div>
      </div>
    </section>
  )
}
