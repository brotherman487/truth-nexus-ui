
import AppLayout from "@/components/layout/AppLayout";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ContributionHistory from "@/components/profile/ContributionHistory";
import SettingsPanel from "@/components/profile/SettingsPanel";

const Profile = () => {
  return (
    <AppLayout>
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6 gradient-text">My Profile</h1>
        <ProfileHeader />
        <ContributionHistory />
        <SettingsPanel />
      </div>
    </AppLayout>
  );
};

export default Profile;
