import { services, whyDecode } from '../../data/services';
import IconCard from '../Common/IconCard';
import SectionTitle from '../Common/SectionTitle';
 
export default function ServicesSection() {
  return (
    <>
      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            label="DESIGNED AROUND YOU"
            title="Designed around you."
            subtitle="Service that matches the product. Every step — from order to doorstep — handled with care."
            centered
          />
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            {services.map((service) => (
              <IconCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                variant="border"
              />
            ))}
          </div>
        </div>
      </section>
 
      {/* Why Decode Section */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest text-gray-400 mb-6">
              WHY DECODE
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">
              Built different.
            </h2>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDecode.map((item) => (
              <IconCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}