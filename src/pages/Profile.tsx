
import { useEffect } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { useProfile } from "@/hooks/useProfile";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { profile } = useProfile();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect users to the dashboard, as profile is now accessed via the sidebar
    navigate('/dashboard');
  }, [navigate]);
  
  return (
    <AppLayout>
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-6 gradient-text">Redirecting to Dashboard...</h1>
      </div>
    </AppLayout>
  );
};

export default Profile;
