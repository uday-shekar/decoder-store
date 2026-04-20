import Button from '../Common/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img src="/assets/images/hero-bg.jpg" className="w-full h-full object-cover opacity-60" alt="Hero" />
      </div>
      <div className="relative z-10 container-custom w-full">
        <p className="text-white text-[12px] tracking-[0.4em] font-bold mb-6">NEW DROP · 2026</p>
        <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight mb-8">
          Decode the <br /> Sneakers Culture
        </h1>
        <div className="flex space-x-4">
          <Button variant="white">SHOP NOW</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">OUR STORY</Button>
        </div>
      </div>
    </section>
  );
}