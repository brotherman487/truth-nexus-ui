
import { useState } from "react";
import { ArrowUpRight, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeedItem {
  id: number;
  title: string;
  source: string;
  time: string;
  status: "True" | "False" | "Misleading";
  category: string;
}

const feedData: FeedItem[] = [
  {
    id: 1,
    title: "Scientists discover new planet that could support human life",
    source: "Science Daily",
    time: "10 min ago",
    status: "Misleading",
    category: "Science"
  },
  {
    id: 2,
    title: "Global temperatures hit record high for third consecutive month",
    source: "Climate Report",
    time: "1 hour ago",
    status: "True",
    category: "Environment"
  },
  {
    id: 3,
    title: "New study shows coffee extends lifespan by up to 10 years",
    source: "Health Today",
    time: "2 hours ago",
    status: "False",
    category: "Health"
  },
  {
    id: 4,
    title: "Government announces universal basic income starting next month",
    source: "Economic Times",
    time: "3 hours ago",
    status: "False",
    category: "Politics"
  },
  {
    id: 5,
    title: "Electric vehicles now cheaper to produce than gas vehicles",
    source: "Tech Insider",
    time: "5 hours ago",
    status: "True",
    category: "Technology"
  }
];

const MisinformationFeed = () => {
  const [feed] = useState<FeedItem[]>(feedData);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "True":
        return <CheckCircle size={16} className="text-clarity-green" />;
      case "False":
        return <XCircle size={16} className="text-clarity-red" />;
      case "Misleading":
        return <AlertTriangle size={16} className="text-clarity-yellow" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "True":
        return "bg-clarity-green/10 text-clarity-green border-clarity-green/30";
      case "False":
        return "bg-clarity-red/10 text-clarity-red border-clarity-red/30";
      case "Misleading":
        return "bg-clarity-yellow/10 text-clarity-yellow border-clarity-yellow/30";
      default:
        return "";
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md">Live Misinformation Feed</CardTitle>
          <Button variant="link" className="p-0 h-auto text-accent">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
          {feed.map((item) => (
            <div key={item.id} className="glass-dark p-3 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-xs bg-white/5">
                  {item.category}
                </Badge>
                <Badge 
                  variant="outline" 
                  className={`text-xs flex items-center gap-1 ${getStatusClass(item.status)}`}
                >
                  {getStatusIcon(item.status)}
                  {item.status}
                </Badge>
              </div>
              <Link to={`/scan/${item.id}`} className="group">
                <h3 className="font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </Link>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{item.source}</span>
                <span>{item.time}</span>
              </div>
              <div className="mt-2 flex justify-end">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-7 text-xs text-primary/80 hover:text-primary"
                  asChild
                >
                  <Link to={`/scan/${item.id}`}>
                    View Details <ArrowUpRight size={14} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MisinformationFeed;
