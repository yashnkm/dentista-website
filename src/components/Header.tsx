import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">
          WONDER SMILES
          <p className="text-sm font-normal text-gray-500">DENTAL CLINIC, PUNE</p>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-gray-600 hover:text-gray-900" href="#services">SERVICES</a>
          <a className="text-gray-600 hover:text-gray-900" href="#gallery">GALLERY</a>
          <a className="text-gray-600 hover:text-gray-900" href="#news">NEWS</a>
          <a className="text-gray-600 hover:text-gray-900" href="#pages">PAGES</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a className="text-gray-600 hover:text-gray-900 flex items-center" href="#cart">
            <span className="material-icons">shopping_cart</span>
            <span className="ml-2">CART (0)</span>
          </a>
          <a className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700" href="#book">
            BOOK APPOINTMENT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;