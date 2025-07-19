import React from 'react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  variant: 'light' | 'dark';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, variant }) => {
  const isLight = variant === 'light';
  
  return (
    <div className={`
      ${isLight ? 'bg-white text-gray-900' : 'bg-slate-700 text-white'} 
      p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full
    `}>
      <div className={`text-lg font-light mb-6 ${isLight ? 'text-gray-400' : 'text-gray-300'}`}>
        /{number}
      </div>
      <h3 className="text-2xl font-semibold mb-4 leading-tight">
        {title}
      </h3>
      <p className={`${isLight ? 'text-gray-600' : 'text-gray-300'} leading-relaxed`}>
        {description}
      </p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* 2x2 Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* TOP LEFT - Header Content */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-500 text-sm font-medium tracking-wider mb-4">OUR OFFERS</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">WHAT WE DO</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team provides personalized care. From cleanings to advanced cosmetic procedures. Contact us!
            </p>
          </div>

          {/* TOP RIGHT - Cards 1 & 2 */}
          <div className="grid grid-rows-2 gap-6">
            <ServiceCard
              number="1"
              title="Dental Veneers"
              description="Custom-made shells designed to create a flawless smile."
              variant="light"
            />
            <ServiceCard
              number="2"
              title="Teeth Whitening"
              description="Brighten your smile with effective whitening treatments."
              variant="dark"
            />
          </div>

          {/* BOTTOM LEFT - Cards 3 & 4 */}
          <div className="grid grid-rows-2 gap-6">
            <ServiceCard
              number="3"
              title="Dental Crowns"
              description="Durable caps for appearance of damaged teeth"
              variant="light"
            />
            <ServiceCard
              number="4"
              title="Dental Implants"
              description="Solution for missing teeth & enhancing smile"
              variant="dark"
            />
          </div>

          {/* BOTTOM RIGHT - Image with button */}
          <div className="relative overflow-hidden rounded-2xl min-h-[400px]">
            <img 
              alt="A smiling woman with beautiful teeth" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <div className="absolute bottom-8 left-8">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                VIEW SERVICES
              </button>
            </div>
            <div className="absolute top-8 right-8">
              <span className="material-icons text-white text-3xl">arrow_forward</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;