import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_NAME, PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_LINK, ADDRESS, TAGLINE, CURRENT_YEAR } from '@/data/constants';

const serviceLinks = [
  { name: 'House Shifting', path: '/services/house-shifting' },
  { name: 'Office Relocation', path: '/services/office-relocation' },
  { name: 'Local & Domestic Shifting', path: '/services/local-domestic-shifting' },
  { name: 'Car & Bike Transportation', path: '/services/car-bike-transportation' },
  { name: 'Packing & Loading', path: '/services/packing-loading' },
  { name: 'Unloading', path: '/services/unloading' },
];

const locationLinks = [
  { name: 'Digha, Navi Mumbai', path: '/locations/digha-navi-mumbai' },
  { name: 'Airoli', path: '/locations/airoli' },
  { name: 'Ghansoli', path: '/locations/ghansoli' },
  { name: 'Vashi', path: '/locations/vashi' },
  { name: 'Nerul', path: '/locations/nerul' },
  { name: 'Thane', path: '/locations/thane' },
  { name: 'Mumbai', path: '/locations/mumbai' },
];

export default function Footer() {
  return (
    <footer className="bg-[#061B45] text-white">
      {/* CTA strip */}
      <div className="bg-[#F47721] py-8">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-white text-xl font-[Manrope]">Ready to plan your move?</p>
            <p className="text-white/80 text-sm mt-1">Get in touch with our team today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/get-a-quote" className="btn-white text-sm px-5 py-3">
              Get Free Quote <ArrowRight size={14}/>
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm px-5 py-3">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="section-padding-sm">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#164AA8] to-[#092B70] flex items-center justify-center shadow-lg">
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <path d="M14 4L3 12V25H11V18H17V25H25V12L14 4Z" fill="white" opacity="0.9"/>
                    <circle cx="8" cy="22" r="2" fill="#F47721"/>
                    <circle cx="20" cy="22" r="2" fill="#F47721"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white text-sm leading-tight">Shri Swami Samarth</div>
                  <div className="text-[11px] text-[#F7BD38] font-semibold">Packers & Movers</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Professional relocation services in Navi Mumbai. Careful packing, trusted transportation, reliable service.
              </p>
              <p className="hindi-text text-[#F7BD38] text-sm font-medium italic">{TAGLINE}</p>

              <div className="mt-6 flex flex-col gap-3">
                <a href={`tel:+91${PHONE_PRIMARY}`} className="flex items-center gap-2 text-white/80 hover:text-[#F47721] transition-colors text-sm">
                  <Phone size={14}/> {PHONE_PRIMARY}
                </a>
                <a href={`tel:+91${PHONE_SECONDARY}`} className="flex items-center gap-2 text-white/80 hover:text-[#F47721] transition-colors text-sm">
                  <Phone size={14}/> {PHONE_SECONDARY}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-[#25D366] transition-colors text-sm">
                  <MessageCircle size={14}/> WhatsApp Us
                </a>
                <div className="flex items-start gap-2 text-white/60 text-sm">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5"/>
                  <span>{ADDRESS}</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-bold text-white text-sm mb-5 uppercase tracking-widest">Quick Links</h3>
              <ul className="flex flex-col gap-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'All Services', path: '/services' },
                  { name: 'All Locations', path: '/locations' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Get a Quote', path: '/get-a-quote' },
                ].map(l => (
                  <li key={l.path}>
                    <Link to={l.path} className="text-white/60 hover:text-[#F47721] transition-colors text-sm">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-white text-sm mb-5 uppercase tracking-widest">Services</h3>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map(l => (
                  <li key={l.path}>
                    <Link to={l.path} className="text-white/60 hover:text-[#F47721] transition-colors text-sm">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="font-bold text-white text-sm mb-5 uppercase tracking-widest">Service Areas</h3>
              <ul className="flex flex-col gap-3">
                {locationLinks.map(l => (
                  <li key={l.path}>
                    <Link to={l.path} className="text-white/60 hover:text-[#F47721] transition-colors text-sm">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs text-center md:text-left">
              © {CURRENT_YEAR} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-white/40 hover:text-white/70 transition-colors text-xs">Privacy Policy</Link>
              <Link to="/terms" className="text-white/40 hover:text-white/70 transition-colors text-xs">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
