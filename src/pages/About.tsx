import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle2, MapPin, Heart, Users, MessageCircle } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import { PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_LINK, ADDRESS, SLOGAN } from '@/data/constants';

const values = [
  { icon: <Heart size={20}/>, title: 'Care for Your Belongings', desc: 'We treat every item we handle as if it belongs to us — with attention and respect.' },
  { icon: <CheckCircle2 size={20}/>, title: 'Reliable Service', desc: 'We aim to do what we say and communicate clearly throughout the relocation process.' },
  { icon: <Users size={20}/>, title: 'Customer-First Approach', desc: 'Your requirements guide how we plan and execute each move.' },
  { icon: <MapPin size={20}/>, title: 'Local Expertise', desc: 'Based in Digha, Navi Mumbai — we understand the local landscape and logistics.' },
];

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us | Shri Swami Samarth Packers & Movers, Digha Navi Mumbai"
        description="Learn about Shri Swami Samarth Packers & Movers, a professional relocation company based in Digha, Navi Mumbai. Our approach to careful packing, organised moves, and customer care."
        canonical="/about"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#061B45] to-[#164AA8] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '48px 48px' }}/>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow text-[#F7BD38]">About Us</span>
              <h1 className="text-white text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
                Moving People Forward, With Care.
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                Shri Swami Samarth Packers & Movers is a professional relocation company based in Digha, Navi Mumbai. We provide organised and customer-focused moving services for households and businesses across Navi Mumbai, Mumbai, and domestic destinations across India.
              </p>
              <p className="hindi-text text-[#F7BD38] text-lg font-semibold italic mb-8">"{SLOGAN}"</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-a-quote" className="btn-primary">Get a Free Quote <ArrowRight size={14}/></Link>
                <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-white"><Phone size={14}/> Call Us</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80"
                alt="Shri Swami Samarth Packers & Movers team assisting with household relocation in Navi Mumbai"
                className="img-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Our Story</span>
            <h2 className="text-3xl font-extrabold text-[#17233D] mb-5">Rooted in Navi Mumbai, Committed to Your Move</h2>
            <p className="text-[#667085] leading-relaxed mb-4 text-lg">
              Shri Swami Samarth Packers & Movers was established to provide Navi Mumbai's residents and businesses with a trustworthy, organised relocation option. We are based in Digha, Navi Mumbai, and our primary focus is helping our customers complete their moves with minimal stress.
            </p>
            <p className="text-[#667085] leading-relaxed mb-4">
              Our name reflects a deep sense of purpose and care — a commitment to showing up with the same dedication and respect for every customer, whether they are moving locally within Navi Mumbai or relocating to another city across India.
            </p>
            <p className="text-[#667085] leading-relaxed">
              We believe that every move — no matter its size — deserves proper planning, careful execution, and clear communication. This belief guides everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#F5F7FB]">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">What Guides Us</span>
            <h2 className="text-3xl font-extrabold text-[#17233D] mb-4">Our Brand Philosophy</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-12 h-12 bg-[#F47721]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#F47721]">
                  {v.icon}
                </div>
                <h3 className="font-bold text-[#17233D] mb-2 text-sm">{v.title}</h3>
                <p className="text-[#667085] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">How We Work</span>
              <h2 className="text-3xl font-extrabold text-[#17233D] mb-5">Our Approach to Relocation</h2>
              <div className="space-y-5">
                {[
                  { title: 'Careful Packing Standards', desc: 'We use appropriate packing materials to protect your household goods, furniture, and fragile items. Proper packing is the foundation of a successful move.' },
                  { title: 'Organised Move Planning', desc: 'Before moving day, we coordinate the packing schedule, team allocation, and transport route to ensure a smooth experience.' },
                  { title: 'Clear Customer Communication', desc: 'We keep you informed from the initial enquiry through to delivery — including any changes to scheduling or logistics.' },
                  { title: 'Tailored Service Options', desc: 'We understand that every move is different. We work with you to provide services that match your specific requirements, not a one-size-fits-all approach.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#F47721] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#17233D] text-sm mb-1">{item.title}</h3>
                      <p className="text-[#667085] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Professional packing process for household relocation"
                className="img-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-[#F5F7FB]">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">Who We Help</span>
            <h2 className="text-3xl font-extrabold text-[#17233D] mb-4">Types of Customers We Serve</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Families Moving Homes', desc: 'Households relocating within Navi Mumbai or to another city, needing organised packing and safe transport of all household items.' },
              { title: 'Individuals Relocating', desc: 'Single-person moves, studio apartment shifts, and smaller household relocations where care and efficiency matter.' },
              { title: 'Businesses & Offices', desc: 'Small and medium businesses needing to move their office furniture, equipment, and supplies to a new location.' },
              { title: 'Vehicle Owners', desc: 'Customers who need to transport their car or motorcycle alongside their household move, or as a standalone service.' },
              { title: 'Intercity Movers', desc: 'Those moving from Navi Mumbai or Mumbai to another city in Maharashtra or across India, needing coordinated domestic relocation.' },
              { title: 'Local Shifters', desc: 'Customers moving within Navi Mumbai — across buildings, colonies, or nearby areas — who want a professional and organised service.' },
            ].map((c, i) => (
              <div key={i} className="card p-6">
                <h3 className="font-bold text-[#17233D] text-sm mb-2">{c.title}</h3>
                <p className="text-[#667085] text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-br from-[#061B45] to-[#092B70]">
        <div className="container text-center">
          <span className="eyebrow text-[#F7BD38]">Get in Touch</span>
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Plan Your Move?</h2>
          <p className="text-white/70 mb-3">{ADDRESS}</p>
          <p className="text-white/70 mb-8">Phone: {PHONE_PRIMARY} / {PHONE_SECONDARY}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-a-quote" className="btn-primary">Request a Free Quote <ArrowRight size={14}/></Link>
            <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-white"><Phone size={14}/> Call Us</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle size={14}/> WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
