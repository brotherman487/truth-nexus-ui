
import { useEffect, useState } from "react";
import { User } from "lucide-react";

const WelcomeHeader = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-bold">
          {greeting}, <span className="gradient-text">Alex</span>
        </h1>
        <p className="text-muted-foreground">
          Latest insights and misinformation trends
        </p>
      </div>
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-clarity-blue to-clarity-purple flex items-center justify-center shadow-glow-sm">
        <User size={24} className="text-white" />
      </div>
    </div>
  );
};

export default WelcomeHeader;
