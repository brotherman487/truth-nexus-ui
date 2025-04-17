
import { useState } from "react";
import { Trophy, ArrowRight, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LeaderboardUser {
  id: number;
  name: string;
  country: string;
  flag: string;
  score: number;
  avatar?: string;
}

const leaderboardData: LeaderboardUser[] = [
  { 
    id: 1, 
    name: "Sarah L.", 
    country: "USA", 
    flag: "🇺🇸", 
    score: 9845 
  },
  { 
    id: 2, 
    name: "Miguel R.", 
    country: "Spain", 
    flag: "🇪🇸", 
    score: 8920 
  },
  { 
    id: 3, 
    name: "Aisha K.", 
    country: "UAE", 
    flag: "🇦🇪", 
    score: 8765 
  },
  { 
    id: 4, 
    name: "Jin W.", 
    country: "South Korea", 
    flag: "🇰🇷", 
    score: 8412 
  },
  { 
    id: 5, 
    name: "You", 
    country: "Canada", 
    flag: "🇨🇦", 
    score: 6234,
    avatar: "user" 
  }
];

const GlobalLeaderboard = () => {
  const [users] = useState<LeaderboardUser[]>(leaderboardData);

  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10 border-b border-border pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy size={18} className="text-yellow-500" />
            <CardTitle className="text-md">Global Leaderboard</CardTitle>
          </div>
          <Button variant="link" className="p-0 h-auto text-accent">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-2">
          {users.map((user, index) => (
            <div 
              key={user.id} 
              className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                user.name === "You" 
                  ? "bg-accent/10 glow-border" 
                  : "hover:bg-white/5 transition-colors"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 text-center font-bold text-sm">
                  {index + 1}
                </span>
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary/70 to-accent/70 flex items-center justify-center">
                  {user.avatar ? <User size={16} className="text-white" /> : user.flag}
                </div>
                <div>
                  <p className="font-medium text-sm">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.country}</p>
                </div>
              </div>
              <div className="font-mono text-sm font-medium">{user.score.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-border pt-3">
        <Button variant="ghost" size="sm" className="w-full text-primary/80 hover:text-primary">
          <span>Challenge Leaders</span>
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GlobalLeaderboard;
