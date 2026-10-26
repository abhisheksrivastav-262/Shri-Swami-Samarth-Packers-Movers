import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import SEOHead from '@/components/common/SEOHead';
import { COMPANY_NAME, PHONE_PRIMARY, ADDRESS, CURRENT_YEAR } from '@/data/constants';

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title={`Terms & Conditions | ${COMPANY_NAME}`}
        description={`Terms and Conditions for shifting and relocation services provided by ${COMPANY_NAME}, Navi Mumbai.`}
        canonical="/terms"
      />

      <section className="bg-gradient-to-br from-[#061B45] to-[#164AA8] py-16 text-white">
        <div className="container max-w-4xl text-center">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <FileText size={24} className="text-[#F7BD38]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold font-[Manrope]">Terms & Conditions</h1>
          <p className="text-white/80 mt-2 text-sm">Effective as of {CURRENT_YEAR}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-4xl space-y-8 text-[#17233D] text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#092B70] mb-3 font-[Manrope]">1. Estimates & Quotations</h2>
            <p className="text-[#667085]">
              Preliminary quotes provided online or via phone are estimates based on the information and inventory list supplied by the customer. Final pricing is finalized based on actual volume, packing materials consumed, floor levels, lift availability, and specific route constraints.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#092B70] mb-3 font-[Manrope]">2. Valuables & Prohibited Goods</h2>
            <p className="text-[#667085] mb-2">Customers are strictly advised to retain personal custody of high-value items, including:</p>
            <ul className="list-disc list-inside space-y-1.5 text-[#667085]">
              <li>Jewellery, precious metals, and cash / currency notes.</li>
              <li>Official certificates, title deeds, passbooks, and identity cards.</li>
              <li>Hazardous, combustible, explosive, or unlawful materials (gas cylinders must be emptied prior to movement).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#092B70] mb-3 font-[Manrope]">3. Customer Obligations</h2>
            <ul className="list-disc list-inside space-y-1.5 text-[#667085]">
              <li>Securing permissions / gate passes from residential societies or commercial facility management.</li>
              <li>Disconnection of water purifiers, AC units, and major fixed electrical fixtures before packing crew arrival.</li>
              <li>Inspection and sign-off on the inventory list at pickup and delivery.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#092B70] mb-3 font-[Manrope]">4. Payment Terms</h2>
            <p className="text-[#667085]">
              An advance booking deposit may be requested to block vehicle and crew schedules. The remaining balance is payable upon successful loading or before unloading at the destination as agreed upon in the move contract.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#092B70] mb-3 font-[Manrope]">5. Contact & Support</h2>
            <p className="text-[#667085]">
              For any clarification regarding these terms, please contact:
            </p>
            <div className="mt-3 p-4 bg-[#F5F7FB] rounded-xl border border-[#E5EAF2] text-sm">
              <p><strong>{COMPANY_NAME}</strong></p>
              <p className="text-[#667085] mt-1">{ADDRESS}</p>
              <p className="text-[#667085] mt-1">Phone: {PHONE_PRIMARY}</p>
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
