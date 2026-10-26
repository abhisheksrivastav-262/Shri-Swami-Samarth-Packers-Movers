import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_PRIMARY, WHATSAPP_LINK } from '@/data/constants';

export default function MobileContactBar() {
  return (
    <div className="mobile-contact-bar md:hidden" role="navigation" aria-label="Mobile contact bar">
      <a href={`tel:+91${PHONE_PRIMARY}`} aria-label={`Call ${PHONE_PRIMARY}`}>
        <Phone size={18} />
        <span>Call Us</span>
      </a>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
      <Link to="/get-a-quote" aria-label="Get a free quote">
        <ArrowRight size={18} />
        <span>Get Quote</span>
      </Link>
    </div>
  );
}
