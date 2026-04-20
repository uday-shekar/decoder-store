import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        
        {/* Left Side: Info */}
        <div className="space-y-12">
          <header>
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-gray-400">Get in touch</span>
            <h1 className="text-7xl md:text-8xl font-serif mt-4 leading-tight">Let's start a conversation.</h1>
          </header>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="mt-1 text-gray-400"><Mail size={20} strokeWidth={1.2} /></div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Email Us</p>
                <p className="text-xl font-serif">hello@decode-sneakers.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="mt-1 text-gray-400"><MapPin size={20} strokeWidth={1.2} /></div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Visit the Studio</p>
                <p className="text-xl font-serif">124 Culture St, Soho<br />New York, NY 10012</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="mt-1 text-gray-400"><Phone size={20} strokeWidth={1.2} /></div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Call Us</p>
                <p className="text-xl font-serif">+1 (555) 000-8888</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-neutral-50 p-8 md:p-16 border border-neutral-100"
        >
          <form className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" 
                  placeholder="John"
                />
              </div>
              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" 
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black transition-colors" 
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-2">Message</label>
              <textarea 
                rows="4" 
                className="w-full bg-transparent border-b border-gray-300 py-2 outline-none focus:border-black transition-colors resize-none" 
                placeholder="How can we help?"
              />
            </div>

            <button className="w-full bg-black text-white py-5 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-neutral-800 transition-all">
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}