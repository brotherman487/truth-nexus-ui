import React from "react";
import { X, User, Flag, Settings as SettingsIcon } from "lucide-react";
import { ProfileData } from "@/hooks/useProfile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import EditProfileForm from "./EditProfileForm";
import { useToast } from "@/hooks/use-toast";
import { useDarkMode } from "@/hooks/useDarkMode";
interface ProfileSidebarProps {
  profile: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isEditing: boolean;
  toggleEditMode: () => void;
}
const ProfileSidebar = ({
  profile,
  updateProfile,
  isOpen,
  onOpenChange,
  isEditing,
  toggleEditMode
}: ProfileSidebarProps) => {
  const {
    toast
  } = useToast();
  const {
    darkMode,
    toggleDarkMode
  } = useDarkMode();
  const handleSettingChange = (setting: keyof ProfileData, value: boolean) => {
    // For darkMode specifically, use our dark mode context
    if (setting === 'darkMode') {
      toggleDarkMode();
    }
    updateProfile({
      [setting]: value
    });
    toast({
      title: "Setting updated",
      description: `Your preference has been saved.`
    });
  };
  return <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold gradient-text">My Profile</SheetTitle>
        </SheetHeader>
        
        {isEditing ? <EditProfileForm profile={profile} onSave={data => {
        updateProfile(data);
        toggleEditMode();
      }} onCancel={toggleEditMode} /> : <div className="glass-card p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-clarity-blue to-clarity-purple flex items-center justify-center shadow-glow-md">
                  <User size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{profile.name}</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-accent rounded bg-amber-400">
                      Truth Seeker
                    </Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Flag size={16} />
                      <span>{profile.country}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="flex items-center gap-1 h-9" onClick={toggleEditMode}>
                <SettingsIcon size={14} />
                <span>Edit</span>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="glass-dark p-3 rounded-xl">
                <p className="text-2xl font-bold gradient-text mb-1">{profile.totalScans}</p>
                <p className="text-sm text-muted-foreground">Total Scans</p>
              </div>
              <div className="glass-dark p-3 rounded-xl">
                <p className="text-2xl font-bold gradient-text mb-1">{profile.accuracy}%</p>
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <div className="glass-dark p-3 rounded-xl">
                <p className="text-2xl font-bold gradient-text mb-1">#{profile.globalRank}</p>
                <p className="text-sm text-muted-foreground">Global Rank</p>
              </div>
            </div>
          </div>}
        
        <div className="glass-card">
          <div className="p-4 pb-2">
            <h2 className="text-lg font-semibold">Settings</h2>
          </div>
          <div className="p-4 pt-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <User size={16} /> 
                  <span>Appearance</span>
                </h3>
                <div className="flex items-center justify-between">
                  <Label htmlFor="dark-mode" className="text-muted-foreground">
                    Dark Mode
                  </Label>
                  <Switch id="dark-mode" checked={darkMode} onCheckedChange={checked => handleSettingChange("darkMode", checked)} />
                </div>
              </div>

              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <User size={16} /> 
                  <span>Notifications</span>
                </h3>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications" className="text-muted-foreground">
                    Push Notifications
                  </Label>
                  <Switch id="notifications" checked={profile.notifications} onCheckedChange={checked => handleSettingChange("notifications", checked)} />
                </div>
              </div>

              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <User size={16} /> 
                  <span>Privacy</span>
                </h3>
                <div className="flex items-center justify-between">
                  <Label htmlFor="profile-privacy" className="text-muted-foreground">
                    Private Profile
                  </Label>
                  <Switch id="profile-privacy" checked={profile.profilePrivacy} onCheckedChange={checked => handleSettingChange("profilePrivacy", checked)} />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="scan-history" className="text-muted-foreground">
                    Public Scan History
                  </Label>
                  <Switch id="scan-history" checked={profile.scanHistory} onCheckedChange={checked => handleSettingChange("scanHistory", checked)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>;
};
export default ProfileSidebar;