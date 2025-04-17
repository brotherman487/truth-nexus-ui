
import { CheckCircle, XCircle, AlertTriangle, Share, Bookmark, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface ResultCardProps {
  result: {
    status: "True" | "False" | "Misleading";
    title: string;
    content: string;
    sources: {
      name: string;
      url: string;
    }[];
    confidence: number;
    date: string;
  };
}

const ResultCard = ({ result }: ResultCardProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "True":
        return <CheckCircle size={20} className="text-clarity-green" />;
      case "False":
        return <XCircle size={20} className="text-clarity-red" />;
      case "Misleading":
        return <AlertTriangle size={20} className="text-clarity-yellow" />;
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

  const getStatusText = (status: string) => {
    switch (status) {
      case "True":
        return "This information appears to be accurate based on our sources.";
      case "False":
        return "This information appears to be false based on our sources.";
      case "Misleading":
        return "This information contains misleading elements that lack proper context.";
      default:
        return "";
    }
  };

  const handleShare = () => {
    toast({
      title: "Shared!",
      description: "The result has been copied to your clipboard",
    });
  };

  const handleSave = () => {
    toast({
      title: "Saved!",
      description: "This result has been saved to your history",
    });
  };

  return (
    <Card className="glass-card animate-fade-in">
      <CardHeader className="pb-3 border-b border-border">
        <div className="flex items-center justify-between">
          <Badge 
            variant="outline" 
            className={`text-sm py-1 px-3 flex items-center gap-2 ${getStatusClass(result.status)}`}
          >
            {getStatusIcon(result.status)}
            {result.status}
          </Badge>
          <div className="text-sm text-muted-foreground">
            {result.date}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4 pb-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold mb-2">{result.title}</h2>
            <p className="text-muted-foreground">{getStatusText(result.status)}</p>
          </div>

          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-sm">{result.content}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Verified against these sources:</h3>
            <div className="space-y-2">
              {result.sources.map((source, index) => (
                <a 
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm">{source.name}</span>
                  <ExternalLink size={14} className="text-primary" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="text-sm">
              <span className="text-muted-foreground">AI Confidence:</span>
              <span className="ml-2 font-medium">{result.confidence}%</span>
            </div>
            <Badge variant="outline" className="bg-primary/10 text-primary">
              AI Verified
            </Badge>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-border pt-4">
        <div className="flex justify-between w-full">
          <Button 
            variant="outline" 
            className="flex-1 mr-2" 
            onClick={handleShare}
          >
            <Share size={16} className="mr-2" /> Share
          </Button>
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={handleSave}
          >
            <Bookmark size={16} className="mr-2" /> Save
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
