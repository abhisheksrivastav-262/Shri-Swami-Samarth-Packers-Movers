import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_PRIMARY, WHATSAPP_LINK } from '@/data/constants';

export default function FloatingButtons() {
  return (
    <>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href={`tel:+91${PHONE_PRIMARY}`}
        className="call-float"
        aria-label={`Call ${PHONE_PRIMARY}`}
        title="Call us"
      >
        <Phone size={22} />
      </a>
    </>
  );
}
