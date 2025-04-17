
import { useState, useEffect } from "react";
import { ScanSearch } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ScanAnimationProps {
  onComplete: () => void;
}

const ScanAnimation = ({ onComplete }: ScanAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const duration = 3000; // 3 seconds
  const interval = 30; // 30ms updates
  const steps = duration / interval;
  const increment = 100 / steps;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (progress < 100) {
      timer = setTimeout(() => {
        setProgress(prev => {
          const newProgress = Math.min(prev + increment, 100);
          if (newProgress >= 100) {
            setTimeout(() => onComplete(), 500);
          }
          return newProgress;
        });
      }, interval);
    }
    
    return () => clearTimeout(timer);
  }, [progress, increment, interval, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
        <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
          <ScanSearch size={48} className="text-accent animate-pulse" />
        </div>
        <div className="scan-line"></div>
      </div>
      
      <div className="text-center mb-6 space-y-2">
        <h3 className="text-xl font-semibold">Analyzing content...</h3>
        <p className="text-muted-foreground text-sm">
          Comparing with 15,000+ trusted sources
        </p>
      </div>
      
      <div className="w-full max-w-xs">
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
        <span className="animate-pulse">⬤</span> AI verification in progress
      </div>
    </div>
  );
};

export default ScanAnimation;
