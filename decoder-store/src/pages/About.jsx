export default function About() {
  return (
    <div className="pt-40 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <img src="/about-img.jpg" className="w-full grayscale" alt="Culture" />
        <div>
          <span className="uppercase tracking-widest text-xs text-gray-400">The Manifesto</span>
          <h2 className="text-7xl font-serif mt-6 mb-8 leading-tight">Born from the streets. Worn by the culture.</h2>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Every silhouette tells a story — from courts to concrete, from underground to icon. 
            We curate the pairs that defined eras and the ones rewriting them now.
          </p>
        </div>
      </div>
    </div>
  );
}