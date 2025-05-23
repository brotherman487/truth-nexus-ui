
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Scan from "./pages/Scan";
import History from "./pages/History";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { DarkModeProvider } from "./hooks/useDarkMode";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DarkModeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/scan/:id" element={<Scan />} />
            <Route path="/history" element={<History />} />
            <Route path="/community" element={<Community />} />
            <Route path="/community/thread/:id" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </DarkModeProvider>
  </QueryClientProvider>
);

export default App;
