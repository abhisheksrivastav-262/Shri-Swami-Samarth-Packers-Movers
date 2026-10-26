import { useState } from 'react';
import { Phone, MapPin, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import { COMPANY_NAME, PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_LINK, ADDRESS } from '@/data/constants';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  service: string;
  pickupLocation: string;
  destinationLocation: string;
  movingDate: string;
  moveSize: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const TODAY_DATE = new Date().toISOString().split('T')[0];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '', mobile: '', email: '', service: '', pickupLocation: '',
    destinationLocation: '', movingDate: '', moveSize: '', message: '', consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.mobile.match(/^[6-9]\d{9}$/)) errs.mobile = 'Enter a valid 10-digit mobile number';
    if (!formData.pickupLocation.trim()) errs.pickupLocation = 'Pickup location is required';
    if (!formData.destinationLocation.trim()) errs.destinationLocation = 'Destination location is required';
    if (!formData.consent) errs.consent = 'Please accept the privacy policy to continue';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // ── Backend Integration Point ────────────────────────────────
    // Connect this form to your backend, email service (e.g., EmailJS,
    // Formspree, or your own Node/PHP API) to process enquiries.
    // Example: await fetch('/api/enquiry', { method:'POST', body: JSON.stringify(formData) })
    // ─────────────────────────────────────────────────────────────

    await new Promise(r => setTimeout(r, 1200)); // Simulated delay
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) setErrors(prev => { const n = {...prev}; delete n[name]; return n; });
  };

  return (
    <>
      <SEOHead
        title={`Contact Us | ${COMPANY_NAME} | Navi Mumbai`}
        description="Contact Shri Swami Samarth Packers & Movers in Digha, Navi Mumbai. Call 9833951313, WhatsApp, or fill the enquiry form for house shifting, office relocation, and moving services."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#061B45] to-[#164AA8] py-20">
        <div className="container text-center">
          <span className="eyebrow text-[#F7BD38]">Get in Touch</span>
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold mb-4">Contact Our Moving Team</h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Call us, WhatsApp us, or fill in the form below — we'll get back to you promptly.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#17233D] mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-[#F47721]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#F47721]"/>
                  </div>
                  <div>
                    <div className="font-bold text-[#17233D] text-sm mb-1">Phone Numbers</div>
                    <a href={`tel:+91${PHONE_PRIMARY}`} className="block text-[#667085] text-sm hover:text-[#F47721] transition-colors">{PHONE_PRIMARY}</a>
                    <a href={`tel:+91${PHONE_SECONDARY}`} className="block text-[#667085] text-sm hover:text-[#F47721] transition-colors">{PHONE_SECONDARY}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-[#25D366]"/>
                  </div>
                  <div>
                    <div className="font-bold text-[#17233D] text-sm mb-1">WhatsApp</div>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[#667085] text-sm hover:text-[#25D366] transition-colors">{PHONE_PRIMARY}</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-[#164AA8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#164AA8]"/>
                  </div>
                  <div>
                    <div className="font-bold text-[#17233D] text-sm mb-1">Location</div>
                    <p className="text-[#667085] text-sm">{ADDRESS}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a href={`tel:+91${PHONE_PRIMARY}`} className="btn-primary justify-center">
                  <Phone size={14}/> Call {PHONE_PRIMARY}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                  <MessageCircle size={14}/> WhatsApp Us
                </a>
              </div>

              <div className="mt-8 bg-[#F5F7FB] rounded-xl p-5 border border-[#E5EAF2]">
                <p className="text-xs text-[#667085] font-semibold uppercase tracking-wide mb-2">Company</p>
                <p className="text-[#17233D] font-bold text-sm">{COMPANY_NAME}</p>
                <p className="text-[#667085] text-xs mt-1">{ADDRESS}</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 bg-[#168A52]/10 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-[#168A52]"/>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#17233D] mb-3">Enquiry Received!</h3>
                  <p className="text-[#667085] max-w-md mb-2">
                    Thank you for reaching out. Our team will review your details and get back to you.
                  </p>
                  <p className="text-[#667085] text-sm mb-6">
                    For immediate assistance, call us at{' '}
                    <a href={`tel:+91${PHONE_PRIMARY}`} className="text-[#F47721] font-semibold">{PHONE_PRIMARY}</a>
                  </p>
                  <p className="text-xs text-[#667085] italic bg-[#F5F7FB] px-4 py-2 rounded-lg border border-[#E5EAF2]">
                    Note: This form is currently in demo mode. Backend integration is required to deliver submissions to your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form">
                  <h2 className="text-2xl font-extrabold text-[#17233D] mb-6">Send Us an Enquiry</h2>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="Your full name" value={formData.name} onChange={handleChange} autoComplete="name"/>
                      {errors.name && <div className="form-error" role="alert"><AlertCircle size={12}/>{errors.name}</div>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="mobile">Mobile Number *</label>
                      <input id="mobile" name="mobile" type="tel" className={`form-input ${errors.mobile ? 'error' : ''}`}
                        placeholder="10-digit mobile number" value={formData.mobile} onChange={handleChange} maxLength={10} autoComplete="tel"/>
                      {errors.mobile && <div className="form-error" role="alert"><AlertCircle size={12}/>{errors.mobile}</div>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="email">Email Address (optional)</label>
                      <input id="email" name="email" type="email" className="form-input"
                        placeholder="your@email.com" value={formData.email} onChange={handleChange} autoComplete="email"/>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="service">Service Required</label>
                      <select id="service" name="service" className="form-input" value={formData.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        <option>House Shifting</option>
                        <option>Office Relocation</option>
                        <option>Local Shifting</option>
                        <option>Domestic Shifting</option>
                        <option>Car Transportation</option>
                        <option>Bike Transportation</option>
                        <option>Packing & Loading</option>
                        <option>Unloading</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="pickupLocation">Pickup Location *</label>
                      <input id="pickupLocation" name="pickupLocation" type="text" className={`form-input ${errors.pickupLocation ? 'error' : ''}`}
                        placeholder="City / Locality / Area" value={formData.pickupLocation} onChange={handleChange}/>
                      {errors.pickupLocation && <div className="form-error" role="alert"><AlertCircle size={12}/>{errors.pickupLocation}</div>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="destinationLocation">Destination Location *</label>
                      <input id="destinationLocation" name="destinationLocation" type="text" className={`form-input ${errors.destinationLocation ? 'error' : ''}`}
                        placeholder="City / Locality / Area" value={formData.destinationLocation} onChange={handleChange}/>
                      {errors.destinationLocation && <div className="form-error" role="alert"><AlertCircle size={12}/>{errors.destinationLocation}</div>}
                    </div>
                    <div>
                      <label className="form-label" htmlFor="movingDate">Preferred Moving Date</label>
                      <input id="movingDate" name="movingDate" type="date" className="form-input"
                        min={TODAY_DATE} value={formData.movingDate} onChange={handleChange}/>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="moveSize">Approximate Move Size</label>
                      <select id="moveSize" name="moveSize" className="form-input" value={formData.moveSize} onChange={handleChange}>
                        <option value="">Select move size</option>
                        <option>Studio / 1 Room</option>
                        <option>1 BHK</option>
                        <option>2 BHK</option>
                        <option>3 BHK</option>
                        <option>4+ BHK / Large Home</option>
                        <option>Office</option>
                        <option>Vehicle Only</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="form-label" htmlFor="message">Additional Requirements</label>
                    <textarea id="message" name="message" rows={4} className="form-input resize-none"
                      placeholder="Any special requirements, fragile items, floor details, etc."
                      value={formData.message} onChange={handleChange}/>
                  </div>
                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" name="consent" className="mt-1 w-4 h-4 rounded border-[#E5EAF2] text-[#F47721] accent-[#F47721]"
                        checked={formData.consent} onChange={handleChange}/>
                      <span className="text-sm text-[#667085] leading-relaxed">
                        I agree that my contact details may be used to respond to this enquiry.
                        I have read the <a href="/privacy-policy" className="text-[#F47721] underline" target="_blank">Privacy Policy</a>.
                      </span>
                    </label>
                    {errors.consent && <div className="form-error mt-1" role="alert"><AlertCircle size={12}/>{errors.consent}</div>}
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto justify-center min-w-[200px]" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Send Enquiry'}
                  </button>
                  <p className="text-xs text-[#667085] mt-3 italic">
                    * Backend integration required to deliver form submissions. See documentation for setup instructions.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
