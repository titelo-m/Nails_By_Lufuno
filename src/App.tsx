import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReactGA from "react-gtag";

const queryClient = new QueryClient();

const GA_MEASUREMENT_ID = "G-CWEG31JSDT";

// Track page views on route change
const GAListener = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GAListener />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;