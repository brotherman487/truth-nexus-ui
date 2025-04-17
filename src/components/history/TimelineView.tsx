
import { useState } from "react";
import { FileText, Link2, Image, CheckCircle, XCircle, AlertTriangle, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

interface ScanItem {
  id: number;
  title: string;
  date: string;
  type: "text" | "link" | "image";
  status: "True" | "False" | "Misleading";
  content: string;
}

const scanHistory: ScanItem[] = [
  {
    id: 1,
    title: "Scientists discover new planet that could support human life",
    date: "Today, 11:32 AM",
    type: "text",
    status: "Misleading",
    content: "Scientists at NASA announced the discovery of a new exoplanet that has potential to support human life..."
  },
  {
    id: 2,
    title: "Global temperatures hit record high for third consecutive month",
    date: "Yesterday, 3:15 PM",
    type: "link",
    status: "True",
    content: "https://climate-report.org/global-temps-june-2025"
  },
  {
    id: 3,
    title: "New study shows coffee extends lifespan by up to 10 years",
    date: "Apr 15, 2025",
    type: "image",
    status: "False",
    content: "Image: coffee-health-claims.jpg"
  },
  {
    id: 4,
    title: "Government announces universal basic income starting next month",
    date: "Apr 10, 2025",
    type: "text",
    status: "False",
    content: "The government has announced plans to implement a universal basic income program starting..."
  },
  {
    id: 5,
    title: "Electric vehicles now cheaper to produce than gas vehicles",
    date: "Apr 5, 2025",
    type: "link",
    status: "True",
    content: "https://tech-insider.com/ev-production-costs-2025"
  }
];

const TimelineView = () => {
  const [history] = useState<ScanItem[]>(scanHistory);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "text":
        return <FileText size={16} />;
      case "link":
        return <Link2 size={16} />;
      case "image":
        return <Image size={16} />;
      default:
        return null;
    }
  };

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

  const filteredHistory = history.filter(item => {
    if (selectedType !== "all" && item.type !== selectedType) return false;
    if (selectedStatus !== "all" && item.status !== selectedStatus) return false;
    return true;
  });

  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <CardTitle className="text-xl">Your Scan History</CardTitle>
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="h-8 w-[100px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="link">Link</SelectItem>
                  <SelectItem value="image">Image</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="h-8 w-[120px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="True">True</SelectItem>
                  <SelectItem value="False">False</SelectItem>
                  <SelectItem value="Misleading">Misleading</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {filteredHistory.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No results match your current filters.
            </div>
          ) : (
            filteredHistory.map((item) => (
              <Link
                key={item.id}
                to={`/scan/${item.id}`}
                className="block"
              >
                <div className="glass-dark p-4 rounded-xl hover:bg-white/10 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant="outline" 
                      className="text-xs flex items-center gap-1 bg-white/10"
                    >
                      {getTypeIcon(item.type)}
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs flex items-center gap-1 ${getStatusClass(item.status)}`}
                    >
                      {getStatusIcon(item.status)}
                      {item.status}
                    </Badge>
                  </div>
                  
                  <h3 className="font-medium mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                    {item.content}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{item.date}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-7 text-xs text-primary/80 hover:text-primary"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineView;
