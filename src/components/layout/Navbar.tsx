import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Moon, Search, User, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import { useProfile } from "@/hooks/useProfile";
import { useDarkMode } from "@/hooks/useDarkMode";
const Navbar: React.FC = () => {
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(false);
  const {
    profile,
    updateProfile,
    isEditing,
    toggleEditMode
  } = useProfile();
  const {
    darkMode,
    toggleDarkMode
  } = useDarkMode();
  return <>
      <header className="sticky top-0 z-50 w-full flex items-center justify-between py-3 px-4 md:px-6 backdrop-blur-lg bg-background/70 border-b border-border">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl md:text-2xl font-bold gradient-text">
            ClarityX
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Dashboard
          </Link>
          <Link to="/scan" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Scan
          </Link>
          <Link to="/history" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            History
          </Link>
          <Link to="/community" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Community
          </Link>
          
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-destructive text-xs">
              3
            </Badge>
          </Button>
          <Button variant="ghost" size="icon">
            <Search size={20} />
          </Button>
          
          <Button variant="ghost" size="icon" onClick={() => setProfileSidebarOpen(true)}>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-clarity-blue to-clarity-purple flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
          </Button>
        </div>
      </header>
      
      {/* Profile Sidebar */}
      <ProfileSidebar profile={profile} updateProfile={updateProfile} isOpen={profileSidebarOpen} onOpenChange={setProfileSidebarOpen} isEditing={isEditing} toggleEditMode={toggleEditMode} />
    </>;
};
export default Navbar;