
import AppLayout from "@/components/layout/AppLayout";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import GlobalLeaderboard from "@/components/dashboard/GlobalLeaderboard";
import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import QuickScanWidget from "@/components/dashboard/QuickScanWidget";
import MisinformationFeed from "@/components/dashboard/MisinformationFeed";

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="container py-6">
        <WelcomeHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <AnalyticsCard />
            <QuickScanWidget />
          </div>
          <div className="space-y-6">
            <GlobalLeaderboard />
          </div>
        </div>
        
        <div className="mt-6">
          <MisinformationFeed />
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
