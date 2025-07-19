import React, { useState } from 'react';

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
  };

  return (
    <section 
      className="relative bg-cover bg-center py-32" 
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80')"}}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gray-800 bg-opacity-80 p-12 rounded-lg text-white max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold">BOOK ONLINE</h2>
          <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <input
              className="bg-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              className="bg-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              className="bg-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <select
              className="bg-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Service</option>
              <option value="dental-veneers">Dental Veneers</option>
              <option value="teeth-whitening">Teeth Whitening</option>
              <option value="dental-crowns">Dental Crowns</option>
              <option value="dental-implants">Dental Implants</option>
            </select>
            <div className="md:col-span-2">
              <button
                className="w-full bg-white text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                type="submit"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;