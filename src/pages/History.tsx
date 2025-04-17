
import AppLayout from "@/components/layout/AppLayout";
import TimelineView from "@/components/history/TimelineView";

const History = () => {
  return (
    <AppLayout>
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6 gradient-text">Scan History</h1>
        <TimelineView />
      </div>
    </AppLayout>
  );
};

export default History;
