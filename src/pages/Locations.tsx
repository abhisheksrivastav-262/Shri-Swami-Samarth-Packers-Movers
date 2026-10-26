import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import { locations } from '@/data/locations';
import { PHONE_PRIMARY } from '@/data/constants';

export default function LocationsPage() {
  return (
    <>
      <SEOHead
        title="Service Locations | Shri Swami Samarth Packers & Movers Navi Mumbai"
        description="Shri Swami Samarth Packers & Movers serves Digha, Airoli, Ghansoli, Vashi, Nerul, Thane, Mumbai and domestic destinations across India. Find your location."
        canonical="/locations"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061B45] to-[#164AA8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '48px 48px' }}/>
        <div className="container relative z-10 text-center">
          <span className="eyebrow text-[#F7BD38]">Where We Operate</span>
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold mb-4">Our Service Areas</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8">
            Based in Digha, Navi Mumbai — we serve local areas across Navi Mumbai, Mumbai, and facilitate domestic relocation across India.
          </p>
          <Link to="/get-a-quote" className="btn-primary">Get a Free Quote <ArrowRight size={14}/></Link>
        </div>
      </section>

      {/* Primary Location */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="eyebrow">Our Home Base</span>
              <h2 className="text-3xl font-extrabold text-[#17233D] mb-4">Digha, Navi Mumbai — 400708</h2>
              <p className="text-[#667085] leading-relaxed mb-6">
                Shri Swami Samarth Packers & Movers is based in Digha, Navi Mumbai. This is our primary operating location, and we serve the surrounding areas with local relocation and domestic moving services. Our team's familiarity with Digha and the wider Navi Mumbai region means we can plan your move efficiently.
              </p>
              <div className="flex items-center gap-3 text-[#17233D] font-semibold mb-2">
                <MapPin size={16} className="text-[#F47721]"/> Digha, Navi Mumbai, Maharashtra - 400708
              </div>
              <div className="flex gap-4 mt-6">
                <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-primary">Call Us <ArrowRight size={14}/></a>
                <Link to="/contact" className="btn-secondary">Contact Page</Link>
              </div>
            </div>
            <div className="bg-[#F5F7FB] rounded-2xl p-6 border border-[#E5EAF2]">
              <h3 className="font-bold text-[#17233D] mb-4 text-sm uppercase tracking-wide">Services Available in Navi Mumbai</h3>
              <ul className="space-y-3">
                {['House Shifting', 'Office Relocation', 'Local Shifting', 'Domestic Moving', 'Car & Bike Transportation', 'Packing & Loading', 'Unloading'].map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-[#667085]">
                    <ChevronRight size={12} className="text-[#F47721]"/> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* All Locations Grid */}
          <div className="mb-10">
            <span className="eyebrow">Coverage Areas</span>
            <h2 className="text-3xl font-extrabold text-[#17233D] mb-6">Areas We Serve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map(loc => (
              <Link key={loc.id} to={`/locations/${loc.slug}`} className="location-card group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#F47721]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#F47721] transition-colors">
                    <MapPin size={16} className="text-[#F47721] group-hover:text-white transition-colors"/>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#17233D] group-hover:text-[#F47721] transition-colors">{loc.fullName}</h3>
                  </div>
                </div>
                <p className="text-[#667085] text-sm leading-relaxed mb-4">{loc.description.slice(0, 100)}...</p>
                <ul className="space-y-1">
                  {loc.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="text-xs text-[#667085] flex items-center gap-1.5">
                      <ChevronRight size={10} className="text-[#F47721]"/> {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 text-[#F47721] text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  View Area <ChevronRight size={12}/>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Moves */}
      <section className="section-padding bg-[#F5F7FB]">
        <div className="container text-center max-w-2xl mx-auto">
          <span className="eyebrow">Beyond Navi Mumbai</span>
          <h2 className="text-3xl font-extrabold text-[#17233D] mb-4">Domestic Relocation Across India</h2>
          <p className="text-[#667085] leading-relaxed mb-8">
            In addition to local moves within Navi Mumbai and Mumbai, we facilitate domestic relocation to cities across India, subject to service availability. If you're planning an intercity move, please get in touch to discuss your specific route and requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-a-quote" className="btn-primary">Request a Quote <ArrowRight size={14}/></Link>
            <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-secondary">Call {PHONE_PRIMARY}</a>
          </div>
        </div>
      </section>
    </>
  );
}
