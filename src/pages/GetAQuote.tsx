import { useState, useId } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, ArrowLeft, Phone, MessageCircle,
  Home, Building2, Car, Package, Shield, Calculator, Sparkles, AlertCircle
} from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import { COMPANY_NAME, PHONE_PRIMARY, PHONE_SECONDARY } from '@/data/constants';

interface QuoteState {
  moveType: string;
  size: string;
  pickupLocation: string;
  pickupFloor: string;
  pickupElevator: string;
  destinationLocation: string;
  destinationFloor: string;
  destinationElevator: string;
  moveDate: string;
  vehicleType: string;
  packingType: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const moveTypes = [
  { id: 'household', label: 'Household Shifting', icon: <Home size={22} />, desc: 'Apartment, Flat, or Independent House' },
  { id: 'office', label: 'Office Relocation', icon: <Building2 size={22} />, desc: 'Office desks, chairs, tech & files' },
  { id: 'vehicle', label: 'Vehicle Transportation', icon: <Car size={22} />, desc: 'Cars, bikes & two-wheelers' },
  { id: 'few-items', label: 'Few Items / Mini Move', icon: <Package size={22} />, desc: 'Few furniture pieces, student or bachelor move' },
];

const householdSizes = [
  { id: '1rk-1bhk', label: '1 RK / 1 BHK', estLocal: '₹4,500 – ₹7,500' },
  { id: '2bhk', label: '2 BHK', estLocal: '₹7,500 – ₹13,000' },
  { id: '3bhk', label: '3 BHK', estLocal: '₹12,000 – ₹19,000' },
  { id: '4bhk-plus', label: '4+ BHK / Villa', estLocal: '₹18,000 – ₹30,000+' },
];

const officeSizes = [
  { id: 'small-office', label: 'Small Office (1 - 10 Seats)', estLocal: '₹8,000 – ₹15,000' },
  { id: 'medium-office', label: 'Medium Office (10 - 30 Seats)', estLocal: '₹15,000 – ₹35,000' },
  { id: 'large-office', label: 'Corporate Office (30+ Seats)', estLocal: 'Custom Survey Required' },
];

const vehicleTypes = [
  { id: 'bike', label: 'Two Wheeler / Bike / Scooter', estLocal: '₹2,000 – ₹4,500' },
  { id: 'car-hatchback', label: 'Hatchback / Small Car', estLocal: '₹5,000 – ₹9,000' },
  { id: 'car-sedan-suv', label: 'Sedan / SUV / Luxury Car', estLocal: '₹7,000 – ₹14,000' },
  { id: 'bike-car', label: 'Both Bike & Car', estLocal: '₹8,500 – ₹16,500' },
];

export default function GetAQuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const pickupId = useId();
  const destId = useId();
  const dateId = useId();
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const notesId = useId();

  const [form, setForm] = useState<QuoteState>({
    moveType: 'household',
    size: '2bhk',
    pickupLocation: '',
    pickupFloor: 'Ground',
    pickupElevator: 'Yes',
    destinationLocation: '',
    destinationFloor: 'Ground',
    destinationElevator: 'Yes',
    moveDate: '',
    vehicleType: 'bike',
    packingType: 'Standard Multi-layer Packing',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const getActiveEstimate = () => {
    if (form.moveType === 'household') {
      const match = householdSizes.find(h => h.id === form.size);
      return match ? match.estLocal : '₹7,000 – ₹14,000';
    } else if (form.moveType === 'office') {
      const match = officeSizes.find(o => o.id === form.size);
      return match ? match.estLocal : 'Custom Quote';
    } else if (form.moveType === 'vehicle') {
      const match = vehicleTypes.find(v => v.id === form.vehicleType);
      return match ? match.estLocal : '₹3,000 – ₹8,000';
    }
    return '₹3,500 – ₹6,500';
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 2) {
      if (!form.pickupLocation.trim()) {
        newErrors.pickupLocation = 'Please enter your pickup location / area';
      }
      if (!form.destinationLocation.trim()) {
        newErrors.destinationLocation = 'Please enter your destination location / area';
      }
    } else if (currentStep === 4) {
      if (!form.name.trim()) {
        newErrors.name = 'Please enter your full name';
      }
      if (!form.phone.match(/^[6-9]\d{9}$/)) {
        newErrors.phone = 'Please enter a valid 10-digit mobile number';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    // Simulate submission delay
    await new Promise(r => setTimeout(r, 900));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_NAME}, I would like to get a moving quotation:\n` +
      `• Name: ${form.name || 'Customer'}\n` +
      `• Service: ${form.moveType} (${form.size || form.vehicleType})\n` +
      `• From: ${form.pickupLocation || 'Navi Mumbai'} (Floor: ${form.pickupFloor}, Lift: ${form.pickupElevator})\n` +
      `• To: ${form.destinationLocation || 'Destination'} (Floor: ${form.destinationFloor}, Lift: ${form.destinationElevator})\n` +
      `• Estimated Date: ${form.moveDate || 'Flexible'}\n` +
      `• Packing: ${form.packingType}\n` +
      (form.notes ? `• Notes: ${form.notes}\n` : '') +
      `Please provide your best price and availability.`
    );
    window.open(`https://wa.me/91${PHONE_PRIMARY}?text=${text}`, '_blank');
  };

  return (
    <>
      <SEOHead
        title="Get Free Moving Quote | Shri Swami Samarth Packers & Movers Navi Mumbai"
        description="Calculate moving cost and get an instant free quotation for house shifting, office relocation, or vehicle moving in Navi Mumbai, Mumbai, Thane and intercity. Call 9833951313."
        canonical="/get-a-quote"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#061B45] via-[#092B70] to-[#164AA8] py-16 md:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}/>
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#F7BD38] text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            <Calculator size={14} /> Quick & Accurate Relocation Calculator
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-[Manrope]">
            Get Your Free Moving Quote
          </h1>
          <p className="text-white/80 text-base md:text-lg">
            Tell us about your shifting requirements and get a transparent estimate with zero hidden fees.
          </p>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-xs md:text-sm text-white/90">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#25D366]" /> 100% Free Consultation</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#25D366]" /> No Obligation Quote</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#25D366]" /> Instant WhatsApp Assistance</span>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 md:py-16 bg-[#F5F7FB]">
        <div className="container max-w-4xl">
          {submitted ? (
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center border border-[#E5EAF2]">
              <div className="w-20 h-20 bg-green-100 text-[#168A52] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={44} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#092B70] mb-3 font-[Manrope]">
                Quotation Request Received!
              </h2>
              <p className="text-[#667085] max-w-lg mx-auto mb-6 text-base leading-relaxed">
                Thank you, <strong className="text-[#17233D]">{form.name}</strong>. Our relocation coordinator is reviewing your move details from <strong>{form.pickupLocation}</strong> to <strong>{form.destinationLocation}</strong> and will contact you shortly on <strong>{form.phone}</strong>.
              </p>

              <div className="p-5 bg-[#F5F7FB] rounded-xl border border-[#E5EAF2] max-w-md mx-auto mb-8 text-left">
                <div className="text-xs font-bold text-[#667085] uppercase tracking-wider mb-2">Estimated Local Price Range</div>
                <div className="text-2xl font-black text-[#F47721] font-[Manrope]">{getActiveEstimate()}</div>
                <div className="text-xs text-[#667085] mt-1">*Final quote confirmed after survey / item volume verification.</div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="btn-whatsapp px-6 py-3.5 inline-flex items-center gap-2 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={18} /> Confirm on WhatsApp Now
                </button>
                <a
                  href={`tel:+91${PHONE_PRIMARY}`}
                  className="btn-secondary px-6 py-3.5 inline-flex items-center gap-2 border border-[#092B70] text-[#092B70] font-semibold rounded-lg hover:bg-[#092B70] hover:text-white transition-colors"
                >
                  <Phone size={18} /> Call {PHONE_PRIMARY}
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5EAF2]">
                <Link to="/" className="text-sm font-semibold text-[#092B70] hover:text-[#F47721]">
                  ← Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl border border-[#E5EAF2] overflow-hidden">
              {/* Stepper Header */}
              <div className="border-b border-[#E5EAF2] bg-[#FAFCFF] px-6 py-4">
                <div className="flex items-center justify-between max-w-xl mx-auto">
                  {[
                    { s: 1, title: 'Move Type' },
                    { s: 2, title: 'Locations' },
                    { s: 3, title: 'Service Details' },
                    { s: 4, title: 'Contact' },
                  ].map(({ s, title }) => (
                    <div key={s} className="flex flex-col items-center">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                          step === s
                            ? 'bg-[#F47721] text-white shadow-md'
                            : step > s
                            ? 'bg-[#168A52] text-white'
                            : 'bg-[#E5EAF2] text-[#667085]'
                        }`}
                      >
                        {step > s ? '✓' : s}
                      </div>
                      <span className={`text-[11px] font-semibold mt-1 hidden sm:block ${step >= s ? 'text-[#092B70]' : 'text-[#667085]'}`}>
                        {title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6 md:p-10">
                {/* STEP 1: Move Type & Size */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-[#092B70] mb-2 font-[Manrope]">
                        Step 1: Select Type of Relocation
                      </h2>
                      <p className="text-sm text-[#667085]">
                        Choose the primary relocation service you require.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {moveTypes.map(m => (
                        <div
                          key={m.id}
                          onClick={() => setForm({ ...form, moveType: m.id })}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-4 ${
                            form.moveType === m.id
                              ? 'border-[#F47721] bg-orange-50/50 shadow-sm'
                              : 'border-[#E5EAF2] hover:border-gray-300'
                          }`}
                        >
                          <div className={`p-3 rounded-lg flex-shrink-0 ${form.moveType === m.id ? 'bg-[#F47721] text-white' : 'bg-[#092B70]/10 text-[#092B70]'}`}>
                            {m.icon}
                          </div>
                          <div>
                            <div className="font-bold text-[#17233D] text-sm md:text-base">{m.label}</div>
                            <div className="text-xs text-[#667085] mt-1">{m.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Household Size options */}
                    {form.moveType === 'household' && (
                      <div className="mt-8 pt-6 border-t border-[#E5EAF2]">
                        <label className="block text-sm font-bold text-[#17233D] mb-3">
                          Select Household Size:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {householdSizes.map(h => (
                            <button
                              type="button"
                              key={h.id}
                              onClick={() => setForm({ ...form, size: h.id })}
                              className={`p-3 rounded-xl border text-center transition-all ${
                                form.size === h.id
                                  ? 'border-[#092B70] bg-[#092B70] text-white font-bold shadow-md'
                                  : 'border-[#E5EAF2] text-[#17233D] hover:border-gray-400 bg-white'
                              }`}
                            >
                              <div className="text-sm">{h.label}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Office Size options */}
                    {form.moveType === 'office' && (
                      <div className="mt-8 pt-6 border-t border-[#E5EAF2]">
                        <label className="block text-sm font-bold text-[#17233D] mb-3">
                          Select Office Scale:
                        </label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {officeSizes.map(o => (
                            <button
                              type="button"
                              key={o.id}
                              onClick={() => setForm({ ...form, size: o.id })}
                              className={`p-3 rounded-xl border text-center transition-all ${
                                form.size === o.id
                                  ? 'border-[#092B70] bg-[#092B70] text-white font-bold shadow-md'
                                  : 'border-[#E5EAF2] text-[#17233D] hover:border-gray-400 bg-white'
                              }`}
                            >
                              <div className="text-sm">{o.label}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Vehicle Type options */}
                    {form.moveType === 'vehicle' && (
                      <div className="mt-8 pt-6 border-t border-[#E5EAF2]">
                        <label className="block text-sm font-bold text-[#17233D] mb-3">
                          Select Vehicle Category:
                        </label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {vehicleTypes.map(v => (
                            <button
                              type="button"
                              key={v.id}
                              onClick={() => setForm({ ...form, vehicleType: v.id })}
                              className={`p-3 rounded-xl border text-left transition-all ${
                                form.vehicleType === v.id
                                  ? 'border-[#092B70] bg-[#092B70] text-white font-bold shadow-md'
                                  : 'border-[#E5EAF2] text-[#17233D] hover:border-gray-400 bg-white'
                              }`}
                            >
                              <div className="text-sm">{v.label}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 2: Locations & Floor Access */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-[#092B70] mb-2 font-[Manrope]">
                        Step 2: Pickup & Delivery Locations
                      </h2>
                      <p className="text-sm text-[#667085]">
                        Provide exact or approximate areas to calculate distance and logistics.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Pickup */}
                      <div className="p-4 bg-[#F5F7FB] rounded-xl border border-[#E5EAF2] space-y-4">
                        <div className="font-bold text-[#092B70] flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#168A52]" />
                          Pickup Location (From)
                        </div>

                        <div>
                          <label htmlFor={pickupId} className="block text-xs font-semibold text-[#17233D] mb-1">
                            Area / Landmark / City *
                          </label>
                          <input
                            id={pickupId}
                            type="text"
                            placeholder="e.g. Digha, Airoli, Vashi, Ghansoli"
                            value={form.pickupLocation}
                            onChange={e => setForm({ ...form, pickupLocation: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#092B70] ${
                              errors.pickupLocation ? 'border-red-500' : 'border-[#E5EAF2]'
                            }`}
                          />
                          {errors.pickupLocation && (
                            <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.pickupLocation}
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-[#17233D] mb-1">Floor</label>
                            <select
                              value={form.pickupFloor}
                              onChange={e => setForm({ ...form, pickupFloor: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border border-[#E5EAF2] text-sm bg-white"
                            >
                              <option>Ground</option>
                              <option>1st - 3rd</option>
                              <option>4th - 7th</option>
                              <option>8th or higher</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#17233D] mb-1">Service Lift?</label>
                            <select
                              value={form.pickupElevator}
                              onChange={e => setForm({ ...form, pickupElevator: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border border-[#E5EAF2] text-sm bg-white"
                            >
                              <option>Yes (Available)</option>
                              <option>No (Stairs only)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Drop */}
                      <div className="p-4 bg-[#F5F7FB] rounded-xl border border-[#E5EAF2] space-y-4">
                        <div className="font-bold text-[#F47721] flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F47721]" />
                          Destination Location (To)
                        </div>

                        <div>
                          <label htmlFor={destId} className="block text-xs font-semibold text-[#17233D] mb-1">
                            Area / City / State *
                          </label>
                          <input
                            id={destId}
                            type="text"
                            placeholder="e.g. Thane, Pune, Bengaluru, Delhi"
                            value={form.destinationLocation}
                            onChange={e => setForm({ ...form, destinationLocation: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#092B70] ${
                              errors.destinationLocation ? 'border-red-500' : 'border-[#E5EAF2]'
                            }`}
                          />
                          {errors.destinationLocation && (
                            <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.destinationLocation}
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-[#17233D] mb-1">Floor</label>
                            <select
                              value={form.destinationFloor}
                              onChange={e => setForm({ ...form, destinationFloor: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border border-[#E5EAF2] text-sm bg-white"
                            >
                              <option>Ground</option>
                              <option>1st - 3rd</option>
                              <option>4th - 7th</option>
                              <option>8th or higher</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#17233D] mb-1">Service Lift?</label>
                            <select
                              value={form.destinationElevator}
                              onChange={e => setForm({ ...form, destinationElevator: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border border-[#E5EAF2] text-sm bg-white"
                            >
                              <option>Yes (Available)</option>
                              <option>No (Stairs only)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Packing & Move Date */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-[#092B70] mb-2 font-[Manrope]">
                        Step 3: Packing Preference & Moving Date
                      </h2>
                      <p className="text-sm text-[#667085]">
                        Choose how you would like your items packed and protected.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        { title: 'Standard Multi-layer Packing', desc: 'Corrugated sheets, bubble wrap for fragile items, stretch film, heavy-duty carton boxes.' },
                        { title: 'Premium Deluxe Packing', desc: 'Wooden crates for glassware/TV, 4-layer shockproof packing, custom wardrobe cartons, foam edging.' },
                        { title: 'Economical / Basic Packing', desc: 'Protection for heavy furniture and appliances; minor knick-knacks packed by customer.' },
                      ].map(p => (
                        <div
                          key={p.title}
                          onClick={() => setForm({ ...form, packingType: p.title })}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            form.packingType === p.title
                              ? 'border-[#092B70] bg-blue-50/50'
                              : 'border-[#E5EAF2] hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#17233D] text-sm md:text-base">{p.title}</span>
                            <span className={`w-4 h-4 rounded-full border-2 ${form.packingType === p.title ? 'border-[#092B70] bg-[#092B70]' : 'border-gray-300'}`} />
                          </div>
                          <p className="text-xs text-[#667085] mt-1">{p.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-[#E5EAF2]">
                      <div>
                        <label htmlFor={dateId} className="block text-xs font-semibold text-[#17233D] mb-1">
                          Preferred Moving Date
                        </label>
                        <input
                          id={dateId}
                          type="date"
                          value={form.moveDate}
                          onChange={e => setForm({ ...form, moveDate: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5EAF2] text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor={notesId} className="block text-xs font-semibold text-[#17233D] mb-1">
                          Special Requirements or Large Items (Optional)
                        </label>
                        <input
                          id={notesId}
                          type="text"
                          placeholder="e.g. Piano, 65-inch TV, Double-door fridge"
                          value={form.notes}
                          onChange={e => setForm({ ...form, notes: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5EAF2] text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Contact & Summary */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-[#092B70] mb-2 font-[Manrope]">
                        Step 4: Contact Details & Estimate
                      </h2>
                      <p className="text-sm text-[#667085]">
                        Where should we send your official moving estimate and slot availability?
                      </p>
                    </div>

                    {/* Estimate Card */}
                    <div className="p-5 bg-gradient-to-r from-[#061B45] to-[#164AA8] text-white rounded-xl shadow-md">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-[#F7BD38] font-bold flex items-center gap-1.5">
                            <Sparkles size={14} /> Estimated Base Relocation Price
                          </div>
                          <div className="text-3xl font-black mt-1 font-[Manrope]">{getActiveEstimate()}</div>
                          <div className="text-xs text-white/70 mt-1">
                            Based on {form.moveType} • {form.pickupLocation || 'Navi Mumbai'} → {form.destinationLocation || 'Destination'}
                          </div>
                        </div>
                        <div className="sm:text-right">
                          <span className="inline-block bg-[#F47721] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                            Special 10% Local Move Discount
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor={nameId} className="block text-xs font-semibold text-[#17233D] mb-1">
                          Full Name *
                        </label>
                        <input
                          id={nameId}
                          type="text"
                          placeholder="Your Name"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#092B70] ${
                            errors.name ? 'border-red-500' : 'border-[#E5EAF2]'
                          }`}
                        />
                        {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                      </div>

                      <div>
                        <label htmlFor={phoneId} className="block text-xs font-semibold text-[#17233D] mb-1">
                          Mobile Number *
                        </label>
                        <input
                          id={phoneId}
                          type="tel"
                          placeholder="10-digit Mobile Number"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#092B70] ${
                            errors.phone ? 'border-red-500' : 'border-[#E5EAF2]'
                          }`}
                        />
                        {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor={emailId} className="block text-xs font-semibold text-[#17233D] mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          id={emailId}
                          type="email"
                          placeholder="For written quote pdf copy"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5EAF2] text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Footer Buttons */}
                <div className="mt-8 pt-6 border-t border-[#E5EAF2] flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-5 py-2.5 rounded-lg border border-[#E5EAF2] text-sm font-semibold text-[#17233D] hover:bg-gray-50 inline-flex items-center gap-1.5"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary text-sm px-6 py-2.5 inline-flex items-center gap-1.5"
                    >
                      Continue <ArrowRight size={16} />
                    </button>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleWhatsAppRedirect}
                        className="btn-whatsapp text-xs sm:text-sm px-4 py-2.5 inline-flex items-center gap-1.5 font-bold"
                      >
                        <MessageCircle size={16} /> WhatsApp Quote
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary text-xs sm:text-sm px-5 py-2.5 inline-flex items-center gap-1.5"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Request'} <CheckCircle2 size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* Trust Guarantees */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-5 bg-white rounded-xl border border-[#E5EAF2]">
              <div className="w-10 h-10 bg-orange-100 text-[#F47721] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield size={20} />
              </div>
              <h3 className="font-bold text-[#17233D] text-sm">Safe & Insured Moves</h3>
              <p className="text-xs text-[#667085] mt-1">Multi-layer protective packing for fragile and heavy goods.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E5EAF2]">
              <div className="w-10 h-10 bg-blue-100 text-[#092B70] rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-bold text-[#17233D] text-sm">Transparent Pricing</h3>
              <p className="text-xs text-[#667085] mt-1">Written estimates with zero hidden charges or surprise costs.</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E5EAF2]">
              <div className="w-10 h-10 bg-green-100 text-[#168A52] rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone size={20} />
              </div>
              <h3 className="font-bold text-[#17233D] text-sm">Direct Phone Support</h3>
              <p className="text-xs text-[#667085] mt-1">Speak directly to our team: {PHONE_PRIMARY} / {PHONE_SECONDARY}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
