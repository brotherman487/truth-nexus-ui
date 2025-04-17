
import AppLayout from "@/components/layout/AppLayout";
import DiscussionForum from "@/components/community/DiscussionForum";

const Community = () => {
  return (
    <AppLayout>
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6 gradient-text">Community</h1>
        <DiscussionForum />
      </div>
    </AppLayout>
  );
};

export default Community;
