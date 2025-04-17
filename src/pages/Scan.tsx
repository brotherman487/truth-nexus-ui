
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import ScanInput from "@/components/scan/ScanInput";
import ScanAnimation from "@/components/scan/ScanAnimation";
import ResultCard from "@/components/scan/ResultCard";

const Scan = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState("");
  
  const handleScan = (scanInput: string, type: string) => {
    setInput(scanInput);
    setInputType(type);
    setIsScanning(true);
    setShowResults(false);
  };
  
  const handleScanComplete = () => {
    setIsScanning(false);
    setShowResults(true);
  };
  
  // Mock result data
  const result = {
    status: "Misleading" as "True" | "False" | "Misleading",
    title: "Claim Analysis",
    content: "Scientists have discovered a new planet that could potentially support human life, but current technology doesn't allow for human travel to this location.",
    sources: [
      { name: "Space Research Institute", url: "#" },
      { name: "Astronomy Journal", url: "#" },
    ],
    confidence: 92,
    date: "April 17, 2025"
  };

  return (
    <AppLayout>
      <div className="container py-6 max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 gradient-text">Verify Content</h1>
        
        <ScanInput onScan={handleScan} isScanning={isScanning} />
        
        {isScanning && (
          <ScanAnimation onComplete={handleScanComplete} />
        )}
        
        {showResults && (
          <ResultCard result={result} />
        )}
      </div>
    </AppLayout>
  );
};

export default Scan;
