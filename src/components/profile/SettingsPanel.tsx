
import { useState } from "react";
import { Moon, Bell, Lock, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const SettingsPanel = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [profilePrivacy, setProfilePrivacy] = useState(false);
  const [scanHistory, setScanHistory] = useState(true);

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
                checked={darkMode}
                onCheckedChange={setDarkMode}
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
                checked={notifications}
                onCheckedChange={setNotifications}
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
                checked={profilePrivacy}
                onCheckedChange={setProfilePrivacy}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="scan-history" className="text-muted-foreground">
                Public Scan History
              </Label>
              <Switch
                id="scan-history"
                checked={scanHistory}
                onCheckedChange={setScanHistory}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsPanel;
