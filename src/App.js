import React from 'react';
import ReviewSection from './components/ReviewSection';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="top-section flex items-center justify-center text-white py-16">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Reviews of Our <br />Services
          </h1>
          <p className="text-base md:text-lg mb-12">
            Our clients are at the center of everything we do. We consider each 
            project not just a construction endeavor, but a collaborative 
            journey with you.
          </p>
        </div>
      </div>
      <ReviewSection />
    </div>
  );
};

export default App;