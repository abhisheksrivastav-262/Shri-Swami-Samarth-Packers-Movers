import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, X, ChevronLeft, ChevronRight, Phone, MessageCircle,
  ArrowRight, ShieldCheck, Camera, Sparkles
} from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import SafeImage from '@/components/common/SafeImage';
import { galleryItems, type GalleryItem } from '@/data/gallery';
import { COMPANY_NAME, PHONE_PRIMARY, WHATSAPP_LINK } from '@/data/constants';

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'household', label: 'Household Shifting' },
  { id: 'office', label: 'Office Relocation' },
  { id: 'packing', label: 'Packing & Loading' },
  { id: 'vehicle', label: 'Vehicle Transport' },
  { id: 'warehouse', label: 'Warehouse & Storage' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    setActiveModalItem(item);
  };

  const closeLightbox = () => {
    setActiveModalItem(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeModalItem.id);
    if (currentIndex === -1) return;

    if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveModalItem(filteredItems[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setActiveModalItem(filteredItems[nextIndex]);
    }
  };

  return (
    <>
      <SEOHead
        title={`Work & Shifting Gallery | ${COMPANY_NAME} Navi Mumbai`}
        description="Browse photos of our household shifting, office relocation, vehicle transportation, and multi-layer packing services in Navi Mumbai, Mumbai, and domestic moves across India."
        canonical="/gallery"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#061B45] via-[#092B70] to-[#164AA8] py-20 md:py-24 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1.5px, transparent 0)',
          backgroundSize: '36px 36px',
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47721] rounded-full opacity-10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F7BD38] rounded-full opacity-10 blur-[80px]" />

        <div className="container relative z-10 text-center max-w-3xl">
          <span className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F7BD38] text-xs font-extrabold tracking-widest uppercase mb-4 backdrop-blur-sm border border-white/15">
            <Camera size={14} /> Real Relocation Projects
          </span>
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl font-black mb-5 font-[Manrope] tracking-tight">
            Our Work & Fleet in Action
          </h1>
          <p className="hero-desc text-slate-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            Explore authentic images from our recent moves across Navi Mumbai, Mumbai, Thane, and intercity destinations. Every package is sealed with care and transported safely.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-a-quote" className="btn-primary">
              Get Free Moving Quote <ArrowRight size={16} />
            </Link>
            <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-white">
              <Phone size={16} /> Call {PHONE_PRIMARY}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={16} /> WhatsApp Photos
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 bg-[#F5F7FB]">
        <div className="container-wide">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
            {categories.map(cat => {
              const count = cat.id === 'all'
                ? galleryItems.length
                : galleryItems.filter(i => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#092B70] text-white shadow-md transform -translate-y-0.5'
                      : 'bg-white text-[#17233D] hover:bg-gray-100 border border-[#E5EAF2]'
                  }`}
                >
                  {cat.label} <span className="opacity-75 text-xs">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#E5EAF2] transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-1.5"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
                      <Sparkles size={12} className="text-[#F7BD38]" /> Click to view full image
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-[#092B70]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm shadow">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-bold text-[#17233D] text-sm md:text-base leading-snug group-hover:text-[#F47721] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-[#667085] mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#E5EAF2] flex items-center justify-between text-xs text-[#667085]">
                    <span className="flex items-center gap-1 text-[#092B70] font-semibold">
                      <MapPin size={12} className="text-[#F47721]" /> {item.location}
                    </span>
                    <span className="text-[#F47721] font-bold group-hover:translate-x-0.5 transition-transform">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust & CTA Strip */}
          <div className="mt-16 bg-gradient-to-r from-[#061B45] to-[#164AA8] rounded-2xl p-8 md:p-10 text-white shadow-lg border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#F7BD38] font-bold text-xs uppercase tracking-wider mb-2">
                  <ShieldCheck size={16} /> 100% Verified Quality Care
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold font-[Manrope]">
                  Need Safe Packing & Shifting For Your Home or Office?
                </h3>
                <p className="text-white/80 text-sm mt-2">
                  Get premium multi-layer packing materials, experienced staff, and GPS-monitored transportation at affordable rates in Navi Mumbai.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/get-a-quote" className="btn-primary text-sm px-6 py-3">
                  Calculate Move Cost <ArrowRight size={14} />
                </Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm px-5 py-3">
                  <MessageCircle size={15} /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow"
            >
              <X size={18} />
            </button>

            {/* Left/Prev Arrow */}
            <button
              onClick={() => navigateLightbox('prev')}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right/Next Arrow */}
            <button
              onClick={() => navigateLightbox('next')}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 md:right-[320px] w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow"
            >
              <ChevronRight size={20} />
            </button>

            {/* Image Preview */}
            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[460px]">
              <SafeImage
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            {/* Sidebar Details */}
            <div className="w-full md:w-80 p-6 flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-[#E5EAF2]">
              <div>
                <span className="inline-block bg-[#F47721]/10 text-[#F47721] font-bold text-xs px-2.5 py-1 rounded-md mb-2">
                  {activeModalItem.categoryLabel}
                </span>
                <h3 className="text-lg font-bold text-[#17233D] font-[Manrope] leading-snug">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs text-[#667085] mt-3 leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-[#092B70] font-semibold bg-[#F5F7FB] p-2.5 rounded-lg border border-[#E5EAF2]">
                  <MapPin size={14} className="text-[#F47721]" />
                  <span>{activeModalItem.location}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5EAF2] flex flex-col gap-2">
                <Link to="/get-a-quote" className="btn-primary text-xs py-2.5 text-center justify-center">
                  Book This Service
                </Link>
                <a
                  href={`tel:+91${PHONE_PRIMARY}`}
                  className="btn-secondary text-xs py-2 text-center justify-center border border-[#092B70] text-[#092B70]"
                >
                  <Phone size={13} /> Call {PHONE_PRIMARY}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
