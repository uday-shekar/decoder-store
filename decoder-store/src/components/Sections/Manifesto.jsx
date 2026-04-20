import { Link } from 'react-router-dom';
import Button from '../Common/Button';
 
export default function Manifesto() {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: Image */}
        <div className="min-h-96 lg:min-h-screen">
          <img
            src="/assets/images/manifesto-image.jpg"
            alt="Sneaker manifesto"
            className="w-full h-full object-cover"
          />
        </div>
 
        {/* Right: Content */}
        <div className="flex items-center justify-center p-8 md:p-16">
          <div className="max-w-xl space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 mb-6">
                THE MANIFESTO
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Born from the streets. Worn by the culture.
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every silhouette tells a story — from courts to concrete, from underground to icon. We curate the pairs that defined eras and the ones rewriting them now.
              </p>
            </div>
 
            <Link to="/about">
              <Button variant="outline" size="lg">
                ABOUT DECODE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}