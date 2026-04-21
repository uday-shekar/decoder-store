import React from 'react';
import img from '../assets/img9.jpeg';

export default function About() {
  return (
    <div className="pt-32 md:pt-40 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Fixed Image Height Container */}
        <div className="w-full h-[500px] md:h-[600px] overflow-hidden rounded-sm bg-gray-100">
          <img 
            src={img} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
            alt="Culture" 
          />
        </div>

        <div className="space-y-6">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-400 block">
            The Manifesto
          </span>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight tracking-tighter">
            Born from the streets. <br className="hidden md:block"/> Worn by the culture.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Every silhouette tells a story — from courts to concrete, from underground to icon. 
            We curate the pairs that defined eras and the ones rewriting them now.
          </p>
          
          {/* Optional: Add a button or link to make it look complete */}
          <div className="pt-4">
             <button className="border-b-2 border-black pb-1 text-xs uppercase font-bold tracking-widest hover:opacity-50 transition">
               Learn More
             </button>
          </div>
        </div>

      </div>
    </div>
  );
}