import React from 'react';

const ClinicSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900">OUR CLINIC</h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Experience dental care in a modern, comfortable, and state-of-the-art environment.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <img 
            alt="Interior of a modern dental clinic" 
            className="rounded-lg w-full h-80 object-cover" 
            src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
          />
          <img 
            alt="Dental chair in a clean clinic room" 
            className="rounded-lg w-full h-80 object-cover" 
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClinicSection;