
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import DiscussionForum from "@/components/community/DiscussionForum";
import PrivateMessages from "@/components/community/PrivateMessages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Users } from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("forum");

  return (
    <AppLayout>
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6 gradient-text">Community</h1>
        
        <Tabs defaultValue="forum" onValueChange={setActiveTab} value={activeTab} className="mb-6">
          <TabsList className="grid grid-cols-2 w-[400px]">
            <TabsTrigger value="forum" className="flex items-center gap-2">
              <Users size={16} />
              <span>Discussion Forum</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageCircle size={16} />
              <span>Messages</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="forum">
            <DiscussionForum />
          </TabsContent>
          
          <TabsContent value="messages">
            <PrivateMessages />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Community;
