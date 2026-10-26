import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Phone, Search } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import { PHONE_PRIMARY } from '@/data/constants';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | Shri Swami Samarth Packers & Movers"
        description="The page you are looking for does not exist. Browse our relocation services or contact Shri Swami Samarth Packers & Movers."
      />

      <section className="py-24 md:py-32 bg-[#F5F7FB] min-h-[70vh] flex items-center">
        <div className="container max-w-xl text-center">
          <div className="w-20 h-20 bg-orange-100 text-[#F47721] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Search size={36} />
          </div>
          <span className="text-sm font-bold text-[#F47721] tracking-widest uppercase mb-2 block">404 Error</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#092B70] mb-4 font-[Manrope]">
            Page Not Found
          </h1>
          <p className="text-[#667085] text-sm md:text-base leading-relaxed mb-8">
            The relocation page or resource you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary text-sm px-5 py-3 inline-flex items-center gap-2">
              <Home size={16} /> Go to Home
            </Link>
            <Link to="/services" className="btn-secondary text-sm px-5 py-3 inline-flex items-center gap-2 border border-[#092B70] text-[#092B70] rounded-lg">
              <ArrowLeft size={16} /> View Services
            </Link>
            <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-secondary text-sm px-5 py-3 inline-flex items-center gap-2 border border-gray-300 rounded-lg">
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
