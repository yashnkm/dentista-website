import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-8">
          <h3 className="text-2xl font-semibold text-gray-900">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <form className="mt-4 md:mt-0 flex" onSubmit={handleNewsletterSubmit}>
            <input
              className="bg-white p-3 rounded-l-full w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Your Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="bg-gray-800 text-white px-6 py-3 rounded-r-full hover:bg-gray-700 transition-colors"
              type="submit"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
        <div className="grid md:grid-cols-4 gap-8 pt-8">
          <div>
            <h4 className="font-bold text-lg">WONDER SMILES</h4>
            <p className="text-sm text-gray-600 mt-2">DENTAL CLINIC, PUNE</p>
            <p className="text-sm text-gray-600 mt-4">123 Dental St, Pune, India</p>
            <p className="text-sm text-gray-600">(123) 456-7890</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">SERVICES</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a className="hover:underline transition-colors" href="#veneers">Dental Veneers</a></li>
              <li><a className="hover:underline transition-colors" href="#whitening">Teeth Whitening</a></li>
              <li><a className="hover:underline transition-colors" href="#crowns">Dental Crowns</a></li>
              <li><a className="hover:underline transition-colors" href="#implants">Dental Implants</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">UTILITY PAGES</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a className="hover:underline transition-colors" href="#contact">Contact Us</a></li>
              <li><a className="hover:underline transition-colors" href="#about">About Us</a></li>
              <li><a className="hover:underline transition-colors" href="#blog">Blog</a></li>
              <li><a className="hover:underline transition-colors" href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-6 text-sm text-gray-500 flex justify-between">
          <p>© 2024 Wonder Smiles. All Rights Reserved.</p>
          <p>Powered by NATHAN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;