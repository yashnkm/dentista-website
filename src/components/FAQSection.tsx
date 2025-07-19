import React from 'react';

interface FAQItemProps {
  question: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center cursor-pointer hover:shadow-md transition-shadow">
      <p className="font-semibold">{question}</p>
      <span className="material-icons text-gray-400">arrow_forward_ios</span>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    'What should I expect during my first visit?',
    'How often should I visit the dentist?',
    'What are the office hours and location?',
    'What are the options for payment?',
    'What technologies do you use in your treatments?'
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900">GOT ANY QUESTIONS?</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((question, index) => (
            <FAQItem key={index} question={question} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;