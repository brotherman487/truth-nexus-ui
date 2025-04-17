
import { useState } from "react";
import { FileText, Link2, Image, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const QuickScanWidget = () => {
  const [scanInput, setScanInput] = useState("");
  const navigate = useNavigate();
  
  const handleScan = () => {
    if (scanInput.trim()) {
      navigate("/scan", { state: { scanInput } });
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Quick Scan</CardTitle>
        <CardDescription>
          Verify any text, link, or media in seconds
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="text" className="flex items-center gap-2">
              <FileText size={16} /> Text
            </TabsTrigger>
            <TabsTrigger value="link" className="flex items-center gap-2">
              <Link2 size={16} /> Link
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center gap-2">
              <Image size={16} /> Image
            </TabsTrigger>
          </TabsList>
          <TabsContent value="text">
            <Textarea 
              placeholder="Paste or type the text you want to fact-check..." 
              className="mb-4 h-24 resize-none"
              value={scanInput}
              onChange={(e) => setScanInput(e.target.value)}
            />
          </TabsContent>
          <TabsContent value="link">
            <Input 
              placeholder="Enter URL (e.g., https://example.com)" 
              className="mb-4"
              value={scanInput}
              onChange={(e) => setScanInput(e.target.value)}
            />
          </TabsContent>
          <TabsContent value="image">
            <div className="border-2 border-dashed border-border rounded-lg p-6 mb-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex flex-col items-center justify-center gap-2">
                <Image className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG or GIF (max. 5MB)
                </p>
              </div>
              <input type="file" className="hidden" />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full button-glow"
          onClick={handleScan}
        >
          <Sparkles size={16} className="mr-2" /> Fact Check Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuickScanWidget;
