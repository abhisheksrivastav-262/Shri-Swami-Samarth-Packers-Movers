import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import { COMPANY_NAME, PHONE_PRIMARY, ADDRESS, CURRENT_YEAR } from '@/data/constants';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title={`Privacy Policy | ${COMPANY_NAME}`}
        description={`Privacy Policy of ${COMPANY_NAME}. Learn how we handle your moving enquiry data, contact information, and ensure confidentiality.`}
        canonical="/privacy-policy"
      />

      <section className="bg-gradient-to-br from-[#061B45] to-[#164AA8] py-16 text-white">
        <div className="container max-w-4xl text-center">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Shield size={24} className="text-[#F7BD38]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-[Manrope]">Privacy Policy</h1>
          <p className="text-white/80 mt-2 text-sm">Last updated: {CURRENT_YEAR}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-4xl space-y-8 text-[#17233D] text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#092B70] mb-3 font-[Manrope]">1. Introduction</h2>
            <p className="text-[#667085]">
              At <strong>{COMPANY_NAME}</strong>, we respect your privacy and are committed to protecting the personal information you share with us when using our relocation services, requesting moving estimates, or contacting us through our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#092B70] mb-3 font-[Manrope]">2. Information We Collect</h2>
            <p className="text-[#667085] mb-2">When you submit an enquiry or quotation request, we may collect:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#667085]">
              <li>Contact details: Full Name, Mobile Number, Email Address.</li>
              <li>Move specifics: Pickup and delivery addresses, preferred moving dates, floor access, elevator availability.</li>
              <li>Inventory information: Size of house/office, special furniture, appliances, or vehicle details.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#092B70] mb-3 font-[Manrope]">3. How We Use Your Information</h2>
            <p className="text-[#667085] mb-2">Your information is used strictly to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#667085]">
              <li>Prepare and provide accurate relocation quotations and estimates.</li>
              <li>Coordinate vehicle logistics, packing materials, and moving crews.</li>
              <li>Communicate updates, schedule surveys, and confirm move bookings.</li>
              <li>Respond to your enquiries via telephone, WhatsApp, or email.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#092B70] mb-3 font-[Manrope]">4. Data Protection & Sharing</h2>
            <p className="text-[#667085]">
              We do not sell, rent, or trade your personal data with third-party advertisers or marketing agencies. Your information is only accessed by authorized personnel and operations staff directly involved in fulfilling your move.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#092B70] mb-3 font-[Manrope]">5. Contact Us</h2>
            <p className="text-[#667085]">
              For any questions regarding our Privacy Policy or data handling practices, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-[#F5F7FB] rounded-xl border border-[#E5EAF2] text-sm">
              <p><strong>{COMPANY_NAME}</strong></p>
              <p className="text-[#667085] mt-1">{ADDRESS}</p>
              <p className="text-[#667085] mt-1">Contact: {PHONE_PRIMARY}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E5EAF2]">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#092B70] hover:text-[#F47721]">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
