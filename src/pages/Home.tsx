import React from 'react';
import Button from '@/components/ui/Button';

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">habit track</h1>
          <p className="text-xl text-gray-600 mb-8">Create a proper step by step process to build this habit tracker website, where we use supabase for storage and authentication., Users can create habits and set goals accordigly.</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature One</h2>
            <p className="text-gray-600">A key feature of our application that provides significant value to users.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature Two</h2>
            <p className="text-gray-600">Another important capability that makes our application stand out.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature Three</h2>
            <p className="text-gray-600">A third key benefit that users will enjoy when using our application.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;