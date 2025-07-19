import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80')"}}>
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="relative z-10 max-w-lg">
          <div className="backdrop-blur-3xl bg-white/0.1 p-8 rounded-2xl shadow-lg" style={{backdropFilter: 'blur(40px)'}}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">WE CARE ABOUT YOUR SMILE</h1>
            <p className="mt-4 text-lg text-gray-700">
              Our dedicated team of professionals provides top-notch dental services in a friendly atmosphere, 
              ensuring your dental health is our priority.
            </p>
            <button className="mt-8 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors">
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;