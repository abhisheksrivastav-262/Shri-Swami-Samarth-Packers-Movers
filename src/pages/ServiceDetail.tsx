import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import FAQAccordion from '@/components/common/FAQAccordion';
import { services } from '@/data/services';
import { PHONE_PRIMARY, WHATSAPP_LINK } from '@/data/constants';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const relatedServices = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/services/${service.slug}`}
      />

      {/* Breadcrumb */}
      <div className="bg-[#F5F7FB] border-b border-[#E5EAF2] py-3">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={12}/>
            <Link to="/services">Services</Link>
            <ChevronRight size={12}/>
            <span className="text-[#17233D] font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#061B45] to-[#164AA8] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '48px 48px' }}/>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow text-[#F7BD38]">Our Services</span>
              <h1 className="text-white text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">{service.name}</h1>
              <p className="text-white/75 text-lg leading-relaxed mb-8">{service.fullDescription}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-a-quote" className="btn-primary">Get a Free Quote <ArrowRight size={14}/></Link>
                <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-white"><Phone size={14}/> Call Us</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] hidden lg:block">
              <img
                src={service.image}
                alt={`${service.name} services in Navi Mumbai`}
                className="img-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile image */}
      <div className="lg:hidden">
        <img
          src={service.image}
          alt={`${service.name} services in Navi Mumbai`}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Service Details */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-[#17233D] mb-5">What's Included</h2>
              <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 bg-[#F5F7FB] rounded-xl p-4">
                    <CheckCircle2 size={16} className="text-[#168A52] flex-shrink-0 mt-0.5"/>
                    <span className="text-sm text-[#17233D] font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-extrabold text-[#17233D] mb-5">How This Service Works</h2>
              <div className="space-y-4 mb-10">
                {[
                  { step: '01', title: 'Submit an Enquiry', desc: `Share your move details — pickup location, destination, and your ${service.name.toLowerCase()} requirements.` },
                  { step: '02', title: 'Receive an Estimate', desc: 'Our team will review your requirements and provide a moving estimate.' },
                  { step: '03', title: 'Confirm and Schedule', desc: 'Confirm your preferred moving date and we\'ll coordinate the rest.' },
                  { step: '04', title: 'Move Day Execution', desc: 'Our team arrives on time, handles packing and loading, and ensures safe delivery.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-9 h-9 bg-[#F47721] rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{s.step}</div>
                    <div>
                      <div className="font-bold text-[#17233D] text-sm">{s.title}</div>
                      <div className="text-[#667085] text-sm leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-extrabold text-[#17233D] mb-5">Frequently Asked Questions</h2>
              <FAQAccordion faqs={service.faqs} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="card p-6 mb-6">
                  <h3 className="font-bold text-[#17233D] mb-4">Request a Quote</h3>
                  <p className="text-[#667085] text-sm mb-5">Get in touch with our team to discuss your {service.name.toLowerCase()} requirements and receive an estimate.</p>
                  <div className="flex flex-col gap-3">
                    <Link to="/get-a-quote" className="btn-primary justify-center">Get a Free Quote <ArrowRight size={14}/></Link>
                    <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-secondary justify-center"><Phone size={14}/> Call {PHONE_PRIMARY}</a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">WhatsApp Us</a>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="font-bold text-[#17233D] mb-4 text-sm">Related Services</h3>
                  <div className="flex flex-col gap-2">
                    {relatedServices.map(rs => (
                      <Link key={rs.id} to={`/services/${rs.slug}`} className="flex items-center gap-2 text-sm text-[#667085] hover:text-[#F47721] transition-colors py-1">
                        <ChevronRight size={12}/> {rs.name}
                      </Link>
                    ))}
                    <Link to="/services" className="flex items-center gap-2 text-sm font-semibold text-[#F47721] mt-2">
                      <ArrowRight size={12}/> All Services
                    </Link>
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
