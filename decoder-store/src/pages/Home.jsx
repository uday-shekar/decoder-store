import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SneakerCard from '../components/SneakerCard';

// 1. All Image Imports
import heroImg from '../assets/hero.jpg'; 
import AboutImg from '../assets/img4.jpeg';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';

export default function Home() {
  // 2. Updated Sneakers Array with correct Image Imports
  const sneakers = [
    { id: 1, brand: 'NIKE', name: 'Dunk Low x Stüssy', price: 320, img: img1 },
    { id: 2, brand: 'JORDAN', name: 'Air Jordan 1 Mid', price: 285, img: img2 },
    { id: 3, brand: 'ADIDAS', name: 'Superstar Classic', price: 140, img: img3 },
    { id: 4, brand: 'CONVERSE', name: 'Chuck 70 Hi', price: 110, img: img5 }, // Using img5 for variety
  ];

  const brands = ["Converse", "Reebok", "Stüssy", "Nike", "Jordan", "Adidas"];

  return (
    <main className="bg-white selection:bg-black selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroImg} 
            className="w-full h-full object-cover opacity-60"
            alt="Hero"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.5em] text-[10px] mb-8 block font-bold"
          >
            New Drop · Season 2026
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif tracking-tighter leading-none mb-12"
          >
            Decode the<br/>Sneakers Culture
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/shop" className="bg-white text-black px-10 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-gray-200 transition">Shop Now</Link>
            <Link to="/about" className="border border-white text-white px-10 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition">Our Story</Link>
          </div>
        </div>
      </section>

      {/* 2. BRAND MARQUEE (Moving Text) */}
      <div className="py-20 border-b border-gray-100 overflow-hidden bg-white select-none">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24"
        >
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span key={i} className="text-7xl md:text-[120px] font-serif text-gray-100 hover:text-black transition-colors duration-500 cursor-default">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 3. NEW COLLECTION SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 py-32">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">SS26</span>
            <h2 className="text-6xl md:text-8xl font-serif mt-4">New Collection</h2>
          </div>
          <Link to="/shop" className="uppercase text-[10px] tracking-[0.2em] font-bold border-b border-black pb-1 hover:opacity-50 transition">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {sneakers.map((shoe, index) => (
            <motion.div
              key={shoe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SneakerCard shoe={shoe} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. ABOUT / MANIFESTO SECTION */}
      <section className="bg-black text-white py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-zinc-900 overflow-hidden"
          >
            <img 
              src={AboutImg} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Manifesto"
            />
          </motion.div>
          
          <div className="space-y-10">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500">The Manifesto</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Born from the streets. Worn by the culture.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              Every silhouette tells a story — from courts to concrete, from underground to icon. 
              We curate the pairs that defined eras and the ones rewriting them now.
            </p>
            <Link to="/about" className="inline-block border border-white/20 px-10 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-500">
              About Decode →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FIND YOUR NEXT PAIR (Final CTA) */}
      <section className="py-48 text-center bg-white border-t border-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-400 block mb-8">Step Inside</span>
          <h2 className="text-6xl md:text-[100px] font-serif mb-12 tracking-tighter">Find your next pair.</h2>
          <Link 
            to="/shop" 
            className="inline-block bg-black text-white px-14 py-6 text-[10px] uppercase tracking-widest font-bold hover:bg-zinc-800 transition-colors group"
          >
            Explore the Shop <span className="inline-block group-hover:translate-x-2 transition-transform ml-2">→</span>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}