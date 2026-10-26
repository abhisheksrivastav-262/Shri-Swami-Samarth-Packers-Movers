export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  features: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    id: 'house-shifting',
    slug: 'house-shifting',
    name: 'House Shifting',
    shortDescription: 'Safe and organised household relocation with expert packing, loading, transport, and unloading.',
    fullDescription: 'Moving your home is one of life\'s most significant transitions. Our house shifting service covers every aspect of your household move — from careful packing of fragile items to secure loading, transportation, and unloading at your new home.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    icon: 'Home',
    features: [
      'Careful packing of all household items',
      'Furniture wrapping and protection',
      'Organized loading by trained movers',
      'Safe transportation to destination',
      'Unloading and placement at new home',
      'Assistance with fragile and valuable items',
    ],
    faqs: [
      { question: 'How long does a typical house shift take?', answer: 'The duration depends on the size of your household, distance, and specific requirements. After understanding your move details, we can provide a better estimate of the time involved.' },
      { question: 'Do you pack all types of household items?', answer: 'Yes, we pack a wide range of household items including furniture, appliances, kitchenware, clothing, and general household goods. Please let us know if you have specific items requiring special care.' },
      { question: 'Can I get a quotation before the move?', answer: 'Absolutely. Contact us with your pickup location, destination, approximate household size, and preferred date, and our team will provide you with a moving estimate.' },
    ],
    metaTitle: 'House Shifting Services in Navi Mumbai | Shri Swami Samarth Packers & Movers',
    metaDescription: 'Professional house shifting services in Navi Mumbai and Mumbai. Expert packing, loading, transport, and unloading of all household items. Contact us for a free quote.',
  },
  {
    id: 'office-relocation',
    slug: 'office-relocation',
    name: 'Office Relocation',
    shortDescription: 'Efficient office moves with careful handling of furniture, equipment, and business assets.',
    fullDescription: 'Relocating a business requires careful coordination to minimise disruption. Our office relocation service is designed to handle your office furniture, equipment, and supplies with care, helping your business transition smoothly to its new location.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    icon: 'Building2',
    features: [
      'Office furniture disassembly and packing',
      'Equipment and electronics handling',
      'Organized labelling and loading',
      'Scheduled business-friendly moves',
      'Unloading and placement at new office',
      'Coordination to minimise business downtime',
    ],
    faqs: [
      { question: 'Can you handle office moves on weekends?', answer: 'We can discuss scheduling options based on your business requirements. Weekend moves may be possible depending on availability. Please enquire with us directly.' },
      { question: 'Do you handle IT equipment?', answer: 'We can help with the physical transportation of office equipment. For sensitive IT hardware, we recommend you coordinate with your IT team for safe disconnection and reconnection.' },
      { question: 'How do I get an office relocation quote?', answer: 'Contact us with details of your office location, destination, approximate scale of the move, and your preferred timeline. We\'ll get back to you with next steps.' },
    ],
    metaTitle: 'Office Relocation Services in Navi Mumbai | Shri Swami Samarth Packers & Movers',
    metaDescription: 'Reliable office relocation services in Navi Mumbai. Organised handling of office furniture, equipment, and business assets. Request a business move quote today.',
  },
  {
    id: 'local-domestic-shifting',
    slug: 'local-domestic-shifting',
    name: 'Local & Domestic Shifting',
    shortDescription: 'Convenient local moves within Navi Mumbai and intercity domestic relocation across India.',
    fullDescription: 'Whether you\'re moving across the street or to another city, we provide organised shifting services for both local moves within Navi Mumbai and Mumbai, as well as intercity and domestic relocation across India.',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80',
    icon: 'MapPin',
    features: [
      'Local moves within Navi Mumbai and Mumbai',
      'Intercity shifting to major Indian cities',
      'Organised packing and loading',
      'Route planning for efficient transport',
      'Unloading and placement at destination',
      'Flexible scheduling options',
    ],
    faqs: [
      { question: 'Do you provide services outside Navi Mumbai?', answer: 'Yes, we assist with domestic relocation across India, subject to availability. Please share your pickup and destination locations when enquiring.' },
      { question: 'How is the quotation calculated for long-distance moves?', answer: 'Quotations for intercity moves depend on several factors including distance, volume of goods, type of items, and access conditions at both locations.' },
      { question: 'How early should I book for a domestic move?', answer: 'We recommend reaching out as early as possible to ensure your preferred date is available and to allow adequate planning time.' },
    ],
    metaTitle: 'Local & Domestic Shifting Services Navi Mumbai | Shri Swami Samarth Packers & Movers',
    metaDescription: 'Local shifting in Navi Mumbai and domestic relocation across India. Experienced packers and movers for intercity moves. Get your free moving estimate.',
  },
  {
    id: 'car-bike-transportation',
    slug: 'car-bike-transportation',
    name: 'Car & Bike Transportation',
    shortDescription: 'Vehicle transportation coordination with protective handling for cars and motorcycles.',
    fullDescription: 'Transporting your vehicle to a new city requires careful handling and proper coordination. We facilitate car and bike transportation services, helping you arrange safe and organised transport for your vehicles alongside your household move or as a standalone service.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    icon: 'Car',
    features: [
      'Car transportation enquiries and coordination',
      'Motorcycle and scooter transport',
      'Protective handling procedures',
      'Pickup and delivery coordination',
      'Documentation assistance',
      'Combined moves with household goods',
    ],
    faqs: [
      { question: 'What vehicles can you transport?', answer: 'We handle transportation of passenger cars and motorcycles. Please contact us with details of your specific vehicle for availability confirmation.' },
      { question: 'How long does vehicle transportation take?', answer: 'Transit duration depends on the origin and destination locations. We can give you a better indication once we understand your specific requirements.' },
      { question: 'What documents are required for vehicle transportation?', answer: 'Typically, vehicle registration documents may be required. We will guide you on documentation requirements when you confirm your booking.' },
    ],
    metaTitle: 'Car & Bike Transportation Services Navi Mumbai | Shri Swami Samarth Packers & Movers',
    metaDescription: 'Vehicle transportation services in Navi Mumbai. Safe car and bike transport coordination with protective handling. Contact us for a vehicle transport quote.',
  },
  {
    id: 'packing-loading',
    slug: 'packing-loading',
    name: 'Packing & Loading',
    shortDescription: 'Expert packing using quality materials, organised loading for a safe and efficient move.',
    fullDescription: 'Proper packing is the foundation of a successful move. Our packing and loading service ensures your belongings are carefully packed using appropriate materials, then loaded securely for transport. Good packing protects your items and reduces the chance of damage during transit.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    icon: 'Package',
    features: [
      'Systematic packing of household goods',
      'Carton boxing of loose items',
      'Protective wrapping of furniture',
      'Special care for fragile and breakable items',
      'Labelling for easy identification',
      'Organised and efficient loading',
    ],
    faqs: [
      { question: 'What packing materials do you use?', answer: 'We use carton boxes, protective wrapping materials, and suitable packing supplies to secure your belongings for transport.' },
      { question: 'Can I use my own packing boxes?', answer: 'You are welcome to provide your own boxes. Please let us know in advance so we can plan the loading accordingly.' },
      { question: 'Is packing included in the house shifting service?', answer: 'Packing may be included as part of a combined service. Please discuss your specific requirements when requesting a quotation.' },
    ],
    metaTitle: 'Packing & Loading Services Navi Mumbai | Shri Swami Samarth Packers & Movers',
    metaDescription: 'Professional packing and loading services in Navi Mumbai. Expert handling of all household items with quality packing materials. Request a packing service quote.',
  },
  {
    id: 'unloading',
    slug: 'unloading',
    name: 'Unloading',
    shortDescription: 'Careful unloading, item placement, and unpacking assistance at your new location.',
    fullDescription: 'The final step of your move is just as important as the first. Our unloading service ensures your belongings are carefully unloaded at your new home or office, placed according to your instructions, and unpacked where the service is included in your agreement.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    icon: 'ArrowDownToLine',
    features: [
      'Careful unloading of all items',
      'Placement according to customer instructions',
      'Handling of heavy and bulky furniture',
      'Coordination of unloading sequence',
      'Unpacking assistance where included',
      'Post-move check of delivered items',
    ],
    faqs: [
      { question: 'Do you place furniture in specific rooms?', answer: 'Yes, our team will place items in the rooms you specify during unloading. Please be available to guide the team on placement preferences.' },
      { question: 'Is unpacking included in the service?', answer: 'Unpacking assistance may be available as part of certain service packages. Please discuss this requirement when you book.' },
      { question: 'What if something needs to be moved after unloading?', answer: 'Our team can accommodate reasonable repositioning of items during the unloading process. Please communicate your preferences before unloading begins.' },
    ],
    metaTitle: 'Unloading Services Navi Mumbai | Shri Swami Samarth Packers & Movers',
    metaDescription: 'Professional unloading services in Navi Mumbai. Careful placement of your belongings with unpacking assistance available. Contact us for moving help.',
  },
];
