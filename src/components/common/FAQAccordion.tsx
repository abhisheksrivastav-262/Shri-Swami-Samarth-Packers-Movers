import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-[#E5EAF2]" role="list">
      {faqs.map((faq, idx) => (
        <div key={idx} className="faq-item" role="listitem">
          <button
            className="faq-question w-full text-left"
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-answer-${idx}`}
            id={`faq-question-${idx}`}
          >
            <span>{faq.question}</span>
            <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-[#F47721] text-white' : 'bg-[#F5F7FB] text-[#667085]'}`}>
              {openIndex === idx ? <Minus size={14}/> : <Plus size={14}/>}
            </span>
          </button>
          <div
            id={`faq-answer-${idx}`}
            role="region"
            aria-labelledby={`faq-question-${idx}`}
            className="faq-answer"
            style={{ maxHeight: openIndex === idx ? '600px' : '0' }}
          >
            <div className="faq-answer-inner">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
