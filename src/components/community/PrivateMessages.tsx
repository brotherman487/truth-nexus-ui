
import React, { useState } from "react";
import { Send, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  senderId: number;
  text: string;
  timestamp: string;
  read: boolean;
}

interface Conversation {
  id: number;
  user: {
    id: number;
    name: string;
    avatar?: string;
    isOnline: boolean;
    lastSeen?: string;
  };
  lastMessage?: Message;
  unreadCount: number;
}

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 1,
    user: {
      id: 101,
      name: "Sarah Johnson",
      isOnline: true,
    },
    lastMessage: {
      id: 1001,
      senderId: 101,
      text: "Did you see the latest article on AI-generated content?",
      timestamp: "2 min ago",
      read: false,
    },
    unreadCount: 3,
  },
  {
    id: 2,
    user: {
      id: 102,
      name: "Miguel Rivera",
      isOnline: false,
      lastSeen: "23 min ago",
    },
    lastMessage: {
      id: 1002,
      senderId: 102,
      text: "I'll share my findings on that climate data visualization we discussed",
      timestamp: "1 hour ago",
      read: true,
    },
    unreadCount: 0,
  },
  {
    id: 3,
    user: {
      id: 103,
      name: "Dr. Janice Kim",
      isOnline: true,
    },
    lastMessage: {
      id: 1003,
      senderId: 0, // current user
      text: "Thanks for the health resources!",
      timestamp: "Yesterday",
      read: true,
    },
    unreadCount: 0,
  },
  {
    id: 4,
    user: {
      id: 104,
      name: "Alex Thompson",
      isOnline: false,
      lastSeen: "2 days ago",
    },
    lastMessage: {
      id: 1004,
      senderId: 104,
      text: "Let me know what you think about those political fact-checks",
      timestamp: "2 days ago",
      read: true,
    },
    unreadCount: 0,
  },
];

const MOCK_ACTIVE_CHAT_MESSAGES: Message[] = [
  {
    id: 2001,
    senderId: 101,
    text: "Hey there! Have you seen the latest study on climate change data?",
    timestamp: "Yesterday, 2:30 PM",
    read: true,
  },
  {
    id: 2002,
    senderId: 0, // Current user
    text: "Not yet! Could you send me the link?",
    timestamp: "Yesterday, 2:45 PM",
    read: true,
  },
  {
    id: 2003,
    senderId: 101,
    text: "Sure! Here it is: www.climatefacts.org/latest-research",
    timestamp: "Yesterday, 3:00 PM",
    read: true,
  },
  {
    id: 2004,
    senderId: 101,
    text: "I thought you might find it interesting, especially the section about data visualization techniques.",
    timestamp: "Yesterday, 3:01 PM",
    read: true,
  },
  {
    id: 2005,
    senderId: 0, // Current user
    text: "Thanks! I'll take a look at it tonight.",
    timestamp: "Yesterday, 3:15 PM",
    read: true,
  },
  {
    id: 2006,
    senderId: 101,
    text: "Did you see the latest article on AI-generated content? It discusses how to identify AI-written text vs human-written content.",
    timestamp: "2 min ago",
    read: false,
  },
  {
    id: 2007,
    senderId: 101,
    text: "I think it could be really useful for our community discussions.",
    timestamp: "2 min ago",
    read: false,
  },
  {
    id: 2008,
    senderId: 101,
    text: "Let me know what you think when you have a chance to read it!",
    timestamp: "1 min ago",
    read: false,
  },
];

const PrivateMessages: React.FC = () => {
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(MOCK_CONVERSATIONS[0]);
  const [newMessage, setNewMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    // In a real app, this would send the message to an API
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully.",
    });
    
    setNewMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-[calc(100vh-12rem)] overflow-hidden rounded-xl">
      {/* Conversations List */}
      <Card className="w-1/3 max-w-[320px] border-r glass-card">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Messages</CardTitle>
            <Button variant="ghost" size="icon" title="Add new contact">
              <UserPlus size={18} />
            </Button>
          </div>
          <div className="pt-2">
            <Input
              placeholder="Search conversations..."
              className="bg-background/50"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="px-2">
              {MOCK_CONVERSATIONS.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-accent/10 transition-colors ${
                    activeConversation?.id === conversation.id
                      ? "bg-accent/10"
                      : ""
                  }`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10">
                        {conversation.user.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.user.isOnline && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium truncate">
                        {conversation.user.name}
                      </p>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {conversation.lastMessage?.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage?.text}
                    </p>
                  </div>
                  {conversation.unreadCount > 0 && (
                    <Badge className="ml-auto bg-primary h-5 w-5 p-0 flex items-center justify-center">
                      {conversation.unreadCount}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Chat Window */}
      <Card className="flex-1 glass-card flex flex-col">
        {activeConversation ? (
          <>
            {/* Chat Header */}
            <CardHeader className="border-b py-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10">
                    {activeConversation.user.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">
                    {activeConversation.user.name}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {activeConversation.user.isOnline
                      ? "Online"
                      : `Last seen ${activeConversation.user.lastSeen}`}
                  </p>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {MOCK_ACTIVE_CHAT_MESSAGES.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.senderId === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.senderId === 0
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent/10"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs text-right mt-1 opacity-70">
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Write a message..."
                  className="min-h-[2.5rem] resize-none"
                  rows={1}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="h-auto aspect-square"
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="text-center text-muted-foreground">
              <p>Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PrivateMessages;
