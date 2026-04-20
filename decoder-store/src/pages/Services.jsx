import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "Express dispatch within 24h. Tracked worldwide shipping with insurance on every order.",
    icon: <Truck size={32} strokeWidth={1.2} />
  },
  {
    id: 2,
    title: "Easy Returns",
    description: "30-day returns, no questions asked. Free return shipping on all domestic orders.",
    icon: <RotateCcw size={32} strokeWidth={1.2} />
  },
  {
    id: 3,
    title: "100% Authentic",
    description: "Every pair verified by in-house authentication experts. Certificate included with every box.",
    icon: <ShieldCheck size={32} strokeWidth={1.2} />
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Real humans, real answers — any time. Reach us via chat, email or phone, day or night.",
    icon: <Headphones size={32} strokeWidth={1.2} />
  }
];

export default function Services() {
  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-6">
      {/* Page Header */}
      <div className="text-center mb-24">
        <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-gray-400">Step Inside</span>
        <h1 className="text-7xl md:text-8xl font-serif mt-4 mb-6">Designed around you.</h1>
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
          Service that matches the product. Every step — from order to doorstep — handled with care.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-20 flex flex-col items-start space-y-6 group hover:bg-neutral-50 transition-colors"
          >
            <div className="text-brand-black mb-4 transition-transform duration-500 group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-3xl font-serif">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Trust Banner (matching the reference theme) */}
      <div className="mt-32 p-16 bg-brand-black text-white text-center">
        <h2 className="text-4xl font-serif mb-8">Ready to find your pair?</h2>
        <button className="bg-white text-black px-12 py-4 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-neutral-200 transition">
          Explore the Shop →
        </button>
      </div>
    </div>
  );
}