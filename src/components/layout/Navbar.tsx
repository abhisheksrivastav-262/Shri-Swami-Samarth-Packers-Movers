import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_NAME, PHONE_PRIMARY, WHATSAPP_LINK } from '@/data/constants';

const servicesMenu = [
  { name: 'House Shifting', path: '/services/house-shifting' },
  { name: 'Office Relocation', path: '/services/office-relocation' },
  { name: 'Local & Domestic Shifting', path: '/services/local-domestic-shifting' },
  { name: 'Car & Bike Transportation', path: '/services/car-bike-transportation' },
  { name: 'Packing & Loading', path: '/services/packing-loading' },
  { name: 'Unloading', path: '/services/unloading' },
];

const locationsMenu = [
  { name: 'Digha, Navi Mumbai', path: '/locations/digha-navi-mumbai' },
  { name: 'Airoli', path: '/locations/airoli' },
  { name: 'Ghansoli', path: '/locations/ghansoli' },
  { name: 'Vashi', path: '/locations/vashi' },
  { name: 'Nerul', path: '/locations/nerul' },
  { name: 'Thane', path: '/locations/thane' },
  { name: 'Mumbai', path: '/locations/mumbai' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setMenuOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors duration-200 ${isActive ? 'text-[#F47721]' : 'text-[#17233D] hover:text-[#F47721]'}`;

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar hidden md:block">
        <div className="container-wide flex items-center justify-center gap-6">
          <span>🚛 Professional Packing & Moving Services in Navi Mumbai</span>
          <a href={`tel:+91${PHONE_PRIMARY}`} className="font-bold text-[#F7BD38] hover:text-white transition-colors flex items-center gap-1">
            <Phone size={13} /> {PHONE_PRIMARY}
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-[0_4px_24px_rgba(9,43,112,0.10)] border-b border-[#E5EAF2]' : 'bg-white border-b border-[#E5EAF2]'}`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink" aria-label={COMPANY_NAME}>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#092B70] to-[#164AA8] flex items-center justify-center flex-shrink-0 shadow-md">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* House shape */}
                  <path d="M14 4L3 12V25H11V18H17V25H25V12L14 4Z" fill="white" opacity="0.9"/>
                  {/* Truck wheels accent */}
                  <circle cx="8" cy="22" r="2" fill="#F47721"/>
                  <circle cx="20" cy="22" r="2" fill="#F47721"/>
                </svg>
              </div>
              <div className="min-w-0">
                <div className="font-bold text-[#092B70] text-xs sm:text-sm leading-tight font-[Manrope] truncate">Shri Swami Samarth</div>
                <div className="text-[10px] sm:text-[11px] text-[#F47721] font-semibold tracking-wide">Packers & Movers</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              <NavLink to="/" className={navLinkClass} end>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About Us</NavLink>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-semibold text-[#17233D] hover:text-[#F47721] transition-colors"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  id="services-menu-btn"
                >
                  Services <ChevronDown size={15} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}/>
                </button>
                <div className={`nav-dropdown ${servicesOpen ? 'open' : ''}`} role="menu" aria-labelledby="services-menu-btn">
                  {servicesMenu.map(s => (
                    <Link key={s.path} to={s.path} role="menuitem">{s.name}</Link>
                  ))}
                  <div className="border-t border-[#E5EAF2] mt-2 pt-2">
                    <Link to="/services" className="text-[#F47721] font-semibold" role="menuitem">All Services →</Link>
                  </div>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-semibold text-[#17233D] hover:text-[#F47721] transition-colors"
                  aria-expanded={locationsOpen}
                  aria-haspopup="true"
                  id="locations-menu-btn"
                >
                  Locations <ChevronDown size={15} className={`transition-transform ${locationsOpen ? 'rotate-180' : ''}`}/>
                </button>
                <div className={`nav-dropdown ${locationsOpen ? 'open' : ''}`} role="menu" aria-labelledby="locations-menu-btn">
                  {locationsMenu.map(l => (
                    <Link key={l.path} to={l.path} role="menuitem">{l.name}</Link>
                  ))}
                  <div className="border-t border-[#E5EAF2] mt-2 pt-2">
                    <Link to="/locations" className="text-[#F47721] font-semibold" role="menuitem">All Locations →</Link>
                  </div>
                </div>
              </div>

              <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:+91${PHONE_PRIMARY}`} className="flex items-center gap-2 text-sm font-semibold text-[#092B70] hover:text-[#F47721] transition-colors">
                <Phone size={15}/> {PHONE_PRIMARY}
              </a>
              <Link to="/get-a-quote" className="btn-primary text-sm px-5 py-3">
                Get Free Quote <ArrowRight size={14}/>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#F5F7FB] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E5EAF2] max-h-screen overflow-y-auto">
            <div className="container py-4 flex flex-col gap-1">
              <NavLink to="/" className="px-4 py-3 rounded-lg font-semibold text-[#17233D] hover:bg-[#F5F7FB] hover:text-[#F47721] transition-colors" end>Home</NavLink>
              <NavLink to="/about" className="px-4 py-3 rounded-lg font-semibold text-[#17233D] hover:bg-[#F5F7FB] hover:text-[#F47721] transition-colors">About Us</NavLink>

              {/* Services accordion */}
              <div>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 rounded-lg font-semibold text-[#17233D] hover:bg-[#F5F7FB] transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                >
                  Services <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}/>
                </button>
                {servicesOpen && (
                  <div className="ml-4 flex flex-col gap-1 pb-2">
                    {servicesMenu.map(s => (
                      <NavLink key={s.path} to={s.path} className="px-4 py-2 text-sm rounded-lg text-[#667085] hover:bg-[#F5F7FB] hover:text-[#F47721] transition-colors">{s.name}</NavLink>
                    ))}
                    <NavLink to="/services" className="px-4 py-2 text-sm font-semibold text-[#F47721]">View All Services</NavLink>
                  </div>
                )}
              </div>

              {/* Locations accordion */}
              <div>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 rounded-lg font-semibold text-[#17233D] hover:bg-[#F5F7FB] transition-colors"
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  aria-expanded={locationsOpen}
                >
                  Locations <ChevronDown size={16} className={`transition-transform ${locationsOpen ? 'rotate-180' : ''}`}/>
                </button>
                {locationsOpen && (
                  <div className="ml-4 flex flex-col gap-1 pb-2">
                    {locationsMenu.map(l => (
                      <NavLink key={l.path} to={l.path} className="px-4 py-2 text-sm rounded-lg text-[#667085] hover:bg-[#F5F7FB] hover:text-[#F47721] transition-colors">{l.name}</NavLink>
                    ))}
                    <NavLink to="/locations" className="px-4 py-2 text-sm font-semibold text-[#F47721]">All Locations</NavLink>
                  </div>
                )}
              </div>

              <NavLink to="/gallery" className="px-4 py-3 rounded-lg font-semibold text-[#17233D] hover:bg-[#F5F7FB] hover:text-[#F47721] transition-colors">Gallery</NavLink>
              <NavLink to="/contact" className="px-4 py-3 rounded-lg font-semibold text-[#17233D] hover:bg-[#F5F7FB] hover:text-[#F47721] transition-colors">Contact</NavLink>

              <div className="pt-4 border-t border-[#E5EAF2] flex flex-col gap-3">
                <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-secondary text-center justify-center">
                  <Phone size={15}/> Call {PHONE_PRIMARY}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-center justify-center">
                  WhatsApp Us
                </a>
                <Link to="/get-a-quote" className="btn-primary text-center justify-center">
                  Get Free Quote <ArrowRight size={14}/>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
