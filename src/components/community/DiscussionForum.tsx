
import { MessageSquare, Heart, MessageCircle, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ThreadItem {
  id: number;
  title: string;
  author: {
    name: string;
    image?: string;
    isVerified: boolean;
    isTopContributor: boolean;
  };
  tags: string[];
  likes: number;
  comments: number;
  timeAgo: string;
}

const threads: ThreadItem[] = [
  {
    id: 1,
    title: "Debunking the latest viral social media conspiracy about climate data",
    author: {
      name: "Sarah L.",
      isVerified: true,
      isTopContributor: true,
    },
    tags: ["Climate", "Science"],
    likes: 423,
    comments: 89,
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    title: "How to identify AI-generated images in your news feed",
    author: {
      name: "Miguel R.",
      isVerified: true,
      isTopContributor: false,
    },
    tags: ["AI", "Tech"],
    likes: 287,
    comments: 43,
    timeAgo: "5 hours ago"
  },
  {
    id: 3,
    title: "Discussion: Political claims from last night's debate",
    author: {
      name: "Alex T.",
      isVerified: false,
      isTopContributor: false,
    },
    tags: ["Politics"],
    likes: 156,
    comments: 231,
    timeAgo: "12 hours ago"
  },
  {
    id: 4,
    title: "Health misinformation trends in 2025",
    author: {
      name: "Dr. Janice K.",
      isVerified: true,
      isTopContributor: true,
    },
    tags: ["Health", "Science"],
    likes: 509,
    comments: 72,
    timeAgo: "1 day ago"
  },
  {
    id: 5,
    title: "How to talk to family members who believe in conspiracy theories",
    author: {
      name: "Marcus B.",
      isVerified: false,
      isTopContributor: true,
    },
    tags: ["Psychology", "Social"],
    likes: 712,
    comments: 128,
    timeAgo: "2 days ago"
  }
];

const DiscussionForum = () => {
  return (
    <>
      <Card className="glass-card mb-6">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare size={20} className="text-primary" />
              <CardTitle>Discussion Forum</CardTitle>
            </div>
            <Button variant="link" className="text-accent">
              Most Popular
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="pt-4">
          <div className="space-y-4">
            {threads.map((thread) => (
              <Link
                key={thread.id}
                to={`/community/thread/${thread.id}`}
                className="block"
              >
                <div className="glass-dark p-4 rounded-xl hover:bg-white/10 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-accent/20">
                          {thread.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium">{thread.author.name}</span>
                          {thread.author.isVerified && (
                            <Badge variant="outline" className="bg-primary/10 text-primary text-xs h-5 px-1">
                              Verified
                            </Badge>
                          )}
                          {thread.author.isTopContributor && (
                            <Badge variant="outline" className="bg-accent/10 text-accent text-xs h-5 px-1">
                              Top
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{thread.timeAgo}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {thread.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="font-medium mb-3 line-clamp-2">
                    {thread.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart size={14} />
                      <span>{thread.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={14} />
                      <span>{thread.comments}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="fixed bottom-20 right-4 md:right-8 md:bottom-8 z-40">
        <Button 
          size="lg" 
          className="h-14 w-14 rounded-full shadow-glow-md animate-pulse-glow"
        >
          <PlusCircle size={24} />
          <span className="sr-only">Start a Thread</span>
        </Button>
      </div>
    </>
  );
};

export default DiscussionForum;
