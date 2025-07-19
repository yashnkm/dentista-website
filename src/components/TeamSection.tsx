import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">OUR TEAM</h2>
            <p className="mt-4 text-gray-600">
              Our skilled and compassionate team is dedicated to providing top-quality care.
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
              <span className="material-icons">arrow_back</span>
            </button>
            <button className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700">
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
          <div className="bg-gray-800 text-white p-12 rounded-lg">
            <p className="text-sm text-gray-400">MEET US</p>
            <h3 className="text-3xl font-bold mt-4">We are a team of experts</h3>
            <p className="mt-4 text-gray-300">
              Our dentists and staff are highly trained and committed to your oral health and beautiful smile.
            </p>
            <button className="mt-8 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
              VIEW TEAM
            </button>
          </div>
          <div className="relative">
            <img 
              alt="Portrait of Dr. Marc Catherine" 
              className="rounded-lg w-full h-96 object-cover" 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
            />
            <div className="absolute bottom-0 right-0 bg-white p-6 rounded-tl-lg rounded-br-lg shadow-lg max-w-xs">
              <h4 className="font-bold text-xl">Dr. Marc Catherine</h4>
              <p className="text-gray-600 mt-2">
                Dr. Marc Catherine is an experienced dentist with a passion for creating beautiful and healthy smiles.
              </p>
              <a className="text-blue-600 hover:underline mt-4 inline-block" href="#profile">
                View full profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;