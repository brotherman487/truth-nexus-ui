
import { Home, Scan, Clock, Users, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex justify-around items-center py-3 px-2 backdrop-blur-lg bg-background/80 border-t border-border">
      <Link 
        to="/" 
        className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg ${
          isActive("/") 
            ? "text-accent bg-accent/10" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Home size={20} strokeWidth={2} />
        <span className="text-xs mt-1">Home</span>
      </Link>

      <Link 
        to="/scan" 
        className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg ${
          isActive("/scan") 
            ? "text-accent bg-accent/10" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Scan size={20} strokeWidth={2} />
        <span className="text-xs mt-1">Scan</span>
      </Link>

      <Link 
        to="/history" 
        className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg ${
          isActive("/history") 
            ? "text-accent bg-accent/10" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Clock size={20} strokeWidth={2} />
        <span className="text-xs mt-1">History</span>
      </Link>

      <Link 
        to="/community" 
        className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg ${
          isActive("/community") 
            ? "text-accent bg-accent/10" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Users size={20} strokeWidth={2} />
        <span className="text-xs mt-1">Community</span>
      </Link>

      <Link 
        to="/profile" 
        className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg ${
          isActive("/profile") 
            ? "text-accent bg-accent/10" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <User size={20} strokeWidth={2} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </div>
  );
};

export default MobileNavigation;
