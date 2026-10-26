import { Link } from 'react-router-dom';
import {
  ArrowRight, Phone, CheckCircle2,
  Home, Building2, MapPin, Car, Package, ArrowDownToLine,
  Shield, Headphones, Star, ChevronRight
} from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import FAQAccordion from '@/components/common/FAQAccordion';
import { homeFaqs } from '@/data/faqs';
import { services } from '@/data/services';
import { PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_LINK, TAGLINE } from '@/data/constants';

const serviceIcons: Record<string, React.ReactNode> = {
  'house-shifting': <Home size={22} />,
  'office-relocation': <Building2 size={22} />,
  'local-domestic-shifting': <MapPin size={22} />,
  'car-bike-transportation': <Car size={22} />,
  'packing-loading': <Package size={22} />,
  'unloading': <ArrowDownToLine size={22} />,
};

const serviceColors = [
  { bg: 'bg-[#092B70]', accent: '#F47721' },
  { bg: 'bg-[#164AA8]', accent: '#F7BD38' },
  { bg: 'bg-[#F47721]', accent: '#fff' },
  { bg: 'bg-[#061B45]', accent: '#F7BD38' },
  { bg: 'bg-[#168A52]', accent: '#fff' },
  { bg: 'bg-[#7c3aed]', accent: '#F7BD38' },
];

const trustItems = [
  { icon: <Shield size={22}/>, title: 'Careful Packing & Handling', desc: 'Every item packed with protective materials by trained handlers.' },
  { icon: <Star size={22}/>, title: 'Experienced Moving Team', desc: 'A dedicated team with practical knowledge of local and domestic moves.' },
  { icon: <MapPin size={22}/>, title: 'Local & Domestic Relocation', desc: 'Serving Navi Mumbai, Mumbai, and domestic destinations across India.' },
  { icon: <Headphones size={22}/>, title: 'Dedicated Customer Support', desc: 'Responsive communication from your first enquiry to delivery.' },
];

const steps = [
  { step: '01', title: 'Tell Us About Your Move', desc: 'Share your pickup and destination locations, preferred date, and move size.' },
  { step: '02', title: 'Get Your Moving Estimate', desc: 'Our team reviews your requirements and provides a quotation.' },
  { step: '03', title: 'Plan Packing & Transportation', desc: 'We coordinate packing materials, team schedule, and transport route.' },
  { step: '04', title: 'Complete Your Move', desc: 'Our team arrives, packs, loads, transports, and unloads your belongings.' },
];

const whyChooseUs = [
  'Careful packing practices using appropriate materials',
  'Organised relocation planning and scheduling',
  'Clear communication throughout the move',
  'Services tailored to the size and type of your move',
  'Support for both local and long-distance relocations',
  'Convenient quotation requests via call, WhatsApp, or form',
];

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Shri Swami Samarth Packers & Movers | Navi Mumbai | House Shifting & Office Relocation"
        description="Professional packers and movers in Navi Mumbai. Expert house shifting, office relocation, car transportation, packing and loading services. Based in Digha, Navi Mumbai. Call 9833951313."
        canonical="/"
      />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#061B45] via-[#092B70] to-[#164AA8]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}/>
        {/* Accent shapes */}
        <div className="hero-accent w-96 h-96 top-[-8%] right-[-8%]"/>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-[#F7BD38] rounded-full opacity-10 blur-[80px]"/>

        <div className="container-wide relative z-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <span className="eyebrow text-[#F7BD38]">YOUR TRUSTED RELOCATION PARTNER</span>
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Moving Made{' '}
                <span className="text-gradient-orange">Simple.</span>
                <br/>Every Step, Safely.
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-4 max-w-xl">
                Professional household and office relocation services in Navi Mumbai. From careful packing to safe delivery — we handle your belongings like our own.
              </p>
              <p className="hindi-text text-[#F7BD38] text-lg font-semibold mb-8 italic">"{TAGLINE}"</p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/get-a-quote" className="btn-primary">
                  Get a Free Moving Quote <ArrowRight size={16}/>
                </Link>
                <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-white">
                  <Phone size={16}/> Call Us Now
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                {['Careful Handling', 'Organised Planning', 'Local Expertise', 'Transparent Quotes'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle2 size={14} className="text-[#168A52]" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Hero visual */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
                  alt="Professional movers carefully packing household items in Navi Mumbai"
                  className="img-cover w-full h-full"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 overlay-navy"/>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="floating-badge">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#F47721] rounded-lg flex items-center justify-center">
                        <Home size={18} className="text-white"/>
                      </div>
                      <div>
                        <div className="font-bold text-[#17233D] text-sm">Household & Office Relocation</div>
                        <div className="text-[#667085] text-xs">Based in Digha, Navi Mumbai</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating info cards */}
              <div className="absolute -top-5 -right-5 floating-badge py-3 px-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#168A52]/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-[#168A52]"/>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17233D]">Safe Relocation</div>
                  <div className="text-[10px] text-[#667085]">Careful Handling</div>
                </div>
              </div>

              <div className="absolute -left-5 top-1/2 -translate-y-1/2 floating-badge py-3 px-4">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#F47721]"/>
                  <div className="text-xs font-bold text-[#092B70]">{PHONE_PRIMARY}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C360,20 1080,20 1440,60 L1440,60 L0,60 Z"/>
          </svg>
        </div>
      </section>

      {/* TRUST HIGHLIGHTS */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, i) => (
              <div key={i} className="trust-item">
                <div className="trust-icon">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#17233D] text-sm mb-1">{item.title}</h3>
                  <p className="text-[#667085] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-padding bg-[#F5F7FB]">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#17233D] mb-4">
              Complete Relocation Services, Under One Roof
            </h2>
            <p className="text-[#667085] text-lg leading-relaxed">
              From carefully packing your belongings to transporting them to their destination, we help make every move easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-[#E5EAF2] bg-white hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] transition-all duration-300 block"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl ${serviceColors[idx].bg} flex items-center justify-center text-white shadow-lg`}>
                    {serviceIcons[service.id]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-[#17233D] text-lg mb-2 group-hover:text-[#F47721] transition-colors">{service.name}</h3>
                  <p className="text-[#667085] text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                  <ul className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((f, fi) => (
                      <li key={fi} className="text-xs text-[#667085] flex items-start gap-2">
                        <CheckCircle2 size={12} className="text-[#168A52] flex-shrink-0 mt-0.5"/>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 text-[#F47721] text-sm font-semibold group-hover:gap-2 transition-all">
                    Explore Service <ChevronRight size={14}/>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services <ArrowRight size={14}/>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="eyebrow">The Process</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#17233D] mb-4">A Simpler Way to Move</h2>
            <p className="text-[#667085]">Four clear steps from your first enquiry to a completed move.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line - desktop */}
            <div className="absolute top-8 left-[12%] right-[12%] h-0.5 bg-[#E5EAF2] hidden lg:block"/>

            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center">
                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#F47721] to-[#e06010] text-white font-extrabold text-lg shadow-[var(--shadow-orange)] mb-5 z-10">
                  {step.step}
                </div>
                <h3 className="font-bold text-[#17233D] text-base mb-2">{step.title}</h3>
                <p className="text-[#667085] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/get-a-quote" className="btn-primary">
              Request a Quote <ArrowRight size={14}/>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICE — HOUSE SHIFTING */}
      <section className="section-padding bg-[#F5F7FB]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Professional movers packing household furniture for house shifting"
                  className="img-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#F47721] rounded-2xl opacity-10 -z-10"/>
            </div>
            <div>
              <span className="eyebrow">Our Flagship Service</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#17233D] mb-4">
                Expert House Shifting in Navi Mumbai
              </h2>
              <p className="text-[#667085] leading-relaxed mb-6">
                Moving your home is a significant event. Our house shifting service is designed to take the stress out of the process — handling everything from the careful packing of your belongings to their safe delivery at your new home.
              </p>
              <ul className="checklist flex flex-col gap-1 mb-8">
                {['Complete household packing', 'Protective furniture wrapping', 'Careful loading by trained movers', 'Safe transportation to destination', 'Unloading and item placement', 'Special attention to fragile items'].map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/services/house-shifting" className="btn-primary">
                Explore House Shifting <ArrowRight size={14}/>
              </Link>
            </div>
          </div>

          {/* Office Relocation - reversed */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-24">
            <div className="order-2 lg:order-1">
              <span className="eyebrow">For Businesses</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#17233D] mb-4">
                Smooth Office Relocation
              </h2>
              <p className="text-[#667085] leading-relaxed mb-6">
                Relocating your office doesn't have to disrupt your business. Our office relocation service helps you coordinate a smooth move of your furniture, equipment, and supplies with minimal disruption.
              </p>
              <ul className="checklist flex flex-col gap-1 mb-8">
                {['Office furniture disassembly and packing', 'Equipment and electronics handling', 'Organised labelling and loading', 'Coordinated unloading at new office', 'Scheduled moves to suit your business'].map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/services/office-relocation" className="btn-primary">
                Explore Office Relocation <ArrowRight size={14}/>
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Office relocation in Navi Mumbai — organized packing and transport"
                  className="img-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#164AA8] rounded-2xl opacity-10 -z-10"/>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-gradient-to-br from-[#061B45] to-[#092B70] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}/>
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow text-[#F7BD38]">Why Choose Us</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Your Belongings Deserve Thoughtful Care
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                At Shri Swami Samarth Packers & Movers, we understand that your possessions represent years of effort and memories. Every move we undertake reflects this understanding.
              </p>
              <ul className="space-y-3">
                {whyChooseUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle2 size={16} className="text-[#168A52] flex-shrink-0 mt-0.5"/>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/get-a-quote" className="btn-primary">Get a Free Quote</Link>
                <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-white">
                  <Phone size={14}/> Call {PHONE_PRIMARY}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                  alt="Professional relocation services in Navi Mumbai"
                  className="img-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE LOCATIONS */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">We Serve</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#17233D] mb-4">Service Areas</h2>
            <p className="text-[#667085]">Based in Digha, Navi Mumbai — serving the wider Mumbai region and domestic destinations across India.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {[
              { name: 'Digha', sub: 'Navi Mumbai', path: '/locations/digha-navi-mumbai' },
              { name: 'Airoli', sub: 'Navi Mumbai', path: '/locations/airoli' },
              { name: 'Ghansoli', sub: 'Navi Mumbai', path: '/locations/ghansoli' },
              { name: 'Vashi', sub: 'Navi Mumbai', path: '/locations/vashi' },
              { name: 'Nerul', sub: 'Navi Mumbai', path: '/locations/nerul' },
              { name: 'Thane', sub: 'Maharashtra', path: '/locations/thane' },
              { name: 'Mumbai', sub: 'Maharashtra', path: '/locations/mumbai' },
              { name: 'Pan India', sub: 'Domestic Moves', path: '/locations' },
            ].map(loc => (
              <Link key={loc.name} to={loc.path} className="location-card">
                <div className="w-8 h-8 bg-[#F47721]/10 rounded-lg flex items-center justify-center mb-3">
                  <MapPin size={14} className="text-[#F47721]"/>
                </div>
                <div className="font-bold text-[#17233D] text-sm">{loc.name}</div>
                <div className="text-[#667085] text-xs mt-0.5">{loc.sub}</div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/locations" className="btn-secondary">View All Locations <ArrowRight size={14}/></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-[#F5F7FB]">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">Customer Feedback</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#17233D] mb-4">What Our Customers Say</h2>
            <p className="text-[#667085]">Here's what people share after moving with us. Real testimonials will be added as they are received.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Rajesh M.', location: 'Moved from Digha to Pune', text: 'The team was professional and careful with all our furniture. The move went smoothly and they were helpful throughout. — Placeholder testimonial. Real customer feedback will be added.' },
              { name: 'Priya S.', location: 'Moved within Navi Mumbai', text: 'Prompt response, good packing, and no issues with any item. Would recommend for local moves in Navi Mumbai. — Placeholder testimonial. Real customer feedback will be added.' },
              { name: 'Amit K.', location: 'Office Relocation, Vashi', text: 'They managed our office move efficiently. Communication was clear and the team coordinated well. — Placeholder testimonial. Real customer feedback will be added.' },
            ].map((t, i) => (
              <div key={i} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={14} className="text-[#F7BD38] fill-[#F7BD38]"/>
                  ))}
                </div>
                <p className="text-[#667085] text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <div className="font-bold text-[#17233D] text-sm">{t.name}</div>
                  <div className="text-[#667085] text-xs">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#667085] mt-6 italic">* These are placeholder testimonials for design purposes. Real customer reviews will be added after verification.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow">FAQs</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#17233D] mb-4">Frequently Asked Questions</h2>
              <p className="text-[#667085] leading-relaxed mb-8">
                Common questions about our packing, moving, and relocation services in Navi Mumbai.
              </p>
              <div className="bg-[#F5F7FB] rounded-2xl p-6">
                <p className="text-[#17233D] font-semibold text-sm mb-3">Still have questions?</p>
                <div className="flex flex-col gap-3">
                  <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-primary text-sm">
                    <Phone size={14}/> Call {PHONE_PRIMARY}
                  </a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
            <div>
              <FAQAccordion faqs={homeFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-gradient-to-r from-[#F47721] to-[#e06010] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}/>
        <div className="container-wide relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Planning Your Next Move?</h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Tell us where you're moving, and our team can help you understand the next steps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-a-quote" className="btn-white">
              Request a Free Quote <ArrowRight size={14}/>
            </Link>
            <a href={`tel:+91${PHONE_PRIMARY}`} className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-[10px] transition-colors text-sm border border-white/30">
              <Phone size={14}/> Call {PHONE_PRIMARY}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              WhatsApp Us
            </a>
          </div>
          <p className="text-white/70 text-sm mt-6">
            Also reachable at: <a href={`tel:+91${PHONE_SECONDARY}`} className="text-white font-semibold hover:underline">{PHONE_SECONDARY}</a>
          </p>
        </div>
      </section>
    </>
  );
}
