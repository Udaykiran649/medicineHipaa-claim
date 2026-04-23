import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './styles/global.css';
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MedicalBillingPage from "./pages/MedicalBillingPage";
import MedicalCodingPage from "./pages/MedicalCodingPage";
import HipaaPage from "./pages/HipaaPage";
import ProviderCredentialing from "./pages/ProviderCredentialing";
import DenialManagement from "./pages/DenialManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
         <Route path="/medical-billing-services" element={<MedicalBillingPage />} />
         <Route path="/medical-coding" element={< MedicalCodingPage/>} />
         <Route path="/hipaa-compliance" element={<HipaaPage/>} />
         <Route path="/provider-credentialing" element={<ProviderCredentialing/>} />
         <Route path="/denial-management" element={<DenialManagement/>} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
