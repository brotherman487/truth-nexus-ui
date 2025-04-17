
import { User, Settings, Flag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProfileHeader = () => {
  return (
    <div className="glass-card p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-clarity-blue to-clarity-purple flex items-center justify-center shadow-glow-md">
            <User size={32} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Alex Thompson</h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="bg-accent/20 text-accent">
                Truth Seeker
              </Badge>
              <div className="flex items-center gap-1 text-sm">
                <Flag size={16} />
                <span>Canada</span>
              </div>
            </div>
          </div>
        </div>
        <Button size="sm" variant="outline" className="flex items-center gap-1 h-9">
          <Settings size={14} />
          <span>Edit Profile</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="glass-dark p-3 rounded-xl">
          <p className="text-2xl font-bold gradient-text mb-1">248</p>
          <p className="text-sm text-muted-foreground">Total Scans</p>
        </div>
        <div className="glass-dark p-3 rounded-xl">
          <p className="text-2xl font-bold gradient-text mb-1">92%</p>
          <p className="text-sm text-muted-foreground">Accuracy</p>
        </div>
        <div className="glass-dark p-3 rounded-xl">
          <p className="text-2xl font-bold gradient-text mb-1">#124</p>
          <p className="text-sm text-muted-foreground">Global Rank</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
