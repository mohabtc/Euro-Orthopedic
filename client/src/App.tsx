import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import Chatbot from "@/components/Chatbot";
import HomePage from "@/pages/home";
import CarbonPage from "@/pages/carbon";
import GraciasPage from "@/pages/gracias";
import PrivacidadPage from "@/pages/privacidad";
import TerminosPage from "@/pages/terminos";
import EnviosPage from "@/pages/envios";
import FinanciacionPage from "@/pages/financiacion";
import SolidaridadPage from "@/pages/solidaridad";
import NotFound from "@/pages/not-found";

function Router() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleSubmitSuccess = (name: string) => {
    setIsContactModalOpen(false);
    setLocation(`/gracias?name=${encodeURIComponent(name)}`);
  };

  return (
    <>
      <Header onContactClick={handleContactClick} />
      
      <Switch>
        <Route path="/">
          <HomePage onContactClick={handleContactClick} />
        </Route>
        <Route path="/carbon">
          <CarbonPage onContactClick={handleContactClick} />
        </Route>
        <Route path="/gracias" component={GraciasPage} />
        <Route path="/privacidad" component={PrivacidadPage} />
        <Route path="/terminos" component={TerminosPage} />
        <Route path="/envios" component={EnviosPage} />
        <Route path="/financiacion">
          <FinanciacionPage onContactClick={handleContactClick} />
        </Route>
        <Route path="/solidaridad">
          <SolidaridadPage onContactClick={handleContactClick} />
        </Route>
        <Route component={NotFound} />
      </Switch>

      <Footer />
      
      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        onSubmitSuccess={handleSubmitSuccess}
      />
      
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
