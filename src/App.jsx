import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import RCM from './pages/RCM.jsx';
import Billing from './pages/Billing.jsx';
import HIPAA from './pages/HIPAA.jsx';
import Coding from './pages/Coding.jsx';
import Denial from './pages/Denial.jsx';
import Credentialing from './pages/Credentialing.jsx';
import Contact from './pages/Contact.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogDetails from "./pages/BlogDetails";
import ScrollToTop from "./components/ScrollToTop";
import Eligibility from "./pages/Eligibility.jsx"
import ChargesEntry from "./pages/ChargesEntry.jsx"
import PaymentPosting from "./pages/PaymentPosting.jsx"
import Reporting from "./pages/reporting.jsx"

export default function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/rcm-services" element={<RCM />} />
          <Route path="/medical-billing" element={<Billing />} />
          <Route path="/hipaa-compliance" element={<HIPAA />} />
          <Route path="/medical-coding" element={<Coding />} />
          <Route path="/denial-management" element={<Denial />} />
          <Route path="/credentialing" element={<Credentialing />} />
          <Route path="/news-blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/eligibility-and-benifits" element={<Eligibility />} />
          <Route path="/payment-posting" element={<PaymentPosting />} />
          <Route path="/charges-entry" element={<ChargesEntry />} />
          <Route path="/news-blogs/:slug" element={<BlogDetails />} />
          <Route path="/reporting" element={<Reporting/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}