
import { Moon, Bell, Lock, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ProfileData } from "@/hooks/useProfile";
import { useToast } from "@/hooks/use-toast";

interface SettingsPanelProps {
  profile: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
}

const SettingsPanel = ({ profile, updateProfile }: SettingsPanelProps) => {
  const { toast } = useToast();

  const handleSettingChange = (setting: keyof ProfileData, value: boolean) => {
    updateProfile({ [setting]: value });
    
    // Show toast notification
    toast({
      title: "Setting updated",
      description: `Your preference has been saved.`,
    });
  };

  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <Moon size={16} /> 
              <span>Appearance</span>
            </h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="text-muted-foreground">
                Dark Mode
              </Label>
              <Switch
                id="dark-mode"
                checked={profile.darkMode}
                onCheckedChange={(checked) => handleSettingChange("darkMode", checked)}
              />
            </div>
          </div>

          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <Bell size={16} /> 
              <span>Notifications</span>
            </h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="text-muted-foreground">
                Push Notifications
              </Label>
              <Switch
                id="notifications"
                checked={profile.notifications}
                onCheckedChange={(checked) => handleSettingChange("notifications", checked)}
              />
            </div>
          </div>

          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <Lock size={16} /> 
              <span>Privacy</span>
            </h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="profile-privacy" className="text-muted-foreground">
                Private Profile
              </Label>
              <Switch
                id="profile-privacy"
                checked={profile.profilePrivacy}
                onCheckedChange={(checked) => handleSettingChange("profilePrivacy", checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="scan-history" className="text-muted-foreground">
                Public Scan History
              </Label>
              <Switch
                id="scan-history"
                checked={profile.scanHistory}
                onCheckedChange={(checked) => handleSettingChange("scanHistory", checked)}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsPanel;
