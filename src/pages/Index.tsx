
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    document.title = "ClarityX - AI Fact-Checking Platform";
  }, []);

  // Redirect to dashboard
  return <Navigate to="/dashboard" replace />;
};

export default Index;
