import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Home, Building2, MapPin, Car, Package, ArrowDownToLine } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import FAQAccordion from '@/components/common/FAQAccordion';
import { services } from '@/data/services';
import { PHONE_PRIMARY, WHATSAPP_LINK } from '@/data/constants';

const serviceIcons: Record<string, React.ReactNode> = {
  'house-shifting': <Home size={24} />,
  'office-relocation': <Building2 size={24} />,
  'local-domestic-shifting': <MapPin size={24} />,
  'car-bike-transportation': <Car size={24} />,
  'packing-loading': <Package size={24} />,
  'unloading': <ArrowDownToLine size={24} />,
};

const servicesFaqs = [
  { question: 'Do you offer all services in one package?', answer: 'Yes, we can combine services such as packing, loading, transportation, and unloading into a complete relocation package. Please discuss your specific requirements when you enquire, and we\'ll suggest the most suitable combination.' },
  { question: 'Can I book just packing or just unloading?', answer: 'Yes, individual services such as packing and loading, or unloading only, can be arranged depending on availability. Contact us to discuss your specific requirement.' },
  { question: 'How do I get a quote for my move?', answer: 'Contact us via phone, WhatsApp, or the quote request form on this website. Share your pickup and destination locations, type of move, preferred date, and any special requirements.' },
  { question: 'Is vehicle transportation available separately from household shifting?', answer: 'Vehicle transportation can be arranged independently or in combination with a household move. Please contact us to confirm availability for your specific route.' },
];

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="All Moving Services | Shri Swami Samarth Packers & Movers Navi Mumbai"
        description="Explore all relocation services offered by Shri Swami Samarth Packers & Movers — house shifting, office relocation, car transport, packing, loading, and more in Navi Mumbai."
        canonical="/services"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061B45] to-[#164AA8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '48px 48px' }}/>
        <div className="container relative z-10 text-center">
          <span className="eyebrow text-[#F7BD38]">What We Offer</span>
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold mb-4">Professional Relocation Services</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8">
            From packing your household goods to transporting your vehicle — we provide end-to-end relocation support in Navi Mumbai and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-a-quote" className="btn-primary">Get a Free Quote <ArrowRight size={14}/></Link>
            <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-white">Call {PHONE_PRIMARY}</a>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="card flex flex-col">
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="img-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#F47721] rounded-xl flex items-center justify-center text-white shadow-lg">
                    {serviceIcons[service.id]}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-bold text-[#17233D] text-xl mb-2">{service.name}</h2>
                  <p className="text-[#667085] text-sm leading-relaxed mb-4">{service.fullDescription}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((f, fi) => (
                      <li key={fi} className="text-sm text-[#667085] flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-[#168A52] flex-shrink-0 mt-0.5"/>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.slug}`} className="btn-primary w-full justify-center">
                    Learn More <ChevronRight size={14}/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="section-padding-sm bg-[#F5F7FB]">
        <div className="container text-center">
          <h2 className="text-2xl font-extrabold text-[#17233D] mb-3">Not Sure Which Service You Need?</h2>
          <p className="text-[#667085] mb-6">Contact us and describe your move — we'll help you understand the best approach.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-a-quote" className="btn-primary">Request a Quote <ArrowRight size={14}/></Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <span className="eyebrow">FAQs</span>
            <h2 className="text-2xl font-extrabold text-[#17233D]">Service Questions</h2>
          </div>
          <FAQAccordion faqs={servicesFaqs} />
        </div>
      </section>
    </>
  );
}
