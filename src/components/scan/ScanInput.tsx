
import { useState } from "react";
import { FileText, Link2, Image, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ScanInputProps {
  onScan: (input: string, type: string) => void;
  isScanning: boolean;
}

const ScanInput = ({ onScan, isScanning }: ScanInputProps) => {
  const [activeTab, setActiveTab] = useState("text");
  const [input, setInput] = useState("");

  const handleScan = () => {
    if (input.trim()) {
      onScan(input, activeTab);
    }
  };

  return (
    <Card className="glass-card mb-6">
      <CardHeader className="pb-3">
        <CardTitle>Verify Content</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs 
          defaultValue="text" 
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
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
              className="mb-4 h-32 resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </TabsContent>
          <TabsContent value="link">
            <Input 
              placeholder="Enter URL (e.g., https://example.com)" 
              className="mb-4"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </TabsContent>
          <TabsContent value="image">
            <div className="border-2 border-dashed border-border rounded-lg p-8 mb-4 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex flex-col items-center justify-center gap-2">
                <Image className="h-10 w-10 text-muted-foreground" />
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
          <Button 
            onClick={handleScan}
            disabled={isScanning || !input.trim()}
            className="w-full button-glow"
          >
            <Sparkles size={16} className="mr-2" /> Verify Now
          </Button>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ScanInput;
