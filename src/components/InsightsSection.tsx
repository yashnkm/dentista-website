import React from 'react';

interface InsightCardProps {
  category: string;
  title: string;
  description?: string;
  imageUrl: string;
  categoryColor: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ category, title, description, imageUrl, categoryColor }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img alt={title} className="w-full h-48 object-cover" src={imageUrl} />
      <div className="p-6">
        <p className={`text-sm ${categoryColor}`}>{category}</p>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

const InsightsSection: React.FC = () => {
  const insights = [
    {
      category: 'INNOVATION',
      title: 'Behind the Smile: A Day in the Life of a Dentist',
      description: "Ever wondered what a dentist's day looks like? This article gives you a behind-the-scenes look at the challenges and rewards they face.",
      imageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      categoryColor: 'text-blue-600'
    },
    {
      category: 'NEWS',
      title: 'Navigating the Dental Insurance Maze',
      imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      categoryColor: 'text-red-600'
    },
    {
      category: 'DENTIST',
      title: 'Laying the Foundation for a Healthy Smile',
      imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      categoryColor: 'text-green-600'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-gray-900">INSIGHTS</h2>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700">
            VIEW POSTS
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {insights.map((insight, index) => (
            <InsightCard
              key={index}
              category={insight.category}
              title={insight.title}
              description={insight.description}
              imageUrl={insight.imageUrl}
              categoryColor={insight.categoryColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;