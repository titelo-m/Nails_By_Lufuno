import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const queryClient = new QueryClient();

const App = () => {

  useEffect(() => {
    // 1. Add GA script to head
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-CWEG31JSDT";
    script.async = true;
    document.head.appendChild(script);

    // 2. Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    // 3. Configure GA with your Measurement ID
    gtag("js", new Date());
    gtag("config", "G-CWEG31JSDT", {
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;