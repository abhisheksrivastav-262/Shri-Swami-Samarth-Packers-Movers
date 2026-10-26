import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ServicesPage from '@/pages/Services';
import ServiceDetailPage from '@/pages/ServiceDetail';
import LocationsPage from '@/pages/Locations';
import LocationDetailPage from '@/pages/LocationDetail';
import ContactPage from '@/pages/Contact';
import GalleryPage from '@/pages/Gallery';
import GetAQuotePage from '@/pages/GetAQuote';
import PrivacyPolicyPage from '@/pages/PrivacyPolicy';
import TermsPage from '@/pages/Terms';
import NotFoundPage from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:slug" element={<LocationDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-a-quote" element={<GetAQuotePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
