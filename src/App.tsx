import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Healthcare from "./pages/Healthcare";
import Education from "./pages/Education";
import Agriculture from "./pages/Agriculture";
import Women from "./pages/Women";
import Business from "./pages/Business";
import Employment from "./pages/Employment";
import FindSchemes from "./pages/FindSchemes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/find-schemes" element={<FindSchemes />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/education" element={<Education />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/women" element={<Women />} />
          <Route path="/business" element={<Business />} />
          <Route path="/employment" element={<Employment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
