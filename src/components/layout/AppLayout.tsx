
import { ReactNode } from "react";
import Navbar from "./Navbar";
import MobileNavigation from "./MobileNavigation";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-clarity-bg-dark">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-6">
        {children}
      </main>
      <MobileNavigation />
    </div>
  );
};

export default AppLayout;
