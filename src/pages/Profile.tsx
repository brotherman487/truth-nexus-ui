
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import ProfileHeader from "@/components/profile/ProfileHeader";
import EditProfileForm from "@/components/profile/EditProfileForm";
import ContributionHistory from "@/components/profile/ContributionHistory";
import SettingsPanel from "@/components/profile/SettingsPanel";
import { useProfile } from "@/hooks/useProfile";

const Profile = () => {
  const { profile, updateProfile, isEditing, toggleEditMode } = useProfile();
  
  return (
    <AppLayout>
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6 gradient-text">My Profile</h1>
        
        {isEditing ? (
          <EditProfileForm 
            profile={profile} 
            onSave={(data) => {
              updateProfile(data);
              toggleEditMode();
            }}
            onCancel={toggleEditMode}
          />
        ) : (
          <ProfileHeader 
            profile={profile} 
            onEdit={toggleEditMode}
          />
        )}
        
        <ContributionHistory />
        <SettingsPanel 
          profile={profile}
          updateProfile={updateProfile} 
        />
      </div>
    </AppLayout>
  );
};

export default Profile;
