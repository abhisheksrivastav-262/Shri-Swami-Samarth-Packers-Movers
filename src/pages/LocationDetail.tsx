import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronRight, Phone, CheckCircle2 } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import { locations } from '@/data/locations';
import { PHONE_PRIMARY, WHATSAPP_LINK } from '@/data/constants';
import { services } from '@/data/services';

export default function LocationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find(l => l.slug === slug);

  if (!location) return <Navigate to="/locations" replace />;

  return (
    <>
      <SEOHead
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={`/locations/${location.slug}`}
      />

      {/* Breadcrumb */}
      <div className="bg-[#F5F7FB] border-b border-[#E5EAF2] py-3">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={12}/>
            <Link to="/locations">Locations</Link>
            <ChevronRight size={12}/>
            <span className="text-[#17233D] font-medium">{location.fullName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061B45] to-[#164AA8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '48px 48px' }}/>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-[#F7BD38]"/>
              <span className="text-[#F7BD38] text-sm font-semibold">{location.fullName}</span>
            </div>
            <h1 className="text-white text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Packers and Movers in {location.name}
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8">{location.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-a-quote" className="btn-primary">Get a Free Quote <ArrowRight size={14}/></Link>
              <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-white"><Phone size={14}/> Call Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-[#17233D] mb-5">Our Services in {location.name}</h2>
              <p className="text-[#667085] leading-relaxed mb-8">
                Shri Swami Samarth Packers & Movers provides relocation services in {location.fullName}, including household shifting, office relocation, packing and loading, and vehicle transportation. Whether you're moving locally within {location.name} or relocating further, our team can help.
              </p>

              {/* Highlights */}
              <div className="bg-[#F5F7FB] rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-[#17233D] mb-4">Service Highlights for {location.name}</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {location.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#667085]">
                      <CheckCircle2 size={14} className="text-[#168A52] flex-shrink-0 mt-0.5"/>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl font-extrabold text-[#17233D] mb-5">Available Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map(s => (
                  <Link key={s.id} to={`/services/${s.slug}`} className="flex items-center gap-3 p-4 border border-[#E5EAF2] rounded-xl hover:border-[#F47721] hover:bg-[#F5F7FB] transition-all group">
                    <div className="w-8 h-8 bg-[#F47721]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#F47721] transition-colors">
                      <ChevronRight size={12} className="text-[#F47721] group-hover:text-white transition-colors"/>
                    </div>
                    <span className="text-sm font-semibold text-[#17233D] group-hover:text-[#F47721] transition-colors">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="card p-6 sticky top-24">
                <h3 className="font-bold text-[#17233D] mb-4">Plan Your Move from {location.name}</h3>
                <p className="text-[#667085] text-sm mb-5">Contact us with your move details and we'll help you get started.</p>
                <div className="flex flex-col gap-3">
                  <Link to="/get-a-quote" className="btn-primary justify-center">Get a Free Quote <ArrowRight size={14}/></Link>
                  <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-secondary justify-center"><Phone size={14}/> Call {PHONE_PRIMARY}</a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">WhatsApp Us</a>
                </div>
                <div className="mt-6 pt-5 border-t border-[#E5EAF2]">
                  <p className="text-xs text-[#667085] font-semibold mb-3">Other Service Areas</p>
                  <div className="flex flex-col gap-1">
                    {locations.filter(l => l.slug !== slug).slice(0, 4).map(l => (
                      <Link key={l.id} to={`/locations/${l.slug}`} className="text-xs text-[#667085] hover:text-[#F47721] flex items-center gap-1 py-0.5 transition-colors">
                        <MapPin size={10}/> {l.fullName}
                      </Link>
                    ))}
                    <Link to="/locations" className="text-xs font-semibold text-[#F47721] mt-2">All Locations →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
